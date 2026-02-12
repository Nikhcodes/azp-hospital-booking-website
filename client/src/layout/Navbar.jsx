import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex flex-col leading-tight">
  <span className="text-lg font-bold text-[#21B24B]">AZP</span>
  <span className="text-xs text-gray-500">
    Academisch Ziekenhuis Paramaribo
  </span>
</Link>


        <div className="flex gap-6 text-gray-700">
  <Link to="/departments" className="hover:text-[#21B24B]">Departments</Link>
  <Link to="/appointment" className="hover:text-[#21B24B]">Appointment</Link>
  <Link to="/contact" className="hover:text-[#21B24B]">Contact</Link>
</div>

      </div>
    </nav>
  )
}
