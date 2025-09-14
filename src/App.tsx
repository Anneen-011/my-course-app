import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import GPAResult from "./components/GPAResult";

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6 p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur">
      <h1 className="text-3xl font-bold text-center text-green-700 drop-shadow">
     ระบบถอนรายวิชา
      </h1>
      <CourseForm />
      <CourseList />
      <GPAResult />
    </div>
  );
}

export default App;
