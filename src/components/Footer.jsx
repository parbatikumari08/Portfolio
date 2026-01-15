export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t bg-cardLight dark:bg-cardDark">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">

        <div>
          <h3 className="font-semibold text-lg mb-2">Parbati Kumari</h3>
          <p className="text-textMutedLight dark:text-textMutedDark">
            Full-Stack Web Developer specializing in React, Node.js and
            modern web technologies.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#projects" className="hover:text-msBlue">Projects</a></li>
            <li><a href="#skills" className="hover:text-msBlue">Skills</a></li>
            <li><a href="#education" className="hover:text-msBlue">Education</a></li>
            <li><a href="#contact" className="hover:text-msBlue">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-1">
            <li><a href="mailto:shawparo08@gmail.com" className="hover:text-msBlue">Email</a></li>
            <li><a href="https://github.com/parbatikumari08" target="_blank" className="hover:text-msBlue">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/parbati-kumari-298b0431a/" target="_blank" className="hover:text-msBlue">LinkedIn</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-textMutedLight dark:text-textMutedDark mt-6">
        © {new Date().getFullYear()} Parbati Kumari — All Rights Reserved
      </div>
    </footer>
  )
}
