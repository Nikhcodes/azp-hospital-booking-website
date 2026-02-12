import { Link } from "react-router-dom";
import departments from "../data/departments";

export default function Departments() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900 text-center">Departments</h1>
      <p className="text-xl text-gray-700 mb-10 text-center">
        Explore our medical departments and services.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <Link
            key={dept.id}
            to={`/departments/${dept.id}`}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1 transform"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{dept.name}</h2>
            <p className="text-gray-600 text-sm">{dept.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
