import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function ProdukPage() {
  const produkList = [
    {
      id: 1,
      nama: 'Frame Neon Box LED Custom',
      harga: 'Rp. 499.999,-',   
      gambar: '/images/produk1.jpg'
    },
    {
      id: 2,
      nama: 'Tumbler Nama Sendiri',
      harga: 'Rp. 59.999,-',
      gambar: '/images/produk2.jpg'
    },
    {
      id: 3,
      nama: 'Print DTF UV Sticker A3',
      harga: 'Rp. 29.999,-',
      gambar: '/images/produk3.jpg'
    },
    {
      id: 4,
      nama: 'Layanan Cetak 3D',
      harga: 'Rp. 1.199,-',
      gambar: '/images/produk4.jpg'
    },
    {
      id: 5,
      nama: 'Karangan Bunga Mini',
      harga: 'Rp. 49.999,-',
      gambar: '/images/produk5.jpg'
    },
    {
      id: 6,
      nama: 'Botol LED Prank Template',
      harga: 'Rp. 59.999,-',
      gambar: '/images/produk6.jpg'
    },
    {
      id: 7,
      nama: 'Botol Minum Dundee 1 Liter',
      harga: 'Rp. 54.999,-',
      gambar: '/images/produk7.jpg'
    },
    {
      id: 8,
      nama: 'QR Code Stand Custom',
      harga: 'Rp. 59.999,-',
      gambar: '/images/produk8.jpg'
    }
  ]

  return (

    <div className="min-h-screen bg-white ">
            <Navbar/>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Produk Kami</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produkList.map((item) => (
          <div key={item.id} className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4">
            <img src={item.gambar} alt={item.nama} className="rounded w-full h-48 object-cover mb-4" />
            <h2 className="text-sm font-semibold text-orange-600">{item.nama}</h2>
            <p className="text-gray-700 text-sm">From {item.harga}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}
