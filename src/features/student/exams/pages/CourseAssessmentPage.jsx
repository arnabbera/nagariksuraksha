import { useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaLock } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth";
import { cpcFinalExam, cpcMockTests } from "../../../../data/exams/cpc/assessments";
import { getCourseBySlug } from "../../../../services/courseService";
import {
  getStudentEnrollment,
  hasPaidCourseAccess,
  saveFinalExamResult,
  saveMockTestResult,
} from "../../../../services/studentEnrollmentService";
import Button from "../../../../shared/components/Button";
import Card from "../../../../shared/components/Card";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

const completed = (test) =>
  ["passed", "failed", "completed"].includes(test?.status);

export default function CourseAssessmentPage({ examType = "mock" }) {
  const { courseId: courseSlug, testNumber } = useParams();
  const navigate = useNavigate();
  const { firebaseUser, profile } = useAuth();
  const studentId = firebaseUser?.uid || profile?.uid || "";
  const number = Number(testNumber || 1);
  const assessment = examType === "final" ? cpcFinalExam : cpcMockTests[number];

  const [course, setCourse] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!studentId || !courseSlug) return;
    (async () => {
      try {
        setLoading(true);
        const courseData = await getCourseBySlug(courseSlug);
        if (!courseData) throw new Error("Course not found.");
        const enrollmentData = await getStudentEnrollment(studentId, courseData.id);
        setCourse(courseData);
        setEnrollment(enrollmentData);
      } catch (loadError) {
        setError(loadError?.message || "Unable to load this assessment.");
      } finally {
        setLoading(false);
      }
    })();
  }, [courseSlug, studentId]);

  const questions = useMemo(
    () => assessment?.questions || [],
    [assessment],
  );
  const currentQuestion = questions[currentIndex];
  const paid = hasPaidCourseAccess(enrollment);
  const mockTests = enrollment?.certification?.mockTests || {};
  const prerequisiteSatisfied = examType === "mock"
    ? number === 1 || completed(mockTests[`test${number - 1}`])
    : [1, 2, 3].every((candidate) => completed(mockTests[`test${candidate}`]));

  const calculatedResult = useMemo(() => {
    let correct = 0;
    questions.forEach((question) => {
      if (question.correctOptionIds?.includes(answers[question.id])) correct += 1;
    });
    const score = correct * Number(assessment?.marksPerQuestion || 2);
    const maximumMarks = questions.length * Number(assessment?.marksPerQuestion || 2);
    const percentage = maximumMarks ? Math.round((score / maximumMarks) * 100) : 0;
    return {
      correct,
      wrong: Object.keys(answers).length - correct,
      unanswered: questions.length - Object.keys(answers).length,
      score,
      maximumMarks,
      percentage,
      passPercentage: assessment?.passPercentage || (examType === "final" ? 80 : 50),
    };
  }, [answers, assessment, examType, questions]);

  const submit = async () => {
    if (!window.confirm(`Submit ${assessment.title}? Your answers cannot be changed afterward.`)) return;
    try {
      setSaving(true);
      setError("");
      const updated = examType === "final"
        ? await saveFinalExamResult(studentId, course.id, calculatedResult)
        : await saveMockTestResult(studentId, course.id, number, calculatedResult);
      setEnrollment(updated);
      setResult(calculatedResult);
    } catch (submitError) {
      setError(submitError?.message || "Unable to save your result.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <LoadingSpinner fullPage text="Loading assessment..." />;

  if (!assessment || !course) {
    return <Card>{error || "Assessment not found."}</Card>;
  }

  if (!paid || !prerequisiteSatisfied) {
    return (
      <div>
        <PageHeader title="Assessment Locked" description={course.title} />
        <Card>
          <div className="ns-assessment-locked">
            <FaLock />
            <h2>{!paid ? "Paid enrollment required" : "Complete the previous assessment first"}</h2>
            <p>{!paid
              ? "Enroll in this course before attempting its assessments."
              : examType === "final"
                ? "Complete Mock Tests 1, 2 and 3 to unlock the final examination."
                : `Complete Mock Test ${number - 1} to unlock this test.`}</p>
            <Button onClick={() => navigate(`/student/courses/${course.slug}`)}>Return to Course</Button>
          </div>
        </Card>
        <AssessmentStyles />
      </div>
    );
  }

  if (result) {
    const passed = result.percentage >= result.passPercentage;
    return (
      <div>
        <PageHeader title={assessment.title} description="Assessment result" />
        <Card>
          <div className={`ns-assessment-result ${passed ? "passed" : "failed"}`}>
            <FaCheckCircle />
            <h2>{passed ? "Passed" : "Completed"}</h2>
            <strong>{result.score} / {result.maximumMarks}</strong>
            <p>{result.percentage}% · Required: {result.passPercentage}%</p>
            <Button onClick={() => navigate(`/student/courses/${course.slug}`)}>Return to Course</Button>
          </div>
        </Card>
        <AssessmentStyles />
      </div>
    );
  }

  return (
    <div className="ns-assessment-page">
      <PageHeader
        title={assessment.title}
        description={`${questions.length} questions · ${assessment.marksPerQuestion} marks each · ${assessment.durationMinutes} minutes`}
        breadcrumbs={["Student", course.title, examType === "final" ? "Final Examination" : `Mock Test ${number}`]}
      />
      {error && <div className="ns-assessment-error">{error}</div>}
      <Card>
        <div className="ns-assessment-progress">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{Object.keys(answers).length} answered</span>
        </div>
        <div className="ns-assessment-bar"><span style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} /></div>
        <section className="ns-assessment-question">
          <h2>{currentQuestion.question}</h2>
          <div className="ns-assessment-options">
            {currentQuestion.options.map((option) => (
              <label key={option.id} className={answers[currentQuestion.id] === option.id ? "selected" : ""}>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  checked={answers[currentQuestion.id] === option.id}
                  onChange={() => setAnswers((previous) => ({ ...previous, [currentQuestion.id]: option.id }))}
                />
                <span>{option.id.toUpperCase()}</span>
                {option.text}
              </label>
            ))}
          </div>
        </section>
        <div className="ns-assessment-actions">
          <Button variant="secondary" disabled={currentIndex === 0} onClick={() => setCurrentIndex((value) => value - 1)}>
            <FaArrowLeft /> Previous
          </Button>
          {currentIndex < questions.length - 1 ? (
            <Button onClick={() => setCurrentIndex((value) => value + 1)}>Next <FaArrowRight /></Button>
          ) : (
            <Button disabled={saving} onClick={submit}>{saving ? "Saving..." : "Submit Assessment"}</Button>
          )}
        </div>
      </Card>
      <AssessmentStyles />
    </div>
  );
}

function AssessmentStyles() {
  return <style>{`
    .ns-assessment-error { margin-bottom: 16px; border-radius: 10px; background: #fef2f2; color: #b91c1c; padding: 12px 14px; }
    .ns-assessment-progress, .ns-assessment-actions { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
    .ns-assessment-progress { color: #475569; font-size: 13px; font-weight: 700; }
    .ns-assessment-bar { height: 7px; margin: 14px 0 28px; overflow: hidden; border-radius: 999px; background: #e2e8f0; }
    .ns-assessment-bar span { display: block; height: 100%; border-radius: inherit; background: #2563eb; }
    .ns-assessment-question h2 { margin: 0 0 22px; font-size: 21px; line-height: 1.5; }
    .ns-assessment-options { display: grid; gap: 12px; }
    .ns-assessment-options label { display: flex; align-items: center; gap: 12px; border: 1px solid #dbe3ef; border-radius: 12px; padding: 14px; cursor: pointer; }
    .ns-assessment-options label.selected { border-color: #2563eb; background: #eff6ff; }
    .ns-assessment-options label > span { display: grid; width: 28px; height: 28px; place-items: center; border-radius: 8px; background: #e2e8f0; font-weight: 800; }
    .ns-assessment-options input { position: absolute; opacity: 0; }
    .ns-assessment-actions { margin-top: 28px; }
    .ns-assessment-result, .ns-assessment-locked { display: flex; align-items: center; flex-direction: column; padding: 36px 20px; text-align: center; }
    .ns-assessment-result svg, .ns-assessment-locked svg { color: #2563eb; font-size: 42px; }
    .ns-assessment-result.passed svg { color: #16a34a; }
    .ns-assessment-result strong { margin: 8px 0; font-size: 32px; }
    @media (max-width: 640px) { .ns-assessment-actions { align-items: stretch; flex-direction: column; } }
  `}</style>;
}
