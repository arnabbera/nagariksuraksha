import { useAuth } from "../../../../hooks/useAuth";

import {
  CERTIFICATION_PAYMENT_STATUS,
  CERTIFICATION_STATUS,
} from "../../../../models/StudentEnrollmentModel";

// =========================================================
// EXAM ACCESS GUARD
// =========================================================

export default function ExamAccessGuard({
  enrollment,

  examType = "mock",

  children,
}) {
  const {
    role,
  } = useAuth();

  // =======================================================
  // ADMIN PREVIEW ACCESS
  // =======================================================
  //
  // Admin behaves like a fully entitled certification
  // student for preview/testing purposes.
  //
  // Admin does NOT need:
  //
  // - course enrollment
  // - certification payment
  // - mock-test completion
  // - final-exam approval
  // - final-exam scheduling
  //
  // =======================================================

  if (
    role === "admin"
  ) {
    return (
      <>
        <div className="ns-admin-exam-preview">
          <strong>
            ADMIN PREVIEW
          </strong>

          <span>
            Certification and examination access restrictions are bypassed for administrator testing.
          </span>
        </div>

        {children}

        <ExamAccessGuardStyles />
      </>
    );
  }

  // =======================================================
  // STUDENT — COURSE ENROLLMENT REQUIRED
  // =======================================================

  if (!enrollment) {
    return (
      <>
        <LockedExam
          title="Course Enrollment Required"
          message="You must first enroll in this course before accessing certification examinations."
        />

        <ExamAccessGuardStyles />
      </>
    );
  }

  const certification =
    enrollment.certification;

  // =======================================================
  // STUDENT — CERTIFICATION ENROLLMENT REQUIRED
  // =======================================================

  if (!certification) {
    return (
      <>
        <LockedExam
          title="Certification Required"
          message="Enroll for certification to access Mock Tests and the Final Examination."
        />

        <ExamAccessGuardStyles />
      </>
    );
  }

  // =======================================================
  // PAYMENT REQUIRED
  // =======================================================

  const paymentStatus =
    certification.payment
      ?.status;

  const paymentSatisfied =
    paymentStatus ===
      CERTIFICATION_PAYMENT_STATUS.PAID ||
    paymentStatus ===
      CERTIFICATION_PAYMENT_STATUS.NOT_REQUIRED;

  if (!paymentSatisfied) {
    return (
      <>
        <LockedExam
          title="Certification Payment Required"
          message="Complete the certification payment before accessing Mock Tests and certification examinations."
        />

        <ExamAccessGuardStyles />
      </>
    );
  }

  // =======================================================
  // CERTIFICATION MUST BE ACTIVE
  // =======================================================

  const certificationActive =
    certification.status ===
      CERTIFICATION_STATUS.ACTIVE ||
    certification.status ===
      CERTIFICATION_STATUS.COMPLETED;

  if (!certificationActive) {
    return (
      <>
        <LockedExam
          title="Certification Not Active"
          message="Your certification enrollment has not yet been activated."
        />

        <ExamAccessGuardStyles />
      </>
    );
  }

  // =======================================================
  // MOCK TEST ACCESS
  // =======================================================

  if (
    examType === "mock"
  ) {
    if (
      certification.access
        ?.mockTests !== true
    ) {
      return (
        <>
          <LockedExam
            title="Mock Tests Locked"
            message="Mock Test access is not enabled for this certification."
          />

          <ExamAccessGuardStyles />
        </>
      );
    }

    return (
      <>
        {children}

        <ExamAccessGuardStyles />
      </>
    );
  }

  // =======================================================
  // FINAL EXAM ACCESS
  // =======================================================

  if (
    examType === "final"
  ) {
    return (
      <>
        {children}

        <ExamAccessGuardStyles />
      </>
    );
  }

  // =======================================================
  // INVALID EXAM TYPE
  // =======================================================

  return (
    <>
      <LockedExam
        title="Examination Unavailable"
        message="The requested examination could not be opened."
      />

      <ExamAccessGuardStyles />
    </>
  );
}

// =========================================================
// LOCKED EXAM
// =========================================================

function LockedExam({
  title,
  message,
}) {
  return (
    <div className="ns-exam-locked-wrapper">
      <div className="ns-exam-locked-card">
        <div className="ns-exam-lock-icon">
          🔒
        </div>

        <h2>
          {title}
        </h2>

        <p>
          {message}
        </p>
      </div>
    </div>
  );
}

// =========================================================
// STYLES
// =========================================================

function ExamAccessGuardStyles() {
  return (
    <style>
      {`
        .ns-admin-exam-preview {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          background: #eff6ff;
          color: #1e40af;
          padding: 11px 14px;
        }

        .ns-admin-exam-preview strong {
          border-radius: 999px;
          background: #2563eb;
          color: #ffffff;
          padding: 5px 8px;
          font-size: 10px;
          letter-spacing: .04em;
        }

        .ns-admin-exam-preview span {
          font-size: 11px;
          line-height: 1.5;
        }

        .ns-exam-locked-wrapper {
          width: 100%;
          max-width: 760px;
          box-sizing: border-box;
          margin: 32px auto;
          padding: 0 16px;
        }

        .ns-exam-locked-card {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #ffffff;
          padding: 28px;
          box-shadow:
            0 8px 24px
            rgba(
              15,
              23,
              42,
              0.06
            );
        }

        .ns-exam-lock-icon {
          display: flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border-radius: 50%;
          background: #fff7ed;
          font-size: 25px;
        }

        .ns-exam-locked-card h2 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 21px;
        }

        .ns-exam-locked-card p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        @media (max-width: 640px) {
          .ns-admin-exam-preview {
            align-items: flex-start;
            flex-direction: column;
          }

          .ns-exam-locked-card {
            padding: 20px;
          }
        }
      `}
    </style>
  );
}
