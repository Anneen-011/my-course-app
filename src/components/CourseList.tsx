import DropButton from "./DropButton";
import { useCourseStore } from "../store/courseStore";

const CourseList = () => {
  const { courses } = useCourseStore();

  return (
    <div className="p-4 border rounded-xl bg-yellow-50 shadow">
      <h2 className="text-xl font-semibold text-green-700">📚 รายวิชาที่ลงทะเบียน</h2>
      <ul className="mt-3 space-y-2">
        {courses.map((course) => (
          <li
            key={course.id}
            className="flex justify-between items-center p-3 border rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <span className="font-medium text-gray-700">
              {course.nameTh} ({course.credit} หน่วยกิต)
            </span>
            <DropButton id={course.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
