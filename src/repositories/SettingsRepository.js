import { COLLECTIONS } from "../constants/firestoreCollections";
import { BaseRepository } from "./BaseRepository";

class SettingsRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.SETTINGS);
  }

  async getGeneralSettings() {
    return this.getById("general");
  }

  async createGeneralSettings(data) {
    return this.create("general", data);
  }

  async updateGeneralSettings(data) {
    const exists = await this.exists("general");

    if (!exists) {
      return this.create("general", data);
    }

    return this.update("general", data);
  }
}

export const settingsRepository = new SettingsRepository();
export default settingsRepository;