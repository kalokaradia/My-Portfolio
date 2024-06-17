/* eslint-disable react/prop-types */
function ExperienceComponent({ date, title, message, typeSvg }) {
  return (
    <div className="relative mx-auto block max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-6">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      {typeSvg}
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {date}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{message}</p>
    </div>
  );
}

function Trophy() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="absolute right-2 top-2 size-6 rotate-12 dark:text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
      />
    </svg>
  );
}

function Graduation() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="absolute right-2 top-2 size-6 rotate-12 dark:text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  );
}

export default function Experience() {
  return (
    <section className="bg-white pb-32 pt-36 dark:bg-gray-900" id="experience">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Experience
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-0 space-y-4 sm:gap-4 sm:space-y-0 md:grid-cols-2 lg:grid-cols-4">
          <ExperienceComponent
            title="NEW INTERMEDIATE 1 Katogeri Sempi"
            date="13/01/2019"
            message="Saya mengikuti kejuaraan SEMPOA SIP se-Jawa Tengah dan mendapat juara harapan 2."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="Ar-Rois Language and Science Olympiad (ALSO)"
            date="03/04/2023"
            message="Saya mengikuti olimpiade ALSO pada tanggal 3 bulan April tahun 2023 di bidang bahasa inggris."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="ISC Se Jawa Tengah 2023"
            date="12/06/2023"
            message="Saya mengikuti olimpiade ISC Se Jawa Tengah 2023 di bidang Matematika terintegrasi."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="IISC 2023"
            date="20/08/2023"
            message="Saya mengikuti olimpiade IISC 2023 di bidang Matematika terintegrasi."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="MSC 2023"
            date="20/08/2023"
            message="Saya mengikuti olimpiade MSC 2023 di bidang Matematika."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="FUSO 2023"
            date="24/09/2023"
            message="Saya mengikuti olimpiade FUSO 2023 di bidang Matematika."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="BIG BANG COMPETITION 2"
            date="07/10/2023"
            message="Saya mengikuti olimpiade BIG BANG COMPETITION 2 di bidang Matematika."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="PIMO 2023"
            date="29/10/2023"
            message="Saya mengikuti olimpiade PIMO 2023 di bidang Matematika."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="Olimpiade Sains dan Agama (OSMA)"
            date="28/02/2024"
            message="Saya mengikuti olimpiade OSMA di bidang Matematika, IPA, dan TIK."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="Olimpiade PAI Nasional (OPIN)"
            date="31/03/2024"
            message="Saya mengikuti olimpiade OSMA di bidang PAI."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="Peringkat 2 Asesmen Madrasah"
            date="11/06/2024"
            message="Saya mendapat peringkat ke-2 dalam Asesmen Madrasah TP. 2023/2024."
            typeSvg={<Trophy />}
          />
          <ExperienceComponent
            title="Lulus dari Jenjang Sekolah Dasar"
            date="11/06/2024"
            message="Saya telah lulus dari jenjang sekolah dasar di MIN 3 Purworejo. Saya ucapkan terimakasih kepada guru-guru MIN 3 Purworejo yang telah mendidik saya dengan ikhlas dan tulus 🙂."
            typeSvg={<Graduation />}
          />
        </div>
      </div>
    </section>
  );
}
