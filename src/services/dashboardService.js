import dashboardRepository from "../repositories/DashboardRepository";
import homepageRepository from "../repositories/HomepageRepository";

export const getDashboardStatistics = async () => {
  try {
    return await dashboardRepository.getStatistics();
  } catch (error) {
    console.error("Failed to load dashboard statistics:", error);

    throw new Error(
      "Unable to load dashboard statistics. Please try again.",
    );
  }
};

export const savePublicHomepageStatistics = async (statistics) => {
  const liveStatistics = {
    students: Number(statistics?.students || 0),
    courses: Number(statistics?.courses || 0),
    chapters: Number(statistics?.chapters || 0),
    certifications: Number(statistics?.certifications || 0),
    refreshedAt: new Date(),
  };

  await homepageRepository.updateHomepage({
    liveStatistics,
  });

  return liveStatistics;
};

export const refreshPublicHomepageStatistics = async () => {
  const statistics =
    await dashboardRepository.getPublicHomepageStatistics();

  return savePublicHomepageStatistics(statistics);
};

export default {
  getDashboardStatistics,
  savePublicHomepageStatistics,
  refreshPublicHomepageStatistics,
};
