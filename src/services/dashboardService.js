import dashboardRepository from "../repositories/DashboardRepository";

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

export default {
  getDashboardStatistics,
};