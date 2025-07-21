import React, { useEffect } from "react";
import Navbar from "../src/Components/Navbar"
import Footer from "../src/Components/Footer"
import Heroimage from "./assets/Heroimage.jpg";
import DiscussionSection from "../src/Components/Diskusi"

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-sky-50 transition-colors duration-300">
      <Navbar scrollToSection={scrollToSection} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Home Section */}
        <section id="home" className="bg-sky-50 pt-16 pb-24">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            {/* Teks Konten */}
            <div className="md:w-1/2 text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-600">
                Selamat Datang di{" "}
                <span className="text-sky-500">Sini Ngoding</span>
              </h1>
              <p className="text-lg md:text-xl text-black">
                Tempat belajar coding, berbagi ilmu, dan eksplorasi teknologi
                terkini.
              </p>
            </div>
            {/* Placeholder Gambar (opsional) */}
            <img
              src={Heroimage}
              alt="HeroImage"
              className="md:w-1/3 w-full h-64 bg-sky-100 rounded-lg flex items-center justify-center border-2 border-dashed border-sky-300 text-sky-400 mt-8 md:mt-0"
            />
          </div>
        </section>

        {/* Pengenalan Web Section */}
        <section id="pengenalan-web" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-sky-600">
              Kenapa Harus Sini Ngoding?
            </h2>
            <div className="max-w-3xl mx-auto text-black text-lg leading-relaxed">
              <p className="mb-6">
                Sini Ngoding hadir sebagai platform pembelajaran bagi siapa saja
                yang ingin mempelajari dunia pemrograman secara mudah dan
                menyenangkan.
              </p>
              <p className="mb-6">
                Kami percaya bahwa coding bukan hanya untuk orang tertentu saja,
                tapi bisa dipelajari oleh siapa pun, kapan pun, dan di mana pun.
              </p>
              <p className="mb-10">
                Di sini kamu akan menemukan berbagai materi, tutorial, dan
                artikel yang dibuat secara bertahap dari dasar hingga mahir.
                Mari kita mulai perjalananmu di dunia coding bersama Sini
                Ngoding!
              </p>

              {/* Tombol CTA Stylish */}
              <div className="flex justify-center">
                <a
                  href="#about"
                  className="inline-block px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transform hover:scale-105 transition duration-300"
                >
                  Mulai Belajar Sekarang →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Python Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-600">
              Apa Itu Python?
            </h2>
            <div className="flex justify-center">
              <div className="md:w-2/3 w-full">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Python adalah bahasa pemrograman tingkat tinggi yang dirancang
                  untuk mudah dibaca dan digunakan. Python sangat populer di
                  kalangan pengembang karena sintaksnya yang sederhana dan
                  ekosistem yang kaya dengan berbagai library dan framework.
                  Python bisa digunakan untuk pengembangan web, analisis data,
                  kecerdasan buatan, otomatisasi, dan masih banyak lagi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manfaat & Keunggulan Python */}
        <section id="manfaat-python" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-600">
              Mengapa Python Penting untuk Masa Depan?
            </h2>
            <div className="flex justify-center">
              <div className="md:w-2/3 w-full space-y-8">
                {/* Manfaat Python untuk Masa Depan */}
                <div className="bg-sky-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-sky-700">
                    Python untuk Masa Depan
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Python bukan hanya bahasa pemrograman populer saat ini, tapi
                    juga menjadi kunci dalam perkembangan teknologi masa depan.
                    Berikut alasan kenapa Python sangat penting:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                    <li>
                      <strong>
                        Artificial Intelligence & Machine Learning
                      </strong>
                      : Python adalah bahasa utama di balik AI modern. Library
                      seperti{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        TensorFlow
                      </code>
                      ,{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        PyTorch
                      </code>
                      , dan{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        scikit-learn
                      </code>{" "}
                      membuat Python jadi pilihan utama.
                    </li>
                    <li>
                      <strong>Data Science & Analisis</strong>: Dengan{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        pandas
                      </code>
                      ,{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        matplotlib
                      </code>
                      , dan{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        numpy
                      </code>
                      , Python memudahkan analisis data besar secara cepat dan
                      visual.
                    </li>
                    <li>
                      <strong>Otomatisasi & Scripting</strong>: Kamu bisa
                      otomatisasi tugas harian seperti pengolahan file, scraping
                      web, atau kirim email — semuanya dengan beberapa baris
                      kode.
                    </li>
                    <li>
                      <strong>Pengembangan Web</strong>: Framework seperti{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        Django
                      </code>{" "}
                      dan{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        Flask
                      </code>{" "}
                      memungkinkan pembuatan aplikasi web full-stack hanya
                      dengan Python.
                    </li>
                    <li>
                      <strong>Edukasi & Pemula</strong>: Banyak sekolah dan
                      universitas menggunakan Python sebagai bahasa pertama
                      karena sintaksnya sederhana dan mudah dipahami.
                    </li>
                  </ul>
                </div>

                {/* Keunggulan Python Dibanding Bahasa Lain */}
                <div className="bg-sky-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-sky-700">
                    Keunggulan Python Dibanding Bahasa Lain
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Python memiliki banyak kelebihan yang membuatnya unggul
                    dibanding bahasa pemrograman lain:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                    <li>
                      <strong>Sintaks Sederhana & Mudah Dibaca</strong>: Mirip
                      bahasa manusia, sehingga lebih cepat dipelajari dan
                      dikembangkan.
                    </li>
                    <li>
                      <strong>Ekosistem Luas</strong>: Ribuan library siap pakai
                      untuk hampir semua kebutuhan: dari web, AI, game, sampai
                      IoT.
                    </li>
                    <li>
                      <strong>Dukungan Komunitas Besar</strong>: Jika kamu
                      stuck, pasti ada solusi di Stack Overflow, GitHub, atau
                      forum komunitas.
                    </li>
                    <li>
                      <strong>Multiplatform & Cross-Device</strong>: Bisa
                      dijalankan di Windows, Mac, Linux, bahkan Raspberry Pi.
                    </li>
                    <li>
                      <strong>Bisa Digabung dengan Bahasa Lain</strong>: Python
                      bisa berintegrasi dengan C/C++, Java, JavaScript, dll
                      untuk performa tinggi.
                    </li>
                    <li>
                      <strong>Populer di Industri</strong>: Digunakan oleh
                      Google, Netflix, SpaceX, Instagram, dan perusahaan
                      teknologi top dunia.
                    </li>
                  </ul>
                </div>

                {/* Kesimpulan Singkat */}
                <div className="bg-white border-l-4 border-sky-600 p-5 shadow-md">
                  <p className="text-gray-700 italic">
                    "Python tidak hanya membantu kamu membuat program hari ini,
                    tapi juga membuka pintu karier di bidang teknologi masa
                    depan."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Penjelasan Tambahan: Konsep Dasar Python */}
        <section id="konsep-python" className="py-16 bg-sky-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-600">
              Konsep Dasar dalam Python
            </h2>
            <div className="flex justify-center">
              <div className="md:w-2/3 w-full space-y-8">
                {/* Class dan OOP */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">
                    Class dan Pemrograman Berorientasi Objek
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Python mendukung pemrograman berorientasi objek (OOP).
                    Dengan{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                      class
                    </code>
                    , kamu bisa membuat objek yang memiliki properti dan metode.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm overflow-x-auto">
                    {`class Mahasiswa:
    def __init__(self, nama, umur):
        self.nama = nama
        self.umur = umur

    def perkenalan(self):
        print(f"Halo, saya {self.nama}")

andi = Mahasiswa("Andi", 20)
andi.perkenalan()`}
                  </pre>
                </div>

                {/* Jenis Data */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">
                    Jenis-Jenis Data
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Python memiliki berbagai jenis data bawaan:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>Integer</strong>: bilangan bulat seperti{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        5
                      </code>
                      ,{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        -3
                      </code>
                    </li>
                    <li>
                      <strong>Float</strong>: bilangan desimal seperti{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        3.14
                      </code>
                    </li>
                    <li>
                      <strong>String</strong>: teks, ditulis dengan kutip
                      seperti{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        "Hello"
                      </code>
                    </li>
                    <li>
                      <strong>List</strong>: kumpulan data terurut, bisa diubah:{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        [1, 2, 3]
                      </code>
                    </li>
                    <li>
                      <strong>Dictionary</strong>: pasangan key-value:{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        {"{'nama': 'Budi', 'usia': 25}"}
                      </code>
                    </li>
                  </ul>
                </div>

                {/* Fungsi dan Modul */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">
                    Fungsi, Modul, dan Library
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Kamu bisa membuat fungsi sendiri dan menggunakan modul
                    bawaan atau eksternal.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm overflow-x-auto">
                    {`import math

def hitung_luas_lingkaran(r):
    return math.pi * r ** 2

print(hitung_luas_lingkaran(5))`}
                  </pre>
                  <p className="text-gray-700 mt-4">
                    Beberapa library populer:{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                      numpy
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                      pandas
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                      requests
                    </code>
                    , dan{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                      matplotlib
                    </code>
                    .
                  </p>
                </div>

                {/* Sintaks Sederhana */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">
                    Sintaks yang Mudah Dibaca
                  </h3>
                  <p className="text-black">
                    Salah satu alasan Python populer adalah sintaksnya yang
                    bersih dan mirip bahasa manusia.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm overflow-x-auto mt-3">
                    {`if umur >= 18:
    print("Dewasa")
else:
    print("Anak-anak")`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infografis Tren Python */}
        <section id="tren-python" className="py-16 bg-sky-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-sky-600">
              Python di Dunia Nyata: Tren & Masa Depan
            </h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Statistik 1 */}
              <div
                className="bg-white p-6 rounded-lg shadow-md transform opacity-0 translate-y-10 transition-all duration-700"
                ref={(el) => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      (entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            entry.target.classList.remove(
                              "opacity-0",
                              "translate-y-10"
                            );
                          }
                        });
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                <div className="text-3xl font-bold text-sky-600">40+ Juta</div>
                <p className="text-black">
                  Pengguna aktif Python di seluruh dunia, termasuk developer,
                  data scientist, dan AI engineer.
                </p>
              </div>

              {/* Statistik 2 */}
              <div
                className="bg-white p-6 rounded-lg shadow-md transform opacity-0 translate-y-10 transition-all duration-700 delay-100"
                ref={(el) => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      (entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            entry.target.classList.remove(
                              "opacity-0",
                              "translate-y-10"
                            );
                          }
                        });
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                <div className="text-3xl font-bold text-sky-600">#1</div>
                <p className="text-black">
                  Bahasa pemrograman paling populer menurut{" "}
                  <strong>Stack Overflow Developer Survey</strong> dan{" "}
                  <strong>GitHub Octoverse</strong>.
                </p>
              </div>

              {/* Statistik 3 */}
              <div
                className="bg-white p-6 rounded-lg shadow-md transform opacity-0 translate-y-10 transition-all duration-700 delay-200"
                ref={(el) => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      (entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            entry.target.classList.remove(
                              "opacity-0",
                              "translate-y-10"
                            );
                          }
                        });
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                <div className="text-3xl font-bold text-sky-600">
                  Google, Netflix, SpaceX
                </div>
                <p className="text-black">
                  Perusahaan teknologi top dunia menggunakan Python untuk produk
                  utama mereka.
                </p>
              </div>

              {/* Statistik 4 */}
              <div
                className="bg-white p-6 rounded-lg shadow-md transform opacity-0 translate-y-10 transition-all duration-700 delay-300"
                ref={(el) => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      (entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            entry.target.classList.remove(
                              "opacity-0",
                              "translate-y-10"
                            );
                          }
                        });
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                <div className="text-3xl font-bold text-sky-600">70%</div>
                <p className="text-black">
                  Ilmuwan data dan AI engineer menggunakan Python sebagai bahasa
                  utama mereka (sumber: Kaggle).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cara Menggunakan Python Section */}
        <section id="cara-menggunakan-react" className="py-16 bg-sky-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-600">
              Cara Menggunakan Python
            </h2>
            <div className="flex justify-center">
              <div className="md:w-2/3 w-full">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Untuk memulai menggunakan Python, kamu bisa memilih beberapa
                  cara tergantung kebutuhanmu. Berikut adalah langkah-langkah
                  awal untuk memulai coding dengan Python:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-black">
                  <li>
                    <strong>Instal Python</strong>: Unduh dan instal Python dari
                    situs resmi. Jalankan perintah berikut di terminal atau
                    command prompt:
                  </li>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm overflow-x-auto mb-4">
                    <code>python --version</code>
                  </pre>
                  <li>
                    <strong>Gunakan IDLE atau Editor</strong>: Python sudah
                    dilengkapi IDLE, tapi kamu bisa gunakan editor seperti VS
                    Code, PyCharm, atau Jupyter Notebook untuk pengalaman yang
                    lebih nyaman.
                  </li>
                  <li>
                    <strong>Menjalankan Script</strong>: Buat file Python (.py),
                    lalu jalankan:
                  </li>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm overflow-x-auto mb-4">
                    <code>python namafile.py</code>
                  </pre>
                  <li>
                    <strong>Gunakan Virtual Environment</strong>: Untuk
                    mengelola dependensi:
                  </li>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm overflow-x-auto">
                    <code>
                      python -m venv env
                      <br />
                      source env/bin/activate (Linux/Mac) atau
                      env\Scripts\activate (Windows)
                    </code>
                  </pre>
                </ol>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  Dengan mengikuti langkah-langkah di atas, kamu sudah bisa
                  mulai menggunakan Python untuk berbagai tujuan. Selamat
                  mencoba!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Penutup & CTA Section */}
        <section id="penutup" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-sky-600">
              Siap Mulai Belajar Python?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Dengan panduan ini, kamu sudah memiliki dasar yang kuat untuk
              memahami dan menggunakan Python. Jika ada yang ingin kamu
              tanyakan, bagikan ide, atau butuh bantuan, kami siap membantumu!
            </p>

            {/* Tombol CTA */}
            <div className="flex justify-center">
              <a
                href="#pertanyaan"
                className="inline-block px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transform hover:scale-105 transition duration-300"
              >
                Ajukan Pertanyaan →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ / Pertanyaan Section */}
        <section id="pertanyaan" className="py-16 bg-sky-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-600">
              Pertanyaan Umum
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Pertanyaan 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Python itu untuk apa?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Python bisa digunakan untuk banyak hal seperti pengembangan
                  web, analisis data, machine learning, otomatisasi tugas,
                  pembuatan game sederhana, dan bahkan aplikasi desktop.
                  Fleksibilitasnya membuat Python jadi salah satu bahasa paling
                  serbaguna.
                </p>
              </div>

              {/* Pertanyaan 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Apakah Python susah dipelajari?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tidak! Python dikenal sebagai bahasa yang sangat ramah untuk
                  pemula karena sintaksnya mirip bahasa manusia. Banyak sekolah
                  dan universitas menggunakan Python sebagai bahasa pertama
                  untuk mengajar coding.
                </p>
              </div>

              {/* Pertanyaan 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Apa bedanya Python dengan JavaScript?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Python biasanya digunakan untuk logika di backend, data, dan
                  AI. JavaScript lebih fokus ke interaksi di browser (frontend).
                  Tapi keduanya bisa saling melengkapi dalam satu proyek.
                </p>
              </div>

              {/* Pertanyaan 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Bisakah Python buat aplikasi web?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bisa! Dengan framework seperti Django dan Flask, kamu bisa
                  membuat aplikasi web lengkap — mulai dari login, database,
                  hingga tampilan halaman — hanya dengan Python.
                </p>
              </div>

              {/* Pertanyaan 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Butuh berapa lama belajar Python?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Untuk memahami dasar-dasar: 1–2 minggu. Untuk bisa bikin
                  proyek sendiri: 1–3 bulan. Yang terpenting adalah latihan
                  konsisten setiap hari, meski hanya 30 menit.
                </p>
              </div>

              {/* Pertanyaan 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Python bisa dijalankan di HP?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bisa! Di Android, kamu bisa pakai aplikasi seperti Pydroid 3.
                  Di iPhone, gunakan Carnets atau langsung buka Replit di
                  browser untuk coding Python langsung dari HP.
                </p>
              </div>

              {/* Pertanyaan 7 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Kenapa disebut 'vibe coding'?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Karena kamu cukup tulis ide dalam bahasa sehari-hari, lalu
                  biarkan AI bantu wujudkan. Tidak perlu setup, tidak perlu cari
                  dokumentasi — coding jadi cepat, alami, dan menyenangkan!
                </p>
              </div>

              {/* Pertanyaan 8 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Apakah Python gratis?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ya! Python adalah bahasa open-source dan sepenuhnya gratis
                  untuk digunakan, dimodifikasi, dan didistribusikan. Kamu bisa
                  download dari python.org tanpa biaya.
                </p>
              </div>

              {/* Pertanyaan 9 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Bisa ngoding Python tanpa instalasi?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bisa! Kamu bisa langsung coding Python di browser lewat
                  platform seperti Replit, Jupyter.org, atau Skulpt. Cukup buka
                  website-nya, langsung bisa mulai.
                </p>
              </div>

              {/* Pertanyaan 10 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Apa yang bisa saya buat dengan Python?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Kamu bisa buat: kalkulator, to-do list, chatbot, scraper web,
                  analisis data Excel, prediksi cuaca, bahkan aplikasi AI
                  sederhana. Imajinasimu batasnya!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Diskusi */}
      <DiscussionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
