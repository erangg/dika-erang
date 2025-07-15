'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomeRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect ke halaman login
    router.push('/login')
  }, [router])

  return (
  <div className="flex justify-center items-center min-h-screen">
    <h1>Terima Kasih Telah Berkunjung!  |</h1>
    <h2 className="text-gray-600">| Mengalihkan ke halaman login...</h2>
  </div>
)

}
