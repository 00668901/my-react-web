import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavbarRef = useRef(null);

  // Toggle navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < 50 || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Handle klik menu (mobile & desktop)
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Tutup menu mobile setelah klik
  };

  return (
    <header
      ref={NavbarRef}
      className={`bg-sky-600 text-white p-4 shadow-md sticky top-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Judul Web sebagai tombol ke Home */}
        <button
          onClick={() => handleClick('home')}
          className="text-xl font-bold hover:underline focus:outline-none"
          aria-label="Go to Home"
        >
          Sini Ngoding
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => handleClick('pengenalan-web')} className="hover:underline text-sm sm:text-base">
            About?
          </button>
          <button onClick={() => handleClick('konsep-python')} className="hover:underline text-sm sm:text-base">
            Belajar
          </button>
          <button onClick={() => handleClick('pertanyaan')} className="hover:underline text-sm sm:text-base">
            Diskusi & Kontak
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              // X Icon (close)
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger Icon (menu)
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden mt-2 bg-sky-700 rounded-lg overflow-hidden shadow-lg">
          <ul className="space-y-1 py-2">
            <li>
            </li>
            <li>
              <button
                onClick={() => handleClick('pengenalan-web')}
                className="block w-full text-left px-4 py-3 hover:bg-sky-600 transition"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick('konsep-python')}
                className="block w-full text-left px-4 py-3 hover:bg-sky-600 transition"
              >
                Belajar
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick('pertanyaan')}
                className="block w-full text-left px-4 py-3 hover:bg-sky-600 transition"
              >
                Diskusi & Kontak
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;