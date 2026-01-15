export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-10">
          Contact
        </h2>

        <div
          className="
            relative rounded-xl p-8
            bg-cardLight dark:bg-cardDark
            border
            shadow-sm
            max-w-3xl
          "
        >
          {/* Accent bar */}
          <div className="absolute top-0 left-0 h-1 w-full bg-msGreen rounded-t-xl" />

          <p className="text-textMutedLight dark:text-textMutedDark mb-6 leading-relaxed">
            I am currently open to entry-level full-stack or frontend developer
            opportunities. If you are hiring or would like to discuss a role,
            project, or collaboration, feel free to get in touch.
          </p>

          <div className="space-y-4 text-sm">
            <div>
              <span className="font-medium">Email</span>
              <div>
                <a
                  href="mailto:shawparo08@gmail.com"
                  className="text-msBlue hover:underline"
                >
                  shawparo08@gmail.com
                </a>
              </div>
            </div>

            <div>
              <span className="font-medium">GitHub</span>
              <div>
                <a
                  href="https://github.com/parbatikumari08"
                  target="_blank"
                  className="text-msBlue hover:underline"
                >
                  https://github.com/parbatikumari08
                </a>
              </div>
            </div>

            <div>
              <span className="font-medium">LinkedIn</span>
              <div>
                <a
                  href="https://www.linkedin.com/in/parbati-kumari-298b0431a/"
                  target="_blank"
                  className="text-msBlue hover:underline"
                >
                  https://www.linkedin.com/in/parbati-kumari-298b0431a/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
