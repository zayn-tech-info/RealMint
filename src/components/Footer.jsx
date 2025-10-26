import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-green-900/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">RealMint</span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing homeownership through blockchain technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/properties"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#contact"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-green-900/20 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 RealMint. All rights reserved. Powered by Hedera
            Blockchain.
          </p>
        </div>
      </div>
    </footer>
  );
}
