'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-green-50 border-b border-green-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo kiri */}
        <div>
          <img src="/logo landscape.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Menu kanan */}
        <ul className="flex space-x-6 text-sm font-medium text-green-900">
          <li><Link href="/dashboard" className='hover:underline'>Beranda</Link></li>
          <li><Link href="/produk" className='hover:underline'>Produk</Link></li>
          <li><Link href="/artikel" className='hover:underline'>Artikel / Berita</Link></li>
<li>
  <Link href="/login" className="flex items-center gap-2 text-red-600 hover:underline">
    <img src="logout.png" alt="Logout" className="w-5 h-5" />
    Logout
  </Link>
</li>
        </ul>
      </div>
    </nav>
  )
}
