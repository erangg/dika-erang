import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function TentangPage() {
  return (
    
    <div className="min-h-screen bg-white px-6">
      <Navbar/>
        <div className="max-w-4xl mx-auto">
          
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Tentang Kami</h1>

        <section className="text-gray-700 space-y-6 text-justify leading-relaxed">
          <p>
            <strong>Dika Erang Digital Printing</strong> didirikan pada awal tahun 2020 oleh dua sahabat yang memiliki semangat yang sama dalam dunia desain dan percetakan. Berawal dari sebuah garasi rumah kecil di Balikpapan, kami hanya bermodalkan satu mesin printer digital dan komputer rakitan. 
            Saat itu, layanan kami masih terbatas pada pencetakan brosur, kartu nama, dan spanduk sederhana untuk UMKM sekitar.
          </p>

          <p>
            Seiring berjalannya waktu, kepercayaan pelanggan pun tumbuh. Dengan semangat melayani lebih baik, kami mulai mengembangkan layanan: mulai dari desain grafis profesional, layanan cetak produk custom (seperti tumbler, neon box, kemasan), hingga kebutuhan promosi visual skala besar. 
            Teknologi cetak kami pun berkembang dengan menghadirkan mesin digital printing terkini dan finishing equipment lengkap.
          </p>

          <p>
            Saat ini, Dika Erang Digital Printing telah menjadi salah satu penyedia jasa digital printing terpercaya di Balikpapan dan sekitarnya. Kami melayani ratusan pelanggan setiap bulan, baik individu, pelaku UMKM, perusahaan, maupun instansi pemerintah. Kami percaya bahwa cetak bukan hanya soal hasil, tapi juga pengalaman pelayanan yang menyenangkan dan terpercaya.
          </p>

          <p>
            <em>"Ceritakan Masalah dan Kebutuhan Cetakmu — Kami Siap Bantu!"</em> adalah moto kami. Dengan tim yang solid, kami berkomitmen untuk terus berinovasi, meningkatkan kualitas, dan menjaga kepuasan pelanggan sebagai prioritas utama.
          </p>
        </section>

        <div className="mt-10 text-center">
          <img
            src="tentang.jpg"
            alt="Tentang Kami"
            className="rounded-lg shadow-md mx-auto w-full max-w-2xl"
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
