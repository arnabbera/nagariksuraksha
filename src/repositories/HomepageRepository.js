import { COLLECTIONS } from "../constants/firestoreCollections";
import { BaseRepository } from "./BaseRepository";

class HomepageRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.HOMEPAGE);
  }

  async getHomepage() {
    return this.getById("main");
  }

  async createHomepage(data) {
    return this.create("main", data);
  }

  async updateHomepage(data) {
    const exists = await this.exists("main");

    if (!exists) {
      return this.create("main", data);
    }

    return this.update("main", data);
  }

  async publishHomepage(version) {
    return this.update("main", {
      published: true,
      publishedVersion: version,
    });
  }

  async unpublishHomepage() {
    return this.update("main", {
      published: false,
    });
  }

  async updateHero(hero) {
    return this.update("main", {
      hero,
    });
  }

  async updateAnnouncement(announcement) {
    return this.update("main", {
      announcement,
    });
  }

  async updateSeo(seo) {
    return this.update("main", {
      seo,
    });
  }

  async updateSections(sections) {
    return this.update("main", {
      sections,
    });
  }

  async updateStatistics(statistics) {
    return this.update("main", {
      statistics,
    });
  }

  async updateLatestContent(latestContent) {
    return this.update("main", {
      latestContent,
    });
  }
}

export const homepageRepository = new HomepageRepository();

export default homepageRepository;