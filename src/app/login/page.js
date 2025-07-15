'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import mockUsers from '../utils/mockUsers'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = mockUsers.find(u => u.email === email && u.password === password)

    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user))
      router.push('user')
    } else {
      setError('Email atau password salah')
    }
  }

  return (
    <div className="min-h-screen bg-amber-950 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md w-full max-w-sm p-6 border-t-4 border-blue-900">
        {/* Logo */}
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Logo" className="w-16 mx-auto" />
        </div>

        {/* Judul */}
        <h2 className="text-center text-md font-semibold text-blue-900 mb-4">Halaman Login</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Input Email */}
          <div className="mb-3 relative">
            <input
              type="text"
              placeholder="Nama Pengguna / Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span className="absolute right-3 top-2.5 text-gray-500">
              <i className="fa fa-user" />
            </span>
          </div>

          {/* Input Password */}
          <div className="mb-3 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span className="absolute right-3 top-2.5 text-gray-500">
              <i className="fa fa-lock" />
            </span>
          </div>

          {/* Checkbox */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <span>Tampilkan kata sandi</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">Lupa Kata Sandi?</a>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
          )}

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full bg-blue-950 hover:bg-blue-800 text-white py-2 rounded text-sm"
          >
            Masuk
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs mt-4 text-gray-500">
          Hak Cipta © 2025 <a href="https://github.com/erangg/dika-erang" className="text-blue-600">Open Source Guys</a><br />
          Dika - Erang Digital Printing
        </p>
      </div>
    </div>
  )
}
