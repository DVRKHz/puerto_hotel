import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-navy-950 text-white pt-16 pb-8 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Col 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-gold-500 flex items-center justify-center text-gold-400">
              <i className="fa-solid fa-water text-sm"></i>
            </div>
            <span className="font-serif font-bold text-lg">PUERTO HOTEL</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Hospedaje de lujo y experiencias auténticas en los destinos más emblemáticos de Chiapas desde 2015.
          </p>
          <div className="flex space-x-3 text-gold-400">
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-colors"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f text-xs"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-colors"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-xs"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-colors"
              aria-label="TripAdvisor"
            >
              <i className="fa-brands fa-tripadvisor text-xs"></i>
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-gold-400 mb-4">
            Navegación
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <Link href="#inicio" className="hover:text-gold-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#destinos" className="hover:text-gold-400 transition-colors">
                Destinos en Chiapas
              </Link>
            </li>
            <li>
              <Link href="#habitaciones" className="hover:text-gold-400 transition-colors">
                Habitaciones & Suites
              </Link>
            </li>
            <li>
              <Link href="#experiencias" className="hover:text-gold-400 transition-colors">
                Experiencias & Tours
              </Link>
            </li>
            <li>
              <Link href="#testimonios" className="hover:text-gold-400 transition-colors">
                Opiniones de Huéspedes
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-gold-400 mb-4">
            Ubicación & Contacto
          </h4>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-location-dot text-gold-400 mt-0.5"></i>
              <span>Blvd. Costero s/n, Puerto Arista, Tonalá, Chiapas, México</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-gold-400"></i>
              <span>+52 (961) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-gold-400"></i>
              <span>reservas@puertohotel.mx</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Backend integration badge */}
        <div className="bg-navy-900 p-5 rounded-2xl border border-gold-500/20">
          <h4 className="font-bold text-xs uppercase tracking-wider text-gold-400 mb-2">
            <i className="fa-solid fa-database mr-1"></i> Backend Synced
          </h4>
          <p className="text-[11px] text-slate-400 mb-3">
            Conectado con API Next.js & Base de Datos SQL Server (<code className="text-gold-400">puerto_hotel</code>).
          </p>
          <div className="text-[10px] bg-navy-950 px-3 py-1.5 rounded font-mono text-emerald-400 border border-emerald-500/30">
            ● Servidor Chiapas: En Línea
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © {currentYear} Puerto Hotel & Suites Chiapas. Todos los derechos reservados.
      </div>
    </footer>
  );
}
