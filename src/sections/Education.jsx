export default function Education() {
  return (
    <section id="education" className="py-24 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          Education
        </h2>

        <div className="space-y-8">

          {/* B.Tech */}
          <div className="relative rounded-xl p-8 bg-cardLight dark:bg-cardDark border shadow-sm">
            <div className="absolute top-0 left-0 h-1 w-full bg-msYellow rounded-t-xl" />

            <h3 className="text-xl font-semibold">
              B.Tech in Computer Science & Engineering
            </h3>

            <p className="text-textMutedLight dark:text-textMutedDark mt-1">
              Bengal College of Engineering and Technology, Durgapur
            </p>

            <p className="text-sm mt-4">
              <span className="font-medium">CGPA:</span> 7.6 / 10
              <span className="mx-2 text-textMutedLight dark:text-textMutedDark">•</span>
              Aug 2021 – June 2025
            </p>
          </div>

          {/* Intermediate */}
          <div className="relative rounded-xl p-8 bg-cardLight dark:bg-cardDark border shadow-sm">
            <div className="absolute top-0 left-0 h-1 w-full bg-msBlue rounded-t-xl" />

            <h3 className="text-xl font-semibold">
              Intermediate (Class 12)
            </h3>

            <p className="text-textMutedLight dark:text-textMutedDark mt-1">
              Jawahar Navodaya Vidyalaya, Durgapur
            </p>

            <p className="text-sm mt-4">
              <span className="font-medium">Percentage:</span> 84%
              <span className="mx-2 text-textMutedLight dark:text-textMutedDark">•</span>
              May 2019 – June 2021
            </p>
          </div>

          {/* Matriculation */}
          <div className="relative rounded-xl p-8 bg-cardLight dark:bg-cardDark border shadow-sm">
            <div className="absolute top-0 left-0 h-1 w-full bg-msGreen rounded-t-xl" />

            <h3 className="text-xl font-semibold">
              Matriculation (Class 10)
            </h3>

            <p className="text-textMutedLight dark:text-textMutedDark mt-1">
              Jawahar Navodaya Vidyalaya, Durgapur
            </p>

            <p className="text-sm mt-4">
              <span className="font-medium">Percentage:</span> 86.47%
              <span className="mx-2 text-textMutedLight dark:text-textMutedDark">•</span>
              May 2018 – June 2019
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
