import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-yellow-400 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">YallaShop</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-white font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-900 hover:text-white font-medium">
              Products
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-white font-medium">
              About Us
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <Link href="#" className="text-gray-900 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}