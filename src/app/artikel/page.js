import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function ArtikelPage() {
  const artikelList = [
    {
      id: 1,
      title: 'Desain Kartu Nama Profesional yang Menarik Pelanggan',
      excerpt: 'Kartu nama bukan sekadar pelengkap, tapi representasi brand. Cetak kartu nama berkualitas tinggi untuk kesan pertama yang mengesankan.',
      author: 'Tim Dika Erang',
      category: 'Tips Desain',
      date: '15 Jul 2025',
      views: 120,
      image: '/images/artikel1.jpg'
    },
    {
      id: 2,
      title: 'Kenapa Brosur Masih Efektif di Era Digital?',
      excerpt: 'Brosur cetak tetap punya kekuatan dalam menyampaikan pesan langsung ke tangan calon pelanggan. Yuk, kenali manfaatnya.',
      author: 'Dika A.',
      category: 'Info Produk',
      date: '13 Jul 2025',
      views: 85,
      image: '/images/artikel2.jpg'
    },
    {
      id: 3,
      title: 'Panduan Cetak Kalender Custom untuk Promosi Bisnis',
      excerpt: 'Kalender promosi jadi media yang dipakai sepanjang tahun. Kami bantu buatkan dengan desain dan ukuran sesuai kebutuhan Anda.',
      author: 'Erang S.',
      category: 'Tips Promosi',
      date: '12 Jul 2025',
      views: 65,
      image: '/images/artikel3.png'
    },
    {
      id: 4,
      title: 'Pentingnya Cetak Label dan Stiker Produk untuk Branding',
      excerpt: 'Stiker dan label bukan hanya untuk informasi, tapi juga memperkuat identitas produk. Yuk, cetak stiker berkualitas dengan bahan premium.',
      author: 'Tim Kreatif',
      category: 'Branding',
      date: '11 Jul 2025',
      views: 98,
      image: '/images/artikel4.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-white px-4 ">
      <Navbar/>
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Artikel & Tips Digital Printing</h1>

      <div className="max-w-6xl mx-auto space-y-8">
        {artikelList.map((artikel) => (
          <div key={artikel.id} className="flex flex-col md:flex-row gap-5 border-b pb-6">
            <img
              src={artikel.image}
              alt={artikel.title}
              className="w-full md:w-52 h-40 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="text-lg font-semibold text-orange-600 mb-1">{artikel.title}</h2>
              <p className="text-gray-700 text-sm mb-2">{artikel.excerpt} <span className="text-orange-500 cursor-pointer">...More</span></p>

              <div className="text-xs text-gray-500 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span>{artikel.author} in {artikel.category}</span>
                <span>{artikel.date} • {artikel.views} read 👁</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}
