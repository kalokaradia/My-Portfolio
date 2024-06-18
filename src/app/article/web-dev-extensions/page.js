import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArticleText } from "@/components/ArticleComponents";
import { ArticleTitle } from "@/components/ArticleComponents";
import { ArticleList } from "@/components/ArticleComponents";
import { ArticleDate } from "@/components/ArticleComponents";
import { ArticleBy } from "@/components/ArticleComponents";
import Link from "next/link";

export default function Pages() {
  return (
    <div id="main" className="bg-white font-poppins dark:bg-gray-900">
      <Navbar />
      <div className="pb-32 pt-36">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <ArticleTitle title="Rekomendasi Extensions Untuk Visual Studio Code Menurut Saya" />
          <ArticleBy by="Kaloka Radia Nanda" />
          <ArticleDate date="18/06/2024" />
          <ArticleText
            message="Hai teman-teman! Kalian suka coding? Atau mungkin baru mulai
            belajar? Kalau iya, kalian pasti tahu bahwa coding bisa jadi sangat
            menyenangkan tapi juga menantang. Salah satu cara untuk membuat
            coding lebih mudah dan menyenangkan adalah dengan menggunakan editor
            kode yang tepat. Salah satu editor kode favorit saya adalah Visual
            Studio Code (VS Code). Selain gratis dan open-source, VS Code juga
            punya banyak extensions yang bisa membantu kita saat coding."
          />
          <ArticleText
            message="Extensions ini seperti alat tambahan yang bisa kita pasang di VS
            Code untuk menambah fungsionalitas atau mempermudah kerja kita.
            Bayangin aja, dengan extensions yang tepat, kita bisa menghemat
            waktu, mengurangi kesalahan, dan bahkan belajar hal baru. Nah, di
            blog post kali ini, saya mau berbagi beberapa rekomendasi extensions
            untuk VS Code yang menurut saya sangat berguna dan wajib dicoba.
            Yuk, kita mulai!"
          />
          <ul className="list-inside list-decimal">
            <ArticleList list="Prettier - Code Formatter" />
            <ArticleText message="Kalau kamu suka kode yang rapi dan terformat dengan baik, Prettier adalah extension yang wajib banget dipakai. Dengan sekali klik atau shortcut, Prettier akan otomatis merapikan kode kamu sesuai dengan aturan yang sudah ditentukan. Nggak ada lagi tuh kode yang berantakan atau nggak konsisten!" />
            <ArticleList list="Live Server" />
            <ArticleText
              message="Pernah nggak sih kamu pengen lihat hasil perubahan kode
              HTML atau CSS secara langsung di browser? Nah, Live Server ini
              solusinya! Dengan extension ini, setiap kali kamu menyimpan
              perubahan di kode, browser akan otomatis refresh dan menampilkan
              hasil terbaru. Jadi, kamu bisa lihat perubahan secara real-time
              tanpa harus refresh manual."
            />
            <ArticleList list="ESlint" />
            <ArticleText message="Buat yang sering coding JavaScript seperti saya, ESLint ini bener-bener penyelamat! ESLint akan membantu kamu menemukan dan memperbaiki kesalahan di kode JavaScript kamu. Misalnya ada kesalahan sintaks atau aturan penulisan yang nggak sesuai standar, ESLint akan memberi tahu kamu. Jadi, kode kamu bisa tetap bersih dan bebas dari error." />
            <ArticleList list="Path Intellisense" />
            <ArticleText message="Path Intellisense ini bermanfaat banget buat kamu yang sering mengimport file atau module di proyek. Extension ini akan memberikan saran otomatis saat kamu mengetik path atau jalur file. Jadi, nggak perlu takut salah ketik path lagi!" />
            <ArticleList list="Turbo Console Log" />
            <ArticleText message="Pernah nggak sih, kamu merasa kesulitan saat debugging kode? Kadang, kita butuh menambahkan banyak `console.log` untuk melihat nilai variabel atau jalannya kode. Nah, menambahkan `console.log` satu per satu secara manual bisa sangat merepotkan dan memakan waktu. Di sinilah Turbo Console Log bisa membantu! Hanya dengan mengklik tombol `Ctrl` + `Alt` + `L` ke kode yang kamu seleksi maka akan langsung dibuatkan `console.log` nya." />
          </ul>
          <ArticleText message="Mungkin ini saja extension yang paling sering saya pakai dibandingkan extension lainnya. Sebagai seseorang yang suka coding, saya sudah mencoba banyak extension untuk Visual Studio Code, tetapi lima extension tadi sangat berguna menurut saya. Sampai jumpa di blog lainnya 👋!" />

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="mr-2 w-6"
              fill="#fff"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
            Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
