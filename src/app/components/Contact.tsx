import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-10/12 mx-auto my-10 flex justify-between">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 text-p5 space-y-8">
        <div className="text-2xl font-bold">Let's Connect</div>
        <div>
          I’d love to hear from you! Whether it’s about potential work
          opportunities, a collaboration, or just to chat about tech, feel free
          to reach out. Let’s create something amazing together!
        </div>
        <div className="flex justify-between w-1/2">
          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="text-p5 hover:text-p4 transition text-4xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          {/* Phone */}
          <a
            href="tel:+1234567890"
            className="text-p5 hover:text-p4 transition text-4xl"
            aria-label="Phone"
          >
            <FaPhone />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-p5 hover:text-p4 transition text-4xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-p5 hover:text-p4 transition text-4xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <div className="bg-p6/50 p-6 rounded-lg">
          <form action="https://api.web3forms.com/submit" method="POST">
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="6c14b370-ac51-45bc-b933-1a3ed381b3d1"
            />

            {/* Name */}
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="text-p5 autofill:bg-p7 w-full bg-p7 p-3 border border-p3 rounded-lg focus:outline-none focus:ring-2 focus:ring-p4"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="text-p5 autofill:bg-p7 w-full bg-p7 p-3 border border-p3 rounded-lg focus:outline-none focus:ring-2 focus:ring-p4"
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Subject"
                className="text-p5 autofill:bg-p7 w-full bg-p7 p-3 border border-p3 rounded-lg focus:outline-none focus:ring-2 focus:ring-p4"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message"
                rows={5}
                className="text-p5 autofill:bg-p7 w-full bg-p7 p-3 border border-p3 rounded-lg focus:outline-none focus:ring-2 focus:ring-p4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-p4 text-background font-bold py-3 rounded-lg ransition ease-in-out duration-300 hover:-translate-y-0.5 hover:scale-102"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
