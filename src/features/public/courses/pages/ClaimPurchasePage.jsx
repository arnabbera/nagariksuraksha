import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";

export default function ClaimPurchasePage() {
  const { firebaseUser } = useAuth();
  const navigate = useNavigate();
  const [code, setCode] = useState(() => localStorage.getItem("sanhita360-guest-latest") || "");
  const [status, setStatus] = useState("");
  const [paid, setPaid] = useState(false);
  const [busy, setBusy] = useState(false);
  const checkedAccount = useRef("");

  useEffect(() => {
    if (!firebaseUser || checkedAccount.current === firebaseUser.uid) return;
    checkedAccount.current = firebaseUser.uid;
    let active = true;
    const findPaidCourses = async () => {
      setBusy(true);
      try {
        const token = await firebaseUser.getIdToken();
        const response = await fetch("/api/guest/claim-email", {
          method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${token}` },
          body: "{}",
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Unable to find paid purchases.");
        if (result.claimed?.length && active) {
          localStorage.removeItem("sanhita360-guest-latest");
          for (const courseId of result.claimed) localStorage.removeItem(`sanhita360-guest-${courseId}`);
          navigate("/student/enrolled-courses", { replace: true });
        } else if (active) {
          setStatus(code ? "Enter your purchase code below to check payment and claim access." :
            "No unclaimed paid courses were found for this verified email. Enter your purchase code if you used another address.");
        }
      } catch (error) { if (active) setStatus(error.message); }
      finally { if (active) setBusy(false); }
    };
    void findPaidCourses();
    return () => { active = false; };
    // Run when the signed-in identity changes, not when the code input changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const confirm = async () => {
    setBusy(true);
    setStatus("");
    try {
      const response = await fetch("/api/guest/verify-payment", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ purchaseCode: code.trim() }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Payment is still pending.");
      setPaid(true);
      setStatus("Payment confirmed. Keep this code private until the course appears in your account.");
    } catch (error) { setStatus(error.message); }
    finally { setBusy(false); }
  };

  const claim = async () => {
    setBusy(true);
    setStatus("");
    try {
      const token = await firebaseUser.getIdToken();
      const response = await fetch("/api/guest/claim", {
        method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${token}` },
        body: JSON.stringify({ purchaseCode: code.trim() }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to claim purchase.");
      localStorage.removeItem("sanhita360-guest-latest");
      localStorage.removeItem(`sanhita360-guest-${result.courseId}`);
      navigate("/student/enrolled-courses");
    } catch (error) { setStatus(error.message); }
    finally { setBusy(false); }
  };

  return (
    <main className="guest-page">
      <section className="guest-card">
        <Link to="/law-courses">← Browse courses</Link>
        <h1>Your course purchase</h1>
        <p>After signing in with the same verified email used at checkout, paid courses are added
          to your account. You can also enter a private purchase code to recover a payment.</p>
        <label>Purchase code<input value={code} onChange={(event) => setCode(event.target.value.trim())}
          autoComplete="off" spellCheck={false} /></label>
        <button type="button" disabled={busy || !/^[a-f0-9]{64}$/.test(code)} onClick={confirm}>Check payment</button>
        {status && <p role="status">{status}</p>}
        {paid && (firebaseUser ?
          <button type="button" disabled={busy} onClick={claim}>Add course to my account</button> :
          <Link to="/login?next=%2Fclaim-purchase">Sign in to access your course</Link>)}
        {firebaseUser && <p><Link to="/student/enrolled-courses">View my enrolled courses</Link></p>}
        <p>For payment help, keep your Razorpay receipt and purchase code.</p>
      </section>
      <style>{`
        .guest-page { min-height: 100vh; padding: 56px 20px; background: #eff6ff; color: #0f172a; font-family: Arial, sans-serif; }
        .guest-card { max-width: 580px; margin: auto; padding: 32px; border-radius: 18px; background: white; box-shadow: 0 15px 40px #1d4ed81c; }
        .guest-card h1 { margin: 24px 0 14px; }
        .guest-card p { line-height: 1.6; }
        .guest-card a { color: #1d4ed8; }
        .guest-card label { display: grid; gap: 6px; font-weight: 700; }
        .guest-card input { width: 100%; padding: 12px; border: 1px solid #94a3b8; border-radius: 8px; font: inherit; }
        .guest-card button { display: block; width: 100%; margin: 16px 0; padding: 14px; border: 0; border-radius: 9px; background: #1d4ed8; color: white; font: inherit; font-weight: 700; cursor: pointer; }
        .guest-card button:disabled { opacity: .6; }
      `}</style>
    </main>
  );
}
