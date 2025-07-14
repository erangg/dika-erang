'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-md rounded-md w-full max-w-sm p-6">
        {/* Logo */}
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Logo" className="w-16 mx-auto" />
        </div>

        {/* Judul */}
        <h2 className="text-center text-lg font-semibold mb-4">Halaman Login</h2>

        {/* Form Login */}
        <form>
          {/* Username / Email */}
          <div className="mb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Nama Pengguna / Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute right-3 top-2.5 text-gray-500">
                <i className="fa fa-user" />
              </span>
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Kata Sandi"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute right-3 top-2.5 text-gray-500">
                <i className="fa fa-lock" />
              </span>
            </div>
          </div>

          {/* Tampilkan Kata Sandi & Lupa */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <span>Tampilkan kata sandi</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Lupa Kata Sandi?
            </a>
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
          >
            Masuk
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs mt-4 text-gray-500">
          Hak Cipta © 2022 <a href="https://opendesa.id" className="text-blue-600">OpenDesa</a><br />
          Dasbor Saas v22.08.01
        </p>
      </div>
    </div>
  )
}
