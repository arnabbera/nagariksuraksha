import { createHomepageModel } from "../models/HomepageModel";
import homepageRepository from "../repositories/HomepageRepository";

export const getHomepageData = async () => {
  const homepage = await homepageRepository.getHomepage();

  return homepage || createHomepageModel();
};

export const saveHomepageData = async (
  homepageData,
  updatedBy = "system",
) => {
  const existingHomepage =
    await homepageRepository.getHomepage();

  const payload = {
    ...createHomepageModel(homepageData),
    updatedBy,
    version:
      Number(existingHomepage?.version || 0) + 1,
  };

  if (!existingHomepage) {
    return homepageRepository.createHomepage(payload);
  }

  return homepageRepository.updateHomepage(payload);
};

export const updateHomepageAnnouncement = async (
  announcement,
  updatedBy = "system",
) => {
  return homepageRepository.updateHomepage({
    announcement,
    updatedBy,
  });
};

export const updateHomepageHero = async (
  hero,
  updatedBy = "system",
) => {
  return homepageRepository.updateHomepage({
    hero,
    updatedBy,
  });
};

export const updateHomepageSections = async (
  sections,
  updatedBy = "system",
) => {
  return homepageRepository.updateHomepage({
    sections,
    updatedBy,
  });
};

export const updateHomepageSeo = async (
  seo,
  updatedBy = "system",
) => {
  return homepageRepository.updateHomepage({
    seo,
    updatedBy,
  });
};

export default {
  getHomepageData,
  saveHomepageData,
  updateHomepageAnnouncement,
  updateHomepageHero,
  updateHomepageSections,
  updateHomepageSeo,
};