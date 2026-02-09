type View =
  | "home"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "contact";

export default function Hero({onNavigate,}:{onNavigate: (view: View) => void;})
{
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl font-bold">
          Hi, I’m <span className="text-primary">Ganavi D Gowda</span>
        </h1>

        <p className="text-lg text-base-content/80">
          Self-driven Computer Science student passionate about full-stack
          development, NLP, and building impactful real-world solutions.
        </p>

        <button
          onClick={() => onNavigate("projects")}
          className="btn btn-primary"
        >
          View My Work
        </button>
      </div>
    </section>
  );
}
