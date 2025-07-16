import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Hadi Budi Hardoyo</h1>
      <p className="mt-2 text-lg sm:text-xl">Mahasiswa Teknik Informatika</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hai, nama saya Hadi Budi Hardoyo, seorang mahasiswa teknik informatika yang memiliki minat besar 
          dalam pengembangan web, data science, dan machine learning</p>

        <br />

        <p>
          Lihat {' '}
          <a
            target="_blank"
            className="font-heading underline"
            href="/cv ats hdibudihardoyo.pdf"
          >
            CV Saya disini
          </a>{' '}
          untuk informasi lebih lanjut.
        </p>
      </div>

      <Links />
    </div>
  )
}
