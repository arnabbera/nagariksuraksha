import { useEffect, useState } from "react";
import {
  FaBook,
  FaComments,
  FaFileAlt,
  FaGavel,
  FaPlus,
  FaUserGraduate,
  FaVideo,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/Button";
import Card from "../../../shared/components/Card";
import EmptyState from "../../../shared/components/EmptyState";
import LoadingSpinner from "../../../shared/components/LoadingSpinner";
import PageHeader from "../../../shared/components/PageHeader";

import {
  getDashboardStatistics,
  savePublicHomepageStatistics,
} from "../../../services/dashboardService";

const Dashboard = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    articles: 0,
    videos: 0,
    legalServices: 0,
    pendingComments: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const result =
        await getDashboardStatistics();

      await savePublicHomepageStatistics(result);

      setStats(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading Dashboard..."
      />
    );
  }

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Welcome to NagarikSuraksha Administration"
      />

      {/* Statistics */}

      <div className="dashboard-grid">

        <Card>
          <h4>Students</h4>
          <h1>{stats.students}</h1>
        </Card>

        <Card>
          <h4>Courses</h4>
          <h1>{stats.courses}</h1>
        </Card>

        <Card>
          <h4>Articles</h4>
          <h1>{stats.articles}</h1>
        </Card>

        <Card>
          <h4>Videos</h4>
          <h1>{stats.videos}</h1>
        </Card>

        <Card>
          <h4>Services</h4>
          <h1>{stats.legalServices}</h1>
        </Card>

        <Card>
          <h4>Pending Comments</h4>
          <h1>{stats.pendingComments}</h1>
        </Card>

      </div>

      <br />

      <Card
        title="Quick Actions"
        subtitle="Frequently used administration tasks"
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 15,
          }}
        >
          <Button
            leftIcon={<FaPlus />}
            onClick={() =>
              navigate("/admin/articles")
            }
          >
            Add Article
          </Button>

          <Button
            leftIcon={<FaBook />}
            onClick={() =>
              navigate("/admin/courses")
            }
          >
            Add Course
          </Button>

          <Button
            leftIcon={<FaVideo />}
            onClick={() =>
              navigate("/admin/videos")
            }
          >
            Add Video
          </Button>

          <Button
            leftIcon={<FaGavel />}
            onClick={() =>
              navigate("/admin/services")
            }
          >
            Add Service
          </Button>
        </div>
      </Card>

      <br />

      <Card
        title="Recent Activity"
        subtitle="Latest activities across the portal"
      >
        <EmptyState
          title="No Activity Yet"
          description="Activities will automatically appear here."
        />
      </Card>

      <style>{`
        .dashboard-grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
            gap:20px;
            margin-bottom:20px;
        }

        .dashboard-grid h4{
            color:#64748b;
            margin:0;
        }

        .dashboard-grid h1{
            font-size:42px;
            margin:10px 0 0;
            color:#2563eb;
        }
      `}</style>
    </>
  );
};

export default Dashboard;