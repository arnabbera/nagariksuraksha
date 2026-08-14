import {
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { COURSE_STATUS } from "../constants/enums";
import { BaseRepository } from "./BaseRepository";

class CourseRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.COURSES);
  }

  // =========================================================
  // PUBLISHED COURSES
  // =========================================================

  async getPublishedCourses({
    featured = null,
    courseType = null,
    accessType = null,
    pageSize = 20,
  } = {}) {
    const constraints = [
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
    ];

    if (featured !== null) {
      constraints.push(
        where(
          "featured",
          "==",
          featured,
        ),
      );
    }

    if (courseType) {
      constraints.push(
        where(
          "courseType",
          "==",
          courseType,
        ),
      );
    }

    if (accessType) {
      constraints.push(
        where(
          "accessType",
          "==",
          accessType,
        ),
      );
    }

    constraints.push(
      orderBy(
        "order",
        "asc",
      ),
    );

    constraints.push(
      limit(pageSize),
    );

    const coursesQuery =
      query(
        this.collection(),
        ...constraints,
      );

    const snapshot =
      await getDocs(
        coursesQuery,
      );

    return snapshot.docs.map(
      (courseDocument) => ({
        ...courseDocument.data(),

        /*
         * Always put the actual Firestore
         * document ID last so a stored "id"
         * field cannot overwrite it.
         */
        id: courseDocument.id,
      }),
    );
  }

  // =========================================================
  // FEATURED COURSES
  // =========================================================

  async getFeaturedCourses(
    pageSize = 6,
  ) {
    return this.getPublishedCourses({
      featured: true,
      pageSize,
    });
  }

  // =========================================================
  // COURSE BY SLUG
  // =========================================================

  async getBySlug(slug) {
    if (!slug) {
      return null;
    }

    /*
     * IMPORTANT:
     *
     * Student Firestore rules allow students
     * to read only courses whose status is:
     *
     * published
     *
     * Firestore security rules are not filters.
     *
     * Therefore the query itself must constrain
     * the result to published courses.
     */

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

    if (snapshot.empty) {
      return null;
    }

    const courseDocument =
      snapshot.docs[0];

    return {
      ...courseDocument.data(),

      /*
       * Actual Firestore document ID must win.
       */
      id: courseDocument.id,
    };
  }

  // =========================================================
  // DRAFT COURSES
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

        limit(pageSize),
      );

    const snapshot =
      await getDocs(
        coursesQuery,
      );

    return snapshot.docs.map(
      (courseDocument) => ({
        ...courseDocument.data(),

        id: courseDocument.id,
      }),
    );
  }

  // =========================================================
  // PUBLISH COURSE
  // =========================================================

  async publish(id) {
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

  async archive(id) {
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
        featured,
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
              semesters || 0,
            ),

          subjects:
            Number(
              subjects || 0,
            ),

          chapters:
            Number(
              chapters || 0,
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

        deletedAt: null,

        deletedBy: null,

        updatedBy,
      },
    );
  }
}

export const courseRepository =
  new CourseRepository();

export default courseRepository;