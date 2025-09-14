import { useCourseStore } from "../store/courseStore";

const GPAResult = () => {
  const gpa = useCourseStore((state) => state.calculateGPA());

  return (
    <div className="p-4 border-2 border-yellow-400 rounded-xl bg-green-100 text-center shadow-lg">
      <h2 className="text-xl font-bold text-green-800">
        🌟 GPA รวม: <span className="text-yellow-600">{gpa.toFixed(2)}</span>
      </h2>
    </div>
  );
};

export default GPAResult;
