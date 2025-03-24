export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">YallaShop</h3>
              <p className="text-gray-400">
                Your fastest way to shop online in the Middle East. We deliver quality products with speed.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-yellow-400">Home</a></li>
                <li><a href="/products" className="text-gray-400 hover:text-yellow-400">Products</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-yellow-400">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@yallashop.com</li>
                <li>Phone: +962 7 1234 5678</li>
                <li>Address: Amman, Jordan</li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} YallaShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }