import {
  collection,
  getCountFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import {
  COMMENT_STATUS,
  CONTENT_STATUS,
  CONTENT_TYPES,
  COURSE_STATUS,
  USER_ROLES,
} from "../constants/enums";
import { db } from "../firebase/firebase";

class DashboardRepository {
  async countDocuments(collectionName, constraints = []) {
    const collectionReference = collection(
      db,
      collectionName,
    );

    const countQuery = query(
      collectionReference,
      ...constraints,
    );

    const snapshot = await getCountFromServer(countQuery);

    return snapshot.data().count;
  }

  async countPublishedCourses() {
    const snapshot = await getDocs(
      query(
        collection(db, COLLECTIONS.COURSES),
        where("status", "==", COURSE_STATUS.PUBLISHED),
      ),
    );

    return snapshot.docs.filter(
      (course) => course.data().deleted !== true,
    ).length;
  }

  async getPublicHomepageStatistics() {
    const [
      students,
      courses,
      chapters,
      certifications,
    ] = await Promise.all([
      this.countDocuments(COLLECTIONS.USERS, [
        where("role", "==", USER_ROLES.STUDENT),
      ]),
      this.countPublishedCourses(),
      this.countDocuments(COLLECTIONS.COURSE_CHAPTERS, [
        where("published", "==", true),
      ]),
      this.countDocuments(COLLECTIONS.CERTIFICATES),
    ]);

    return {
      students,
      courses,
      chapters,
      certifications,
    };
  }

  async getStatistics() {
    const [
      publicStatistics,
      articles,
      videos,
      legalServices,
      pendingComments,
    ] = await Promise.all([
      this.getPublicHomepageStatistics(),

      this.countDocuments(COLLECTIONS.CONTENT, [
        where(
          "contentType",
          "==",
          CONTENT_TYPES.ARTICLE,
        ),
        where(
          "status",
          "==",
          CONTENT_STATUS.PUBLISHED,
        ),
      ]),

      this.countDocuments(COLLECTIONS.CONTENT, [
        where(
          "contentType",
          "==",
          CONTENT_TYPES.VIDEO,
        ),
        where(
          "status",
          "==",
          CONTENT_STATUS.PUBLISHED,
        ),
      ]),

      this.countDocuments(COLLECTIONS.CONTENT, [
        where(
          "contentType",
          "==",
          CONTENT_TYPES.SERVICE,
        ),
        where(
          "status",
          "==",
          CONTENT_STATUS.PUBLISHED,
        ),
      ]),

      this.countDocuments(COLLECTIONS.COMMENTS, [
        where(
          "status",
          "==",
          COMMENT_STATUS.PENDING,
        ),
      ]),
    ]);

    return {
      ...publicStatistics,
      articles,
      videos,
      legalServices,
      pendingComments,
    };
  }
}

export const dashboardRepository =
  new DashboardRepository();

export default dashboardRepository;
