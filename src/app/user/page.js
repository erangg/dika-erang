export default function UsersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="bg-white shadow-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <h1 className="text-xl font-bold text-gray-700">BINAR-Y</h1>
          </div>
          <nav className="space-x-6 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-purple-600">Home</a>  
            <a href="#" className="hover:text-purple-600">Produk Kami</a>
            <a href="#" className="hover:text-purple-600">Gallery</a>
            <a href="#" className="hover:text-purple-600">Portfolio</a>
            <a href="#" className="hover:text-purple-600">Tentang Kami</a>
            <a href="#" className="hover:text-purple-600">Artikel</a>
            <a href="#" className="hover:text-purple-600">Contact Us</a>
            <a href="#" className="hover:text-purple-600">Karier</a>
            <a href="#" className="hover:text-purple-600">Akun Saya</a>
          </nav>
        </div>
      </header>

      {/* Banner / Welcome Section */}
      <section className="bg-white py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Teks Selamat Datang */}
          <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl font-bold">
              <span className="text-pink-600">SELAMAT </span>
              <span className="text-blue-500">DATANG</span>
            </h2>
            <p className="mt-4 text-gray-700 text-lg font-medium">
              Ceritakan Masalah dan Kebutuhan Cetakmu ke
            </p>
            <h3 className="mt-2 font-bold text-xl text-gray-800">Bro</h3>
            <p className="text-sm text-gray-500">Digital Printing, Copying, Designing</p>
          </div>

          {/* Gambar Produk */}
          <div className="md:w-1/2">
            <img src="/images/banner-users.jpg" alt="Produk" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t mt-8">
        © 2025 BINAR-Y. All s reserved.
      </footer>
    </div>
  )
}
