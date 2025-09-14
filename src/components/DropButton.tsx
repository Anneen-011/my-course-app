// Update the import path if 'courseStore' is in 'src/store/courseStore.ts'
import { useCourseStore } from "../store/courseStore";

interface DropButtonProps {
  id: string;
}

const DropButton = ({ id }: DropButtonProps) => {
  const removeCourse = useCourseStore((state: { removeCourse: any; }) => state.removeCourse);

  return (
    <button
      onClick={() => removeCourse(id)}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
    >
      ลบ
    </button>
  );
};

export default DropButton;
