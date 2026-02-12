import { useState } from "react";
import departments from "../data/departments";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", department: "", date: "", message: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData)
      });
      if (res.ok) setSuccess(true);
    } catch (err) { console.error(err); }
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 text-center">
          Book an Appointment
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-10 text-center">
          Fill out the form and our staff will contact you to confirm your appointment.
        </p>

        {success && <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-8 text-center">
          Appointment request submitted successfully!
        </div>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="col-span-1 md:col-span-2 border border-gray-300 rounded-2xl p-4 w-full focus:ring-2 focus:ring-[#21B24B] focus:outline-none" />
          <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} className="border border-gray-300 rounded-2xl p-4 w-full focus:ring-2 focus:ring-[#21B24B] focus:outline-none" />
          <input type="email" name="email" placeholder="Email (optional)" onChange={handleChange} className="border border-gray-300 rounded-2xl p-4 w-full focus:ring-2 focus:ring-[#21B24B] focus:outline-none" />
          <select name="department" required onChange={handleChange} className="border border-gray-300 rounded-2xl p-4 w-full focus:ring-2 focus:ring-[#21B24B] focus:outline-none">
            <option value="">Select Department</option>
            {departments.map((dept) => <option key={dept.id} value={dept.name}>{dept.name}</option>)}
          </select>
          <input type="date" name="date" required onChange={handleChange} className="border border-gray-300 rounded-2xl p-4 w-full focus:ring-2 focus:ring-[#21B24B] focus:outline-none" />
          <textarea name="message" placeholder="Additional message (optional)" onChange={handleChange} rows="4" className="col-span-1 md:col-span-2 border border-gray-300 rounded-2xl p-4 w-full focus:ring-2 focus:ring-[#21B24B] focus:outline-none" />
          <button type="submit" className="col-span-1 md:col-span-2 bg-[#21B24B] text-white py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all font-semibold text-lg">
            Submit Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
