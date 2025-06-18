import React from "react";
import { Users, Calendar, FileText, AlertCircle } from "lucide-react";
import StatCard from "../common/StatCard";
import DataTable from "../common/DataTable";

const ParentDashboard: React.FC = () => {
  const stats = [
    { title: "Children", value: "2", icon: Users, color: "blue" as const },
    {
      title: "Avg. Attendance",
      value: "95.8%",
      icon: Calendar,
      color: "green" as const,
    },
    {
      title: "Avg. GPA",
      value: "3.7",
      icon: FileText,
      color: "purple" as const,
    },
    {
      title: "Alerts",
      value: "1",
      icon: AlertCircle,
      color: "orange" as const,
    },
  ];

  const children = [
    {
      name: "Emily Smith",
      grade: "10th Grade",
      gpa: "3.85",
      attendance: "96.2%",
      status: "Good",
      alerts: 0,
    },
    {
      name: "Michael Smith",
      grade: "8th Grade",
      gpa: "3.55",
      attendance: "95.4%",
      status: "Needs Attention",
      alerts: 1,
    },
  ];

  const childrenColumns = [
    { key: "name", label: "Child", sortable: true },
    { key: "grade", label: "Grade", sortable: true },
    { key: "gpa", label: "GPA", sortable: true },
    { key: "attendance", label: "Attendance", sortable: true },
    {
      key: "status",
      label: "Status",
      render: (status: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "Good"
              ? "bg-green-100 text-green-800"
              : status === "Needs Attention"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      ),
    },
    { key: "alerts", label: "Alerts", sortable: true },
  ];

  const recentActivity = [
    {
      child: "Emily Smith",
      activity: "Submitted Math Assignment",
      date: "2024-01-18",
      type: "assignment",
    },
    {
      child: "Michael Smith",
      activity: "Absent from History Class",
      date: "2024-01-18",
      type: "attendance",
    },
    {
      child: "Emily Smith",
      activity: "Received A+ in Chemistry Quiz",
      date: "2024-01-17",
      type: "grade",
    },
    {
      child: "Michael Smith",
      activity: "Parent-Teacher Conference Scheduled",
      date: "2024-01-17",
      type: "meeting",
    },
  ];

  const activityColumns = [
    { key: "child", label: "Child", sortable: true },
    { key: "activity", label: "Activity", sortable: true },
    { key: "date", label: "Date", sortable: true },
    {
      key: "type",
      label: "Type",
      render: (type: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            type === "grade"
              ? "bg-green-100 text-green-800"
              : type === "assignment"
              ? "bg-blue-100 text-blue-800"
              : type === "attendance"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {type}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
        <p className="text-gray-600">
          Stay updated on your children's academic progress.
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
            My Children
          </h3>
          <DataTable data={children} columns={childrenColumns} />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Current Alerts
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  Attendance Alert
                </div>
                <div className="text-sm text-gray-600">
                  Michael Smith was absent from History class today.
                </div>
                <div className="text-xs text-gray-500 mt-1">Jan 18, 2024</div>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm py-4">
              All other alerts are resolved
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <DataTable data={recentActivity} columns={activityColumns} />
      </div>
    </div>
  );
};

export default ParentDashboard;
