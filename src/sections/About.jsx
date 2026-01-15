export default function About() {
  return (
    <section id="about" className="py-24 border-t">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <h2 className="text-2xl font-semibold mb-10">
          About
        </h2>

        {/* Profile card */}
        <div
          className="
            relative rounded-xl p-8
            bg-cardLight dark:bg-cardDark
            border
            shadow-sm
          "
        >
          {/* Accent bar */}
          <div className="absolute top-0 left-0 h-full w-1 bg-msBlue rounded-l-xl" />

          <p className="max-w-3xl text-textMutedLight dark:text-textMutedDark leading-relaxed">
            I am a B.Tech Computer Science and Engineering student with
            strong hands-on experience in building responsive and scalable
            web applications. My work focuses on full-stack development
            using React.js, Node.js, Express.js, and MongoDB, with practical
            experience in RESTful API development, JWT-based authentication,
            and database design. I have also worked with third-party APIs,
            application deployment, and modern UI practices. I am actively
            seeking entry-level full-stack or frontend developer roles where
            I can contribute to real-world products and continue to grow as
            a software engineer.
          </p>
        </div>
      </div>
    </section>
  )
}
