export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="mb-2">Hassan, Karnataka, India</p>
      <p className="mb-4">
        Email: <b>ganavigowdad@gmail.com</b>
      </p>

      <div className="space-x-4">
        <a
          href="https://github.com/GanaviDGowda"
          target="_blank"
          className="btn btn-outline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ganavi-d-gowda-b78b87267"
          target="_blank"
          className="btn btn-outline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ganavigowdad@gmail.com"
          className="btn btn-primary"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
