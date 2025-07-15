import Navbar from "../components/navbar"
import Footer from "../components/footer"

const mockProducts = [
  {
    id: 1,
    title: 'Kartu Nama Premium',
    description: 'Cetak kartu nama berkualitas tinggi dengan laminasi doff.',
    category: 'Offset',
    author: 'Admin Cetak',
    status: 'Tersedia'
  },
  {
    id: 2,
    title: 'Poster A3 Full Color',
    description: 'Poster promosi ukuran A3 dengan hasil tajam dan cerah.',
    category: 'Digital Print',
    author: 'Operator 1',
    status: 'Sedang Diproses'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center text-blue-900">
          Selamat Datang di DE Digital Printing!
        </h1>
        <h3 className="text-1xl font-sans text-center text-blue-900 mb-6">Let us help your printing solutions</h3>

        {/* Search Input */}
        <div>
          <input placetype="text"
            placeholder="Cari Produk Cetak..."
            className="w-full px-4 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-600 mb-6"
          />
        </div>

        {/* Product List */}
        <div className="space-y-4">
          {mockProducts.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>

              <div className="flex items-center gap-2 text-xs mb-2">
                <span className="bg-gray-800 text-white px-2 py-0.5 rounded-full">{item.category}</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{item.author}</span>
              </div>

              <div
                className={`text-white text-sm font-semibold text-center py-1 rounded ${
                  item.status === 'Tersedia' ? 'bg-green-500' : 'bg-yellow-500'
                }`}
              >
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
