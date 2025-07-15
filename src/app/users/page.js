'use client'
import { useState } from 'react'
import mockUsers from '../utils/mockUsers'
import UserCard from '../components/UserCard'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function UsersPage() {
  const [search, setSearch] = useState('')

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
<div className="min-h-screen bg-gray-50 space-y-4">
  <Navbar/>
      <input
        type="text"
        placeholder="Cari user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-600 mb-6"
      />

      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Footer/>
    </div>
  )
}
