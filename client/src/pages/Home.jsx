import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-16 py-16">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-900">
          Academisch Ziekenhuis Paramaribo
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8">
          Providing trusted medical care with modern facilities and experienced specialists.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/appointment"
            className="bg-[#21B24B] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all font-semibold text-lg"
          >
            Book Appointment
          </Link>
          <Link
            to="/departments"
            className="bg-white border border-gray-300 px-8 py-4 rounded-xl shadow hover:shadow-md transition-all font-semibold text-lg"
          >
            View Departments
          </Link>
        </div>
      </section>

      {/* DEPARTMENTS PREVIEW */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Our Departments
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">General Medicine</h3>
            <p className="text-gray-600 text-sm">Diagnosis and treatment of common illnesses and health conditions.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Pediatrics</h3>
            <p className="text-gray-600 text-sm">Medical care for infants, children, and adolescents.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
            <p className="text-gray-600 text-sm">Immediate care for urgent and life-threatening conditions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
