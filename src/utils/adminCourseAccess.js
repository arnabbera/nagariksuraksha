export const isAdministrator = ({ role, profile } = {}) =>
  role === "admin" || profile?.role === "admin";

export const createAdminCourseEnrollment = (
  course,
  administratorId = "admin",
) => ({
  id: `admin-access-${course?.id || "course"}`,
  studentId: administratorId,
  courseId: course?.id || "",
  courseTitle: course?.title || "",
  status: "active",
  accessType: "administrator",
  deleted: false,
  progress: {
    percentage: 0,
  },
  certification: {
    status: "active",
    payment: {
      status: "paid",
      provider: "administrator-access",
      amount: 0,
    },
    access: {
      course: true,
      pdfDownload: true,
      mockTests: true,
      finalExam: true,
      certificate: true,
    },
    mockTests: {},
  },
});

