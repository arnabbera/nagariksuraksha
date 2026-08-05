import { Link } from "react-router-dom";
import { FaBars, FaBalanceScale } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
            <FaBalanceScale size={20} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              NagarikSuraksha
            </h1>

            <p className="text-xs text-slate-500">
              Legal Services &amp; Legal Education
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            Services
          </Link>

          <Link
            to="/courses"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            Courses
          </Link>

          <Link
            to="/updates"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            Legal Updates
          </Link>

          <Link
            to="/videos"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            Videos
          </Link>

          <Link
            to="/contact"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-lg bg-slate-900 px-5 py-2 font-medium text-white transition hover:bg-slate-800 md:block">
            Student Login
          </button>

          {/* Mobile Menu Button */}
          <button className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden">
            <FaBars size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}