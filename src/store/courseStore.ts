import { create } from "zustand";

export type Grade = "A" | "B+" | "B" | "C+" | "C" | "D" | "F";

export interface Course {
  id: string;
  nameTh: string;
  nameEn: string;
  credit: number;
  teacher: string;
  grade: Grade;
}

interface CourseStore {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (id: string) => void;
  calculateGPA: () => number;
}

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  addCourse: (course) => set({ courses: [...get().courses, course] }),
  removeCourse: (id) =>
    set({ courses: get().courses.filter((c) => c.id !== id) }),
  calculateGPA: () => {
    const courses = get().courses;
    if (courses.length === 0) return 0;
    const gradeMap: Record<Grade, number> = {
      "A": 4.0,
      "B+": 3.5,
      "B": 3.0,
      "C+": 2.5,
      "C": 2.0,
      "D": 1.0,
      "F": 0.0,
    };
    const totalCredit = courses.reduce((sum, c) => sum + c.credit, 0);
    const totalPoints = courses.reduce(
      (sum, c) => sum + gradeMap[c.grade] * c.credit,
      0
    );
    return totalPoints / totalCredit;
  },
}));
