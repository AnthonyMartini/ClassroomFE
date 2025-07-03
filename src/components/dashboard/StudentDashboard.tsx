import React from "react";
import { BookOpen, Calendar, FileText, TrendingUp } from "lucide-react";
import StatCard from "../common/StatCard";
import DataTable from "../common/DataTable";

const StudentDashboard: React.FC = () => {
  const stats = [
    {
      title: "Current GPA",
      value: "3.85",
      icon: TrendingUp,
      color: "green" as const,
    },
    {
      title: "Classes Today",
      value: "6",
      icon: BookOpen,
      color: "blue" as const,
    },
    {
      title: "Assignments Due",
      value: "3",
      icon: FileText,
      color: "orange" as const,
    },
    {
      title: "Attendance Rate",
      value: "96.2%",
      icon: Calendar,
      color: "purple" as const,
    },
  ];

  const todayClasses = [
    {
      time: "9:00 AM",
      subject: "English Literature",
      teacher: "Ms. Johnson",
      room: "Room 101",
    },
    {
      time: "10:30 AM",
      subject: "Mathematics",
      teacher: "Mr. Chen",
      room: "Room 201",
    },
    {
      time: "12:00 PM",
      subject: "Chemistry",
      teacher: "Dr. Wilson",
      room: "Lab 1",
    },
    {
      time: "2:00 PM",
      subject: "History",
      teacher: "Ms. Davis",
      room: "Room 105",
    },
  ];

  const columns = [
    { key: "time", label: "Time", sortable: true },
    { key: "subject", label: "Subject", sortable: true },
    { key: "teacher", label: "Teacher", sortable: true },
    { key: "room", label: "Room" },
  ];

  const recentGrades = [
    {
      subject: "Mathematics",
      assignment: "Midterm Exam",
      grade: "92%",
      date: "2024-01-15",
    },
    {
      subject: "English",
      assignment: "Essay: Shakespeare",
      grade: "88%",
      date: "2024-01-14",
    },
    {
      subject: "Chemistry",
      assignment: "Lab Report #3",
      grade: "95%",
      date: "2024-01-13",
    },
    {
      subject: "History",
      assignment: "WWI Timeline",
      grade: "85%",
      date: "2024-01-12",
    },
  ];

  const gradeColumns = [
    { key: "subject", label: "Subject", sortable: true },
    { key: "assignment", label: "Assignment", sortable: true },
    {
      key: "grade",
      label: "Grade",
      sortable: true,
      render: (grade: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            parseFloat(grade) >= 90
              ? "bg-green-100 text-green-800"
              : parseFloat(grade) >= 80
              ? "bg-blue-100 text-blue-800"
              : parseFloat(grade) >= 70
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {grade}
        </span>
      ),
    },
    { key: "date", label: "Date", sortable: true },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, Emma! Let's see how you're doing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Today's Schedule
          </h3>
          <DataTable data={todayClasses} columns={columns} />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Deadlines
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  Chemistry Lab Report
                </div>
                <div className="text-sm text-gray-500">Due: Tomorrow</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  Math Problem Set
                </div>
                <div className="text-sm text-gray-500">Due: Jan 20</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">History Essay</div>
                <div className="text-sm text-gray-500">Due: Jan 25</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Grades
        </h3>
        <DataTable data={recentGrades} columns={gradeColumns} />
      </div>
    </div>
  );
};

export default StudentDashboard;
