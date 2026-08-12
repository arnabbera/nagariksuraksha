import React from "react";

import { useAuth } from "../../../../hooks/useAuth";

import {
  CERTIFICATION_PAYMENT_STATUS,
  CERTIFICATION_STATUS,
  FINAL_EXAM_STATUS,
  MOCK_TEST_STATUS,
} from "../../../../models/StudentEnrollmentModel";

// =========================================================
// EXAM ACCESS GUARD
// =========================================================

export default function ExamAccessGuard({
  enrollment,

  examType = "mock",

  mockTestNumber = 1,

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

    const testNumber =
      Number(
        mockTestNumber ||
          1,
      );

    const mockTests =
      certification.mockTests ||
      {};

    const currentTest =
      mockTests[
        `test${testNumber}`
      ];

    // =====================================================
    // TEST MUST EXIST
    // =====================================================

    if (!currentTest) {
      return (
        <>
          <LockedExam
            title={`Mock Test ${testNumber} Not Available`}
            message="This Mock Test has not yet been configured."
          />

          <ExamAccessGuardStyles />
        </>
      );
    }

    // =====================================================
    // MOCK TEST 2 REQUIRES MOCK TEST 1 COMPLETION
    // =====================================================

    if (
      testNumber === 2 &&
      !isMockCompleted(
        mockTests.test1,
      )
    ) {
      return (
        <>
          <LockedExam
            title="Mock Test 2 Locked"
            message="Complete Mock Test 1 before attempting Mock Test 2."
          />

          <ExamAccessGuardStyles />
        </>
      );
    }

    // =====================================================
    // MOCK TEST 3 REQUIRES MOCK TEST 2 COMPLETION
    // =====================================================

    if (
      testNumber === 3 &&
      !isMockCompleted(
        mockTests.test2,
      )
    ) {
      return (
        <>
          <LockedExam
            title="Mock Test 3 Locked"
            message="Complete Mock Test 2 before attempting Mock Test 3."
          />

          <ExamAccessGuardStyles />
        </>
      );
    }

    // =====================================================
    // CURRENT TEST STATUS
    // =====================================================

    if (
      currentTest.status ===
      MOCK_TEST_STATUS.LOCKED
    ) {
      return (
        <>
          <LockedExam
            title={`Mock Test ${testNumber} Locked`}
            message="This Mock Test is currently locked."
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
    const mockTests =
      certification.mockTests ||
      {};

    const allMocksCompleted =
      isMockCompleted(
        mockTests.test1,
      ) &&
      isMockCompleted(
        mockTests.test2,
      ) &&
      isMockCompleted(
        mockTests.test3,
      );

    // =====================================================
    // ALL THREE MOCK TESTS REQUIRED
    // =====================================================

    if (!allMocksCompleted) {
      return (
        <>
          <LockedExam
            title="Final Examination Locked"
            message="Complete Mock Test 1, Mock Test 2 and Mock Test 3 before becoming eligible for the Final Examination."
          />

          <ExamAccessGuardStyles />
        </>
      );
    }

    const finalExam =
      certification.finalExam;

    // =====================================================
    // ADMIN APPROVAL REQUIRED
    // =====================================================

    if (
      !finalExam?.eligible
    ) {
      return (
        <>
          <LockedExam
            title="Final Examination Approval Pending"
            message="You have completed all three Mock Tests. NagarikSuraksha Admin must approve your Final Examination eligibility."
          />

          <ExamAccessGuardStyles />
        </>
      );
    }

    // =====================================================
    // FINAL EXAM NOT SCHEDULED
    // =====================================================

    if (
      finalExam.status ===
        FINAL_EXAM_STATUS.LOCKED ||
      finalExam.status ===
        FINAL_EXAM_STATUS.ELIGIBLE ||
      finalExam.status ===
        FINAL_EXAM_STATUS.NOT_SCHEDULED
    ) {
      return (
        <>
          <LockedExam
            title="Final Examination Not Scheduled"
            message="You are eligible for the Final Examination, but NagarikSuraksha Admin has not yet scheduled it."
          />

          <ExamAccessGuardStyles />
        </>
      );
    }

    // =====================================================
    // FINAL EXAM SCHEDULED
    // =====================================================

    if (
      finalExam.status ===
      FINAL_EXAM_STATUS.SCHEDULED
    ) {
      return (
        <>
          <LockedExam
            title="Final Examination Scheduled"
            message={
              finalExam.scheduledAt
                ? `Your Final Examination is scheduled for ${formatDateTime(
                    finalExam.scheduledAt,
                  )}.`
                : "Your Final Examination has been scheduled. Please return at the scheduled time."
            }
          />

          <ExamAccessGuardStyles />
        </>
      );
    }

    // =====================================================
    // ALREADY COMPLETED
    // =====================================================

    if (
      [
        FINAL_EXAM_STATUS.SUBMITTED,
        FINAL_EXAM_STATUS.PASSED,
        FINAL_EXAM_STATUS.FAILED,
        FINAL_EXAM_STATUS.ABSENT,
      ].includes(
        finalExam.status,
      )
    ) {
      return (
        <>
          <LockedExam
            title="Final Examination Completed"
            message="This Final Examination attempt has already been completed."
          />

          <ExamAccessGuardStyles />
        </>
      );
    }

    // =====================================================
    // ONLY IN-PROGRESS EXAM MAY OPEN
    // =====================================================

    if (
      finalExam.status !==
      FINAL_EXAM_STATUS.IN_PROGRESS
    ) {
      return (
        <>
          <LockedExam
            title="Final Examination Locked"
            message="The Final Examination is not currently available."
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
// MOCK TEST COMPLETION CHECK
// =========================================================

function isMockCompleted(
  test,
) {
  if (!test) {
    return false;
  }

  return [
    MOCK_TEST_STATUS.COMPLETED,
    MOCK_TEST_STATUS.PASSED,
    MOCK_TEST_STATUS.FAILED,
  ].includes(
    test.status,
  );
}

// =========================================================
// DATE FORMATTER
// =========================================================

function formatDateTime(
  value,
) {
  if (!value) {
    return "";
  }

  try {
    let date;

    if (
      typeof value?.toDate ===
      "function"
    ) {
      date =
        value.toDate();
    } else {
      date =
        new Date(value);
    }

    if (
      Number.isNaN(
        date.getTime(),
      )
    ) {
      return "";
    }

    return date.toLocaleString(
      "en-IN",
      {
        dateStyle:
          "medium",

        timeStyle:
          "short",
      },
    );
  } catch {
    return "";
  }
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