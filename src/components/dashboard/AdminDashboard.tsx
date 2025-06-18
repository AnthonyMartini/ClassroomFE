import React from "react";
import { Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react";
import StatCard from "../common/StatCard";
import DataTable from "../common/DataTable";

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: "Total Students",
      value: "1,234",
      icon: Users,
      trend: { value: 8.2, isPositive: true },
      color: "blue" as const,
    },
    {
      title: "Active Teachers",
      value: "87",
      icon: GraduationCap,
      trend: { value: 3.1, isPositive: true },
      color: "green" as const,
    },
    {
      title: "Total Classes",
      value: "45",
      icon: BookOpen,
      trend: { value: 12.5, isPositive: true },
      color: "purple" as const,
    },
    {
      title: "Average Grade",
      value: "87.5%",
      icon: TrendingUp,
      trend: { value: 2.4, isPositive: true },
      color: "orange" as const,
    },
  ];

  const recentStudents = [
    {
      id: "S001",
      name: "Alice Johnson",
      grade: "10th",
      class: "A",
      enrollmentDate: "2024-01-15",
    },
    {
      id: "S002",
      name: "Bob Smith",
      grade: "11th",
      class: "B",
      enrollmentDate: "2024-01-16",
    },
    {
      id: "S003",
      name: "Carol Davis",
      grade: "9th",
      class: "A",
      enrollmentDate: "2024-01-17",
    },
    {
      id: "S004",
      name: "David Wilson",
      grade: "12th",
      class: "C",
      enrollmentDate: "2024-01-18",
    },
  ];

  const columns = [
    { key: "id", label: "Student ID", sortable: true },
    { key: "name", label: "Name", sortable: true },
    { key: "grade", label: "Grade", sortable: true },
    { key: "class", label: "Class", sortable: true },
    { key: "enrollmentDate", label: "Enrollment Date", sortable: true },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening at your school.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Attendance Overview
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Present Today</span>
              <span className="text-sm font-medium text-green-600">95.2%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "95.2%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>1,175 students present</span>
              <span>59 students absent</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Grade Distribution
          </h3>
          <div className="space-y-3">
            {[
              {
                grade: "A",
                count: 342,
                percentage: 27.7,
                color: "bg-green-500",
              },
              {
                grade: "B",
                count: 456,
                percentage: 37.0,
                color: "bg-blue-500",
              },
              {
                grade: "C",
                count: 298,
                percentage: 24.1,
                color: "bg-yellow-500",
              },
              {
                grade: "D",
                count: 98,
                percentage: 7.9,
                color: "bg-orange-500",
              },
              { grade: "F", count: 40, percentage: 3.2, color: "bg-red-500" },
            ].map((item) => (
              <div key={item.grade} className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-700 w-8">
                  {item.grade}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 w-12 text-right">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Enrollments
        </h3>
        <DataTable data={recentStudents} columns={columns} />
      </div>
    </div>
  );
};

export default AdminDashboard;
