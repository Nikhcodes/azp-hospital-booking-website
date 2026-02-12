import { useParams, Link } from "react-router-dom";
import departments from "../data/departments";

export default function DepartmentDetail() {
  const { id } = useParams();

  const department = departments.find((d) => d.id === id);

  if (!department) {
    return <div>Department not found.</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">{department.name}</h1>

      <p className="text-gray-700">{department.description}</p>

      <div>
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {department.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>

      <Link
        to="/appointment"
        className="inline-block bg-[#21B24B] text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition"
      >
        Book Appointment
      </Link>
    </div>
  );
}
