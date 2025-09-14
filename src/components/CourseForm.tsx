import { useState } from "react";
import { Course, Grade, useCourseStore } from "../store/courseStore";

const initialForm: Course = {
  id: "",
  nameTh: "",
  nameEn: "",
  credit: 3,
  teacher: "",
  grade: "A",
};

const grades: Grade[] = ["A", "B+", "B", "C+", "C", "D", "F"];

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [form, setForm] = useState<Course>(initialForm);

  const handleChange = <K extends keyof Course>(key: K, value: Course[K]) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse(form);
    setForm(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-2 border-green-400 rounded-xl space-y-3 flex flex-col bg-green-50 shadow-md"
    >
      <input
        placeholder="รหัสวิชา"
        value={form.id}
        onChange={(e) => handleChange("id", e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        placeholder="ชื่อไทย"
        value={form.nameTh}
        onChange={(e) => handleChange("nameTh", e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        placeholder="ชื่ออังกฤษ"
        value={form.nameEn}
        onChange={(e) => handleChange("nameEn", e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="number"
        placeholder="หน่วยกิต"
        value={form.credit}
        onChange={(e) => handleChange("credit", +e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        placeholder="อาจารย์"
        value={form.teacher}
        onChange={(e) => handleChange("teacher", e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <select
        value={form.grade}
        onChange={(e) => handleChange("grade", e.target.value as Grade)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
      >
        {grades.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-green-600 text-white p-2 rounded-lg hover:bg-yellow-500 transition shadow-md"
      >
         เพิ่มรายวิชา
      </button>
    </form>
  );
};

export default CourseForm;
