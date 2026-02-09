export default function Education() {
  return (
    <section className="py-20 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

      <div className="max-w-4xl mx-auto space-y-4">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="font-semibold">
              B.E. Computer Science & Engineering
            </h3>
            <p>Malnad College of Engineering, Hassan</p>
            <p>CGPA: 9.15 (7th Semester)</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <p>PUC – Masters PU College: 96%</p>
            <p>10th (CBSE) – CKS English School: 89.2%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
