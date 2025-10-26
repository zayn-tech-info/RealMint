import { Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function Navbar() {
  const navigation = [
    {
      id: 1,
      text: "Properties",
      href: "/properties",
    },
    {
      id: 2,
      text: "How It Works",
      href: "/howitworks",
    },
    {
      id: 3,
      text: "About",
      href: "/about",
    },
    {
      id: 4,
      text: "Dashboard",
      href: "/dashboard",
    },
  ];

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function toggleNavigation() {
    if (openMobileMenu) {
      setOpenMobileMenu(false);
      enablePageScroll();
    } else {
      setOpenMobileMenu(true);
      disablePageScroll();
    }
  }

  function handleClick() {
    if (!openMobileMenu) return;
    toggleNavigation();

    enablePageScroll();
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">RealMint</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation &&
              navigation.map((item) => (
                <div key={item.id}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm uppercase"
                  >
                    {item.text}
                  </Link>
                </div>
              ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavigation}
              className="text-white md:hidden p-1 -mr-1"
              aria-label="Open menu"
            >
              {!openMobileMenu ? <Menu size={28} /> : <X size={28} />}
            </button>
          </div>
        </div>
      </div>

      {openMobileMenu && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-black/95 border-t border-green-900/20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col gap-1 ">
              {navigation &&
                navigation.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    onClick={handleClick}
                    className="block w-full px-4 py-3 text-gray-300 hover:text-green-400 transition-colors text-sm uppercase bg-transparent"
                  >
                    {item.text}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
