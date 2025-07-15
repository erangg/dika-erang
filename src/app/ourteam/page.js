import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: 'Laurentius Chandika Laiglety',
      role: 'Desainer Grafis',
      photo: '/images/dika.jpg',
      desc: 'Bertanggung jawab dalam desain produk digital printing seperti brosur, banner, dan kartu nama.'
    },
    {
      name: 'M Pangeran Mappatunru',
      role: 'Operator Cetak',
      photo: '/images/erang.jpg',
      desc: 'Menangani proses cetak digital dan offset serta memastikan kualitas hasil cetakan tetap optimal.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
        <Navbar/>  
      <h1 className="text-3xl font-bold text-center mb-10">Tim Kami</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-blue-300"
            />
            <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
            <p className="text-sm text-gray-500">{member.role}</p>
            <hr className="my-3 border-blue-200 w-2/3 mx-auto" />
            <p className="text-sm text-gray-600">{member.desc}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}
