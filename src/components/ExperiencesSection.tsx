export default function ExperiencesSection() {
  const experiences = [
    {
      icon: "fa-solid fa-spa",
      title: "Spa & Hidroterapia Costera",
      description:
        "Tratamientos revitalizantes con barro mineral de la costa chiapaneca, sauna de vapor y circuitos relajantes.",
    },
    {
      icon: "fa-solid fa-mug-hot",
      title: "Cata de Café & Alta Cocina Chiapaneca",
      description:
        "Degustación guiada de los mejores cafés de estricta altura de Chiapas y platillos con ingredientes tradicionales como chipilín y tascalate.",
    },
    {
      icon: "fa-solid fa-ship",
      title: "Expediciones Cañón & Selva",
      description:
        "Tours privados en lancha rápida por el Cañón del Sumidero y senderismo guiado por las cascadas y senderos de Palenque.",
    },
    {
      icon: "fa-solid fa-champagne-glasses",
      title: "Eventos & Galas Tradicionales",
      description:
        "Espacios acondicionados con ambientación textil de Los Altos de Chiapas y tecnología de vanguardia para congresos y bodas memorables.",
    },
  ];

  return (
    <section id="experiencias" className="py-20 bg-navy-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Experiencias en Chiapas
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2">
            La Magia de Puerto Hotel
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-navy-800/60 p-8 rounded-2xl border border-gold-500/10 hover:border-gold-500/40 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-2xl mb-6">
                <i className={exp.icon}></i>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">{exp.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
