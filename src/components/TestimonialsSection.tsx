export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      comment:
        "\"Nuestra estancia en Puerto Hotel frente al mar en Puerto Arista fue mágica. Los atardeceres y la atención del personal hicieron de nuestro aniversario algo insuperable.\"",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop",
      name: "Valeria M.",
      role: "Visitó Puerto Arista",
    },
    {
      stars: 5,
      comment:
        "\"Elegimos Puerto Hotel para nuestro recorrido en San Cristóbal y el Cañón del Sumidero. La suite ejecutiva con café de altura y el proceso de reserva en línea fueron impecables.\"",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
      name: "Carlos Eduardo G.",
      role: "Visitó San Cristóbal & Tuxtla",
    },
    {
      stars: 5,
      comment:
        "\"El tour organizado hacia Palenque y el spa al regresar fueron de ensueño. Sin duda la mejor cadena hotelera para recorrer todo Chiapas con verdadero confort.\"",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop",
      name: "Sofia R.",
      role: "Vacaciones en Palenque",
    },
  ];

  return (
    <section id="testimonios" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
          Experiencias de Huéspedes
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-2">
          Lo Que Dicen Quienes Visitan Chiapas
        </h2>
        <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex text-gold-500 mb-4 text-sm gap-1">
                {[...Array(test.stars)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed">{test.comment}</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={test.avatar}
                alt={test.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-sm text-navy-900">{test.name}</h4>
                <span className="text-xs text-slate-400">{test.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
