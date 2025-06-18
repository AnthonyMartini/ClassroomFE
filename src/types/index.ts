export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  avatar?: string;
  phone?: string;
  address?: string;
}

export interface Student extends User {
  studentId: string;
  grade: string;
  class: string;
  parentId: string;
  enrollmentDate: string;
  subjects: string[];
  attendance: AttendanceRecord[];
  grades: Grade[];
}

export interface Teacher extends User {
  teacherId: string;
  subjects: string[];
  classes: string[];
  hireDate: string;
  qualification: string;
}

export interface Parent extends User {
  children: string[];
}

export interface Class {
  id: string;
  name: string;
  grade: string;
  teacher: string;
  students: string[];
  schedule: ClassSchedule[];
  subject: string;
}

export interface ClassSchedule {
  day: string;
  startTime: string;
  endTime: string;
  room: string;
}

export interface AttendanceRecord {
  date: string;
  status: 'present' | 'absent' | 'late';
  subject: string;
}

export interface Grade {
  subject: string;
  assignment: string;
  score: number;
  maxScore: number;
  date: string;
  feedback?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  targetAudience: string[];
}