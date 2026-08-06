import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const notificationTemplates = [
  {
    id: "registration-successful",
    name: "Registration Successful",
    event: "student.registration.completed",
    audience: "student",
    title: "Welcome to NagarikSuraksha",
    message:
      "Your student account has been created successfully. Your enrollment ID is {{enrollmentId}}.",
    link: "/student",
    channels: {
      inApp: true,
      email: false,
      sms: false,
      whatsapp: false,
    },
    status: "active",
    order: 1,
  },
  {
    id: "course-enrolled",
    name: "Course Enrolled",
    event: "course.enrollment.completed",
    audience: "student",
    title: "Course Enrollment Confirmed",
    message:
      "You have been enrolled in {{courseTitle}}. You can now access the course from your student dashboard.",
    link: "/student/courses",
    channels: {
      inApp: true,
      email: false,
      sms: false,
      whatsapp: false,
    },
    status: "active",
    order: 2,
  },
  {
    id: "certificate-issued",
    name: "Certificate Issued",
    event: "certificate.issued",
    audience: "student",
    title: "Your Certificate Is Ready",
    message:
      "Your certificate for {{courseTitle}} has been issued successfully.",
    link: "/student/certificates",
    channels: {
      inApp: true,
      email: false,
      sms: false,
      whatsapp: false,
    },
    status: "active",
    order: 3,
  },
  {
    id: "comment-approved",
    name: "Comment Approved",
    event: "comment.approved",
    audience: "guest",
    title: "Your Comment Has Been Approved",
    message:
      "Your comment on {{contentTitle}} has been approved and is now visible.",
    link: "{{contentUrl}}",
    channels: {
      inApp: false,
      email: true,
      sms: false,
      whatsapp: false,
    },
    status: "active",
    order: 4,
  },
  {
    id: "new-video-published",
    name: "New Video Published",
    event: "video.published",
    audience: "all-students",
    title: "New Video Lesson Available",
    message:
      "A new video lesson, {{videoTitle}}, has been published.",
    link: "/videos",
    channels: {
      inApp: true,
      email: false,
      sms: false,
      whatsapp: false,
    },
    status: "active",
    order: 5,
  },
];

export async function seedNotifications() {
  const results = {
    created: 0,
    skipped: 0,
    failed: 0,
  };

  for (const template of notificationTemplates) {
    try {
      const templateReference = doc(
        db,
        "notificationTemplates",
        template.id,
      );

      const templateSnapshot = await getDoc(templateReference);

      if (templateSnapshot.exists()) {
        results.skipped += 1;
        continue;
      }

      await setDoc(templateReference, {
        name: template.name,
        event: template.event,
        audience: template.audience,
        title: template.title,
        message: template.message,
        link: template.link,
        channels: template.channels,
        status: template.status,
        order: template.order,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      results.created += 1;
    } catch (error) {
      console.error(
        `Failed to seed notification template: ${template.id}`,
        error,
      );

      results.failed += 1;
    }
  }

  return {
    status: results.failed > 0 ? "partial" : "success",
    message: `Notification templates completed. Created: ${results.created}, Skipped: ${results.skipped}, Failed: ${results.failed}.`,
    ...results,
  };
}