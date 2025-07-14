export default function Header() {
  return (
    <header className="bg-white border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between">
        <h1 className="text-xl font-bold">Percetakan</h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Catalog</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
