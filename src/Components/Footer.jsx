import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolom 1 - Tentang */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sini Ngoding</h3>
            <p className="text-sm text-sky-200">
              Tempat belajar coding, berbagi ilmu, dan eksplorasi teknologi terkini.
              Kami percaya bahwa coding bisa menyenangkan dan mudah dipelajari oleh siapa saja.
            </p>
          </div>

          {/* Kolom 2 - Navigasi */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-sky-300 transition">Apa Itu Python?</a>
              </li>
              <li>
                <a href="#cara-menggunakan-react" className="hover:text-sky-300 transition">Belajar</a>
              </li>
              <li>
                <a href="#pertanyaan" className="hover:text-sky-300 transition">Diskusi</a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Kontak & Media Sosial */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <a
                  href="https://instagram.com/sininoding.id "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sky-300 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.662 4.773-4.92 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.227-.149-4.775-1.699-4.919-4.92-.059-1.265-.07-1.644-.07-4.849 0-3.204.011-3.584.07-4.849.145-3.225 1.696-4.773 4.92-4.919 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-3.052.14-4.818 1.898-4.96 4.936-.057 1.272-.07 1.656-.07 4.948 0 3.291.013 3.676.07 4.948.141 3.036 1.9 4.798 4.96 4.96.057 1.271.07 1.655.07 4.948 0 3.292-.015 3.679-.074 4.951-.14 3.037-1.899 4.8-4.96 4.96-1.272.058-1.658.07-4.951.07-3.291 0-3.678-.012-4.948-.07-3.032-.142-4.807-1.9-4.96-4.96-.057-1.27-.07-1.657-.07-4.947 0-3.292.014-3.679.07-4.949.141-3.034 1.902-4.8 4.959-4.944 1.271-.057 1.653-.07 4.947-.07 3.295 0 3.679.014 4.949.07 3.036.143 4.8.907 4.944 4.944.057 1.271.07 1.658.07 4.951 0 3.292-.015 3.679-.074 4.951-.142 3.037-1.902 4.8-4.96 4.944-4.96.057-1.271.07-1.657.07-4.949 0-3.292-.012-3.679-.07-4.949-.143-3.034-1.9-4.8-4.944-4.944-1.27-.057-1.658-.07-4.951-.07zM12 5.839a6.161 6.161 0 1 0 0 12.322 6.161 6.161 0 0 0 0-12.322zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm9.268-1.3a1.3 1.3 0 1 1-2.599-.001 1.3 1.3 0 0 1 2.599.001z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://youtube.com/ @sininoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sky-300 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a2.963 2.963 0 0 0-2.089-2.088C19.25 3.5 12 3.5 12 3.5s-7.25 0-9.412.596A2.963 2.963 0 0 0 .5 6.186C0 8.343 0 12 0 12s0 3.657.5 5.814a2.963 2.963 0 0 0 2.088 2.088C4.75 20.5 12 20.5 12 20.5s7.25 0 9.412-.596a2.963 2.963 0 0 0 2.088-2.088C24 15.657 24 12 24 12s0-3.657-.502-5.814zM9.545 15.638V8.362L15.818 12l-6.273 3.638z" />
                  </svg>
                  YouTube
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://github.com/sininoding "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sky-300 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12.001c0 5.302 3.438 9.8 8.205 11.386.6.11.82-.258.82-.578 0-.284-.01-1.04-.015-2.04-3.34.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.754-1.333-1.754-1.09-.745.08-.73.08-.73.926.069 1.404 1.032 1.404 1.032.81 1.381 2.108.98 2.61.75.08-.587.3-.978.54-1.208-1.77-.204-3.64-.89-3.64-3.95 0-.874.312-1.59.823-2.15-.083-.204-0.358-1.016.077-2.12 0 0 .672-.215 2.2.82.638-.18-1.337-.268-2.027-.27-1.69 0-2.72 1.03-2.72 2.72 0 1.584 1.296 2.9 2.9 2.9 1.668 0 2.5-1.318 2.5-2.48 0-.364-.12-.672-.333-1.09-2.22-.254-.452-1.1-.452-1.6 0-1.1.61-1.904 1.16-2.35-1.2-.13-2.45-.6-2.45-2.32 0-.514.196-.925.502-1.23-2.46-.28-5.034-1.11-5.034-5.02 0-1.11.392-2.003 1.03-2.713-.104-.255-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.02.8.28.95.92.95 1.8 0 1.8 1.2 2.168 1.2 2.168 1.2 1.3.46 1.8 0 1.8 0 .92-.56 1.52-.88 1.82.22.68.86 1.45.86 1.45 1.46.8 2.99.8 2.99 0 0-.68.2-1.45.8-2.68 0 0-.4-1.02-.86-1.8-1.2-1.1-2.4-1.1-2.4 0-.46.17-1.27.92-1.8.17-.16.36-.74.06-1.48 0 0 .7-.23 2.28.86.82-.23 1.68.11 1.68.11 1.07.74 1.72 1.67 1.72 2.7 0 3.91-2.573 4.74-5.035 4.99.39.33.74 1.02.74 2.07 0 1.5.014 2.707.014 3.07 0 .298-.192.646-.74.535-4.38-1.46-7.496-5.52-7.496-9.91 0-5.84 4.7-10.5 10.5-10.5 5.84 0 10.5 4.7 10.5 10.5 0 5.84-4.66 10.5-10.5 10.5z" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4 - Komunitas Coding */}
          <div>
            <h3 className="text-lg font-bold mb-4">Komunitas Coding</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://facebook.com/groups/belajarcoding "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition"
                >
                  Belajar Coding (Facebook Group)
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/frontendid "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition"
                >
                  Frontend ID (Discord)
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/groups/1557183148923925 "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition"
                >
                  Belajar Pemrograman (Facebook)
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/invite/yourgroup "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition"
                >
                  Grup WhatsApp (Full Course Python)
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/webdevid "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition"
                >
                  WebDev Indonesia (Telegram)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-sky-700 text-center text-sm text-sky-300">
          &copy; {new Date().getFullYear()} Sini Ngoding. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;