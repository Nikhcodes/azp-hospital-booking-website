export default function Contact() {
  return (
    <section className="w-full py-20">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 text-center">Contact Us</h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-10 text-center">
          Have questions or need assistance? Reach out to us and we’ll get back to you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Address</h2>
            <p className="text-gray-600 text-sm">Academisch Ziekenhuis Paramaribo<br />Paramaribo, Suriname</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Phone</h2>
            <p className="text-gray-600 text-sm">+597 123 4567</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Email</h2>
            <p className="text-gray-600 text-sm">info@azp.sr</p>
          </div>
        </div>
      </div>
    </section>
  );
}
