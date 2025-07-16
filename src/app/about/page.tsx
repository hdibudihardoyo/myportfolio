import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Mahasiswa semester 5 Program Studi Teknik Informatika di STMIK IKMI Cirebon
          dengan minat kuat di bidang pengembangan web, data science, dan machine
          learning. Memiliki pengalaman dalam membangun aplikasi front-end, mendesain
          basis data, serta menerapkan teknik analisis data dan pemodelan prediktif. Aktif
          dalam organisasi pengembang aplikasi dan pernah terlibat dalam berbagai proyek
          praktis serta kegiatan mentoring. Terbiasa bekerja dengan berbagai tools modern
          seperti Python, ReactJS, GitHub, dan MySQL, serta memiliki kemampuan
          komunikasi, pemecahan masalah, dan berpikir analitis yang baik
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
