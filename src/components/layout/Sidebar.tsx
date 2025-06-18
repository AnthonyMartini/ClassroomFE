import React from "react";
import {
  Home,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  Settings,
  BarChart3,
  UserCheck,
  MessageSquare,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
  activeTab,
  setActiveTab,
}) => {
  const { user } = useAuth();

  const getNavigationItems = () => {
    const commonItems = [
      { id: "dashboard", label: "Dashboard", icon: Home },
      { id: "calendar", label: "Calendar", icon: Calendar },
      { id: "messages", label: "Messages", icon: MessageSquare },
    ];

    const roleSpecificItems = {
      admin: [
        { id: "students", label: "Students", icon: Users },
        { id: "teachers", label: "Teachers", icon: GraduationCap },
        { id: "classes", label: "Classes", icon: BookOpen },
        { id: "attendance", label: "Attendance", icon: UserCheck },
        { id: "grades", label: "Grades", icon: FileText },
        { id: "analytics", label: "Analytics", icon: BarChart3 },
        { id: "settings", label: "Settings", icon: Settings },
      ],
      teacher: [
        { id: "classes", label: "My Classes", icon: BookOpen },
        { id: "students", label: "Students", icon: Users },
        { id: "attendance", label: "Attendance", icon: UserCheck },
        { id: "grades", label: "Grades", icon: FileText },
      ],
      student: [
        { id: "classes", label: "My Classes", icon: BookOpen },
        { id: "grades", label: "My Grades", icon: FileText },
        { id: "attendance", label: "Attendance", icon: UserCheck },
      ],
      parent: [
        { id: "children", label: "My Children", icon: Users },
        { id: "grades", label: "Grades", icon: FileText },
        { id: "attendance", label: "Attendance", icon: UserCheck },
      ],
    };

    return [
      ...commonItems,
      ...(roleSpecificItems[user?.role as keyof typeof roleSpecificItems] ||
        []),
    ];
  };

  const navigationItems = getNavigationItems();

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0 h-full
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`
                      group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left transition-colors
                      ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <Icon
                      size={20}
                      className={`mr-3 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
