import {
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import {
  COLLECTIONS,
} from "../constants/firestoreCollections";

import {
  COURSE_STATUS,
} from "../constants/enums";

import {
  BaseRepository,
} from "./BaseRepository";

class CourseRepository extends BaseRepository {
  constructor() {
    super(
      COLLECTIONS.COURSES,
    );
  }

  // =========================================================
  // PUBLISHED COURSES
  // =========================================================
  //
  // IMPORTANT:
  //
  // Keep the Firestore query deliberately simple.
  //
  // Public/student security rules require:
  //
  // status == published
  // deleted == false
  //
  // Additional catalogue filtering and ordering are performed
  // in JavaScript. This avoids unnecessary Firestore composite
  // indexes for combinations such as:
  //
  // status + deleted + featured + order
  // status + deleted + courseType + order
  // status + deleted + accessType + order
  //
  // =========================================================

  async getPublishedCourses({
    featured = null,
    courseType = null,
    accessType = null,
    pageSize = 20,
  } = {}) {
    const coursesQuery =
      query(
        this.collection(),

        where(
          "status",
          "==",
          COURSE_STATUS.PUBLISHED,
        ),

        where(
          "deleted",
          "==",
          false,
        ),
      );

    const snapshot =
      await getDocs(
        coursesQuery,
      );

    let courses =
      snapshot.docs.map(
        (
          courseDocument,
        ) => ({
          ...courseDocument.data(),

          /*
           * Always use the real Firestore
           * document ID.
           */
          id:
            courseDocument.id,
        }),
      );

    // =======================================================
    // FEATURED FILTER
    // =======================================================

    if (
      featured !==
      null
    ) {
      courses =
        courses.filter(
          (
            course,
          ) =>
            Boolean(
              course.featured,
            ) ===
            Boolean(
              featured,
            ),
        );
    }

    // =======================================================
    // COURSE TYPE FILTER
    // =======================================================

    if (
      courseType
    ) {
      courses =
        courses.filter(
          (
            course,
          ) =>
            course.courseType ===
            courseType,
        );
    }

    // =======================================================
    // ACCESS TYPE FILTER
    // =======================================================

    if (
      accessType
    ) {
      courses =
        courses.filter(
          (
            course,
          ) =>
            course.accessType ===
            accessType,
        );
    }

    // =======================================================
    // SORT
    // =======================================================

    courses.sort(
      (
        first,
        second,
      ) => {
        const firstOrder =
          Number(
            first.order ||
              0,
          );

        const secondOrder =
          Number(
            second.order ||
              0,
          );

        if (
          firstOrder !==
          secondOrder
        ) {
          return (
            firstOrder -
            secondOrder
          );
        }

        return String(
          first.title ||
            "",
        ).localeCompare(
          String(
            second.title ||
              "",
          ),
        );
      },
    );

    // =======================================================
    // PAGE SIZE
    // =======================================================

    const safePageSize =
      Math.max(
        1,
        Number(
          pageSize ||
            20,
        ),
      );

    return courses.slice(
      0,
      safePageSize,
    );
  }

  // =========================================================
  // FEATURED COURSES
  // =========================================================

  async getFeaturedCourses(
    pageSize = 6,
  ) {
    return this.getPublishedCourses(
      {
        featured: true,
        pageSize,
      },
    );
  }

  // =========================================================
  // COURSE BY SLUG
  // =========================================================
  //
  // Public/student course lookup.
  //
  // Keep the published/deleted constraints in the query
  // because Firestore security rules are not filters.
  //
  // =========================================================

  async getBySlug(
    slug,
  ) {
    if (!slug) {
      return null;
    }

    const coursesQuery =
      query(
        this.collection(),

        where(
          "slug",
          "==",
          slug,
        ),

        where(
          "status",
          "==",
          COURSE_STATUS.PUBLISHED,
        ),

        where(
          "deleted",
          "==",
          false,
        ),

        limit(1),
      );

    const snapshot =
      await getDocs(
        coursesQuery,
      );

    if (
      snapshot.empty
    ) {
      return null;
    }

    const courseDocument =
      snapshot.docs[0];

    return {
      ...courseDocument.data(),

      id:
        courseDocument.id,
    };
  }

  // =========================================================
  // DRAFT COURSES
  // =========================================================
  //
  // This remains an admin operation.
  //
  // =========================================================

  async getDraftCourses(
    pageSize = 20,
  ) {
    const coursesQuery =
      query(
        this.collection(),

        where(
          "status",
          "==",
          COURSE_STATUS.DRAFT,
        ),

        where(
          "deleted",
          "==",
          false,
        ),

        orderBy(
          "updatedAt",
          "desc",
        ),

        limit(
          pageSize,
        ),
      );

    const snapshot =
      await getDocs(
        coursesQuery,
      );

    return snapshot.docs.map(
      (
        courseDocument,
      ) => ({
        ...courseDocument.data(),

        id:
          courseDocument.id,
      }),
    );
  }

  // =========================================================
  // PUBLISH COURSE
  // =========================================================

  async publish(
    id,
  ) {
    return this.update(
      id,
      {
        status:
          COURSE_STATUS.PUBLISHED,

        publishedAt:
          new Date(),
      },
    );
  }

  // =========================================================
  // ARCHIVE COURSE
  // =========================================================

  async archive(
    id,
  ) {
    return this.update(
      id,
      {
        status:
          COURSE_STATUS.ARCHIVED,
      },
    );
  }

  // =========================================================
  // FEATURE COURSE
  // =========================================================

  async setFeatured(
    id,
    featured = true,
  ) {
    return this.update(
      id,
      {
        featured:
          Boolean(
            featured,
          ),
      },
    );
  }

  // =========================================================
  // UPDATE COURSE TOTALS
  // =========================================================

  async updateTotals(
    id,
    {
      semesters = 0,
      subjects = 0,
      chapters = 0,
    } = {},
  ) {
    return this.update(
      id,
      {
        totals: {
          semesters:
            Number(
              semesters ||
                0,
            ),

          subjects:
            Number(
              subjects ||
                0,
            ),

          chapters:
            Number(
              chapters ||
                0,
            ),
        },
      },
    );
  }

  // =========================================================
  // SOFT DELETE
  // =========================================================

  async softDelete(
    id,
    deletedBy = "system",
  ) {
    return this.update(
      id,
      {
        deleted: true,

        deletedAt:
          new Date(),

        deletedBy,

        status:
          COURSE_STATUS.ARCHIVED,
      },
    );
  }

  // =========================================================
  // RESTORE COURSE
  // =========================================================

  async restore(
    id,
    updatedBy = "system",
  ) {
    return this.update(
      id,
      {
        deleted: false,

        deletedAt:
          null,

        deletedBy:
          null,

        updatedBy,
      },
    );
  }
}

export const courseRepository =
  new CourseRepository();

export default courseRepository;