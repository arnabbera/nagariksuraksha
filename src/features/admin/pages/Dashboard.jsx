import { useCallback, useEffect, useState } from "react";
import { FaBook, FaBookOpen, FaCertificate, FaFileAlt, FaImage, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

import LoadingSpinner from "../../../shared/components/LoadingSpinner";
import { getDashboardStatistics, refreshPublicHomepageStatistics } from "../../../services/dashboardService";

const adminActions = [
  { title: "Posts & Legal Articles", description: "Create and publish articles with separate desktop 16:9 and mobile 9:16 images.", path: "/admin/posts", icon: FaImage, action: "Manage articles" },
  { title: "Courses", description: "Create legal courses, update information and upload responsive course images.", path: "/admin/courses", icon: FaBook, action: "Manage courses" },
  { title: "Chapters", description: "Organize course chapters, study content and the learning sequence.", path: "/admin/chapters", icon: FaBookOpen, action: "Manage chapters" },
  { title: "YouTube Videos & Resources", description: "Add YouTube lesson links, PDFs, study notes and other chapter resources.", path: "/admin/resources", icon: FaVideo, action: "Manage resources" },
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ courses: 0, chapters: 0, certifications: 0, articles: 0, videos: 0 });

  const loadDashboard = useCallback(async () => {
    try {
      setLoading(true);
      const [dashboardResult, publicStatisticsResult] = await Promise.allSettled([
        getDashboardStatistics(),
        refreshPublicHomepageStatistics(),
      ]);

      if (dashboardResult.status === "fulfilled") {
        setStats((current) => ({ ...current, ...dashboardResult.value }));
      } else {
        console.error(dashboardResult.reason);
      }

      if (publicStatisticsResult.status === "rejected") {
        console.error("Unable to refresh public homepage statistics:", publicStatisticsResult.reason);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(loadDashboard, 0);
    return () => window.clearTimeout(timer);
  }, [loadDashboard]);

  if (loading) {
    return <LoadingSpinner fullPage text="Loading Legal Learning..." />;
  }

  const visibleStats = [
    { label: "Courses", value: stats.courses, icon: FaBook },
    { label: "Chapters", value: stats.chapters, icon: FaBookOpen },
    { label: "Legal Articles", value: stats.articles, icon: FaFileAlt },
    { label: "Learning Videos", value: stats.videos, icon: FaVideo },
    { label: "Certifications", value: stats.certifications, icon: FaCertificate },
  ];

  return (
    <div className="ns-admin-home">
      <section className="ns-admin-hero">
        <span>Restricted Administrator Access</span>
        <h1>Legal Learning Administration</h1>
        <p>Manage the learning content visible across NagarikSuraksha from one familiar, responsive workspace.</p>
        <Link to="/" target="_blank" rel="noopener noreferrer">View Public Homepage</Link>
      </section>

      <section className="ns-admin-stat-grid" aria-label="Legal Learning statistics">
        {visibleStats.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.label}>
              <Icon />
              <span><small>{item.label}</small><strong>{Number(item.value || 0)}</strong></span>
            </article>
          );
        })}
      </section>

      <section className="ns-admin-learning-section">
        <div className="ns-admin-section-heading">
          <span>Legal Learning</span>
          <h2>Manage Public Learning Content</h2>
          <p>Only the authorised administrator can see these upload and editing controls. Public visitors continue to see the normal website.</p>
        </div>

        <div className="ns-admin-action-grid">
          {adminActions.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.path}>
                <div className="ns-admin-action-icon"><Icon /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.path}>{item.action}</Link>
              </article>
            );
          })}
        </div>
      </section>

      <style>{`
        .ns-admin-home, .ns-admin-home * { box-sizing: border-box; }
        .ns-admin-hero { position: relative; overflow: hidden; padding: 58px; border-radius: 24px; color: #fff; background: radial-gradient(circle at 88% 14%,rgba(96,165,250,.3),transparent 30%),linear-gradient(135deg,#0f172a,#1e3a8a 70%,#2563eb); box-shadow: 0 22px 50px rgba(30,58,138,.2); }
        .ns-admin-hero > span, .ns-admin-section-heading > span { color: #bfdbfe; font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
        .ns-admin-hero h1 { max-width: 760px; margin: 12px 0; color: #fff; font-family: Georgia,serif; font-size: clamp(34px,5vw,55px); line-height: 1.08; }
        .ns-admin-hero p { max-width: 720px; margin: 0; color: #dbeafe; font-size: 16px; line-height: 1.75; }
        .ns-admin-hero a { display: inline-flex; margin-top: 24px; padding: 12px 17px; border-radius: 10px; background: #fff; color: #1d4ed8; text-decoration: none; font-size: 11px; font-weight: 800; }
        .ns-admin-stat-grid { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 14px; margin: 24px 0 64px; }
        .ns-admin-stat-grid article { display: flex; min-width: 0; align-items: center; gap: 12px; padding: 19px; border: 1px solid #dbeafe; border-radius: 16px; background: #fff; box-shadow: 0 8px 22px rgba(15,23,42,.05); }
        .ns-admin-stat-grid article > svg { flex: 0 0 auto; color: #2563eb; font-size: 23px; }
        .ns-admin-stat-grid article span { display: flex; min-width: 0; flex-direction: column; }
        .ns-admin-stat-grid small { overflow: hidden; color: #64748b; font-size: 10px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
        .ns-admin-stat-grid strong { margin-top: 3px; color: #0f172a; font-family: Georgia,serif; font-size: 28px; }
        .ns-admin-learning-section { padding: 0 0 20px; }
        .ns-admin-section-heading { max-width: 760px; margin-bottom: 28px; }
        .ns-admin-section-heading > span { color: #2563eb; }
        .ns-admin-section-heading h2 { margin: 8px 0; color: #0f172a; font-family: Georgia,serif; font-size: clamp(30px,4vw,42px); }
        .ns-admin-section-heading p { margin: 0; color: #64748b; font-size: 15px; line-height: 1.75; }
        .ns-admin-action-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 22px; }
        .ns-admin-action-grid article { padding: 28px; border: 1px solid #e2e8f0; border-radius: 18px; background: #fff; box-shadow: 0 10px 30px rgba(15,23,42,.06); }
        .ns-admin-action-icon { display: grid; width: 48px; height: 48px; place-items: center; border-radius: 13px; background: #eff6ff; color: #2563eb; font-size: 21px; }
        .ns-admin-action-grid h3 { margin: 18px 0 8px; color: #0f172a; font-size: 20px; }
        .ns-admin-action-grid p { margin: 0 0 20px; color: #64748b; font-size: 13px; line-height: 1.7; }
        .ns-admin-action-grid a { color: #2563eb; text-decoration: none; font-size: 11px; font-weight: 800; }
        @media (max-width: 1000px) { .ns-admin-stat-grid { grid-template-columns: repeat(3,minmax(0,1fr)); } }
        @media (max-width: 700px) { .ns-admin-hero { padding: 38px 24px; border-radius: 18px; } .ns-admin-hero p { font-size: 14px; } .ns-admin-stat-grid { grid-template-columns: repeat(2,minmax(0,1fr)); margin-bottom: 48px; } .ns-admin-action-grid { grid-template-columns: 1fr; } }
        @media (max-width: 420px) { .ns-admin-stat-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
