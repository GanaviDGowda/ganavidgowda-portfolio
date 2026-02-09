const skills = {
  "Programming Languages": ["Java", "Python"],
  "Web Development": ["HTML", "CSS", "JavaScript", "MERN Stack"],
  Databases: ["SQL", "MongoDB"],
  "UI/UX Design": ["Figma"],
  "Soft Skills": ["Teamwork", "Communication", "Leadership"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Skillset</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card bg-base-200">
            <div className="card-body">
              <h3 className="font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {items.map((skill) => (
                  <span key={skill} className="badge badge-outline">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
