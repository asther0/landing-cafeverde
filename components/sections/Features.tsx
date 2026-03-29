const features = [
  {
    title: "CafÃ© de Origen Selecto",
    description: "Trabajamos directamente con productores peruanos para traerte los mejores granos, tostados en el momento perfecto",
    icon: "✨",
  },
  {
    title: "Baristas Especializados",
    description: "Nuestro equipo de baristas certificados prepara cada taza con tÃ©cnicas precisas y pasiÃ³n por el oficio",
    icon: "🚀",
  },
  {
    title: "Experiencias de Cata",
    description: "Sesiones guiadas donde descubrirÃ¡s los perfiles de sabor Ãºnicos de cada origen y mÃ©todo de preparaciÃ³n",
    icon: "💡",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            La Experiencia CafeVerde
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            MÃ¡s que cafÃ©, una conexiÃ³n autÃ©ntica con cada grano
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
