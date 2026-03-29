export function CTA() {
  return (
    <section id="cta" className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Reserva tu Experiencia
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Asegura tu mesa y vive el ritual del cafÃ© como nunca antes
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
        >
          Hacer mi reserva ahora
        </a>
      </div>
    </section>
  );
}
