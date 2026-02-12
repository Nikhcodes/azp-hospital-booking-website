export default function Footer() {
  return (
   <footer className="bg-white mt-16 py-8 text-center text-gray-600 text-sm border-t">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
    <p>&copy; {new Date().getFullYear()} Academisch Ziekenhuis Paramaribo. All rights reserved.</p>
    <p className="text-gray-400 text-xs">Designed as a professional portfolio project.</p>
  </div>
</footer>
  )
}
