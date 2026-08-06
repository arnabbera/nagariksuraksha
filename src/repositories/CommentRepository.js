import {
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { COMMENT_STATUS } from "../constants/enums";
import { BaseRepository } from "./BaseRepository";

class CommentRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.COMMENTS);
  }

  async getPending(pageSize = 50) {
    const commentsQuery = query(
      this.collection(),
      where("status", "==", COMMENT_STATUS.PENDING),
      where("deleted", "==", false),
      orderBy("createdAt", "desc"),
      limit(pageSize)
    );

    const snapshot = await getDocs(commentsQuery);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async getApproved(contentId, pageSize = 100) {
    const commentsQuery = query(
      this.collection(),
      where("contentId", "==", contentId),
      where("status", "==", COMMENT_STATUS.APPROVED),
      where("deleted", "==", false),
      orderBy("createdAt", "asc"),
      limit(pageSize)
    );

    const snapshot = await getDocs(commentsQuery);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async approve(id, adminId) {
    return this.update(id, {
      status: COMMENT_STATUS.APPROVED,
      moderation: {
        approvedBy: adminId,
        approvedAt: new Date(),
      },
    });
  }

  async reject(id, adminId, reason = "") {
    return this.update(id, {
      status: COMMENT_STATUS.REJECTED,
      moderation: {
        rejectedBy: adminId,
        rejectedAt: new Date(),
        spamReason: reason,
      },
    });
  }

  async markAsSpam(id, adminId) {
    return this.update(id, {
      status: COMMENT_STATUS.SPAM,
      moderation: {
        rejectedBy: adminId,
        rejectedAt: new Date(),
        spamReason: "Marked as spam",
      },
    });
  }

  async reply(id, message, adminId) {
    return this.update(id, {
      adminReply: {
        message,
        repliedBy: adminId,
        repliedAt: new Date(),
      },
    });
  }

  async softDelete(id, deletedBy = "system") {
    return this.update(id, {
      deleted: true,
      deletedBy,
      deletedAt: new Date(),
    });
  }

  async restore(id, updatedBy = "system") {
    return this.update(id, {
      deleted: false,
      deletedAt: null,
      deletedBy: null,
      updatedBy,
    });
  }
}

export const commentRepository = new CommentRepository();

export default commentRepository;