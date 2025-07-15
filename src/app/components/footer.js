export default function Footer() {
  return (
    <footer className="bg-black text-white text-center pt-6 pb-4 mt-10">
      {/* Sosial Media Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:text-blue-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-red-500">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" className="hover:text-red-600">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 text-sm mb-4">
        <a href="#" className="hover:underline">Tentang</a>
        <a href="http://linktr.ee/pangeranmap" className="hover:underline">Kontak</a>
        <a href="/ourteam" className="hover:underline">Tim Kami</a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-400">
        ©2025 Dika Erang Print • Designed with 💙
      </p>
    </footer>
  )
}
