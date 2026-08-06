import {
  FaBook,
  FaComments,
  FaFileAlt,
  FaUsers,
  FaVideo,
  FaUserGraduate,
} from "react-icons/fa";

const cards = [
  {
    title: "Students",
    value: "0",
    color: "bg-blue-600",
    icon: FaUserGraduate,
  },
  {
    title: "Courses",
    value: "0",
    color: "bg-green-600",
    icon: FaBook,
  },
  {
    title: "Posts",
    value: "0",
    color: "bg-orange-500",
    icon: FaFileAlt,
  },
  {
    title: "Videos",
    value: "0",
    color: "bg-red-600",
    icon: FaVideo,
  },
  {
    title: "Comments",
    value: "0",
    color: "bg-purple-600",
    icon: FaComments,
  },
  {
    title: "Users",
    value: "0",
    color: "bg-cyan-600",
    icon: FaUsers,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome to the NagarikSuraksha Administration Portal.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {card.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold">
                    {card.value}
                  </h2>
                </div>

                <div
                  className={`${card.color} rounded-xl p-4 text-white`}
                >
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-5 text-xl font-bold">
            Recent Activity
          </h2>

          <div className="rounded-lg border border-dashed border-slate-300 p-12 text-center text-slate-500">
            Activity Log will appear here.
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-5 text-xl font-bold">
            Quick Actions
          </h2>

          <div className="grid gap-4">
            <button className="rounded-xl bg-blue-600 px-5 py-4 text-left font-semibold text-white hover:bg-blue-700">
              + Create New Post
            </button>

            <button className="rounded-xl bg-green-600 px-5 py-4 text-left font-semibold text-white hover:bg-green-700">
              + Add YouTube Video
            </button>

            <button className="rounded-xl bg-orange-500 px-5 py-4 text-left font-semibold text-white hover:bg-orange-600">
              + Add Course
            </button>

            <button className="rounded-xl bg-purple-600 px-5 py-4 text-left font-semibold text-white hover:bg-purple-700">
              + Manage Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}