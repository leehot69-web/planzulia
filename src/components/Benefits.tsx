import {
    Stethoscope,
    Activity,
    Heart,
    Hospital,
    Microscope,
    Award,
    Clock,
    UserPlus
} from 'lucide-react';

export function Benefits() {
    const benefits = [
        {
            icon: <Stethoscope className="w-8 h-8 text-brand-blue" />,
            title: "+30 Especialidades",
            description: "Contamos con una amplia red de profesionales en todas las áreas de la medicina."
        },
        {
            icon: <Clock className="w-8 h-8 text-brand-blue" />,
            title: "Atención Inmediata",
            description: "Servicio de emergencias 24/7 con tiempos de espera mínimos para tu tranquilidad."
        },
        {
            icon: <Hospital className="w-8 h-8 text-brand-blue" />,
            title: "9 Sedes en el Zulia",
            description: "Ubicadas estratégicamente para que siempre tengas una sede cerca de donde estés."
        },
        {
            icon: <Activity className="w-8 h-8 text-brand-blue" />,
            title: "Tecnología Médica",
            description: "Equipamiento de última generación para diagnósticos precisos y tratamientos efectivos."
        },
        {
            icon: <Microscope className="w-8 h-8 text-brand-blue" />,
            title: "Laboratorio Integrado",
            description: "Realiza todos tus exámenes en un solo lugar con resultados rápidos y confiables."
        },
        {
            icon: <UserPlus className="w-8 h-8 text-brand-blue" />,
            title: "Afiliación Sencilla",
            description: "Proceso rápido y sin complicaciones. Comienza a disfrutar de tus beneficios hoy mismo."
        }
    ];

    return (
        <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">Beneficios Exclusivos</h2>
                        <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
                            ¿Por qué elegir <span className="text-brand-blue">Salud Zulia</span>?
                        </h3>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                            Nos enfocamos en brindar una experiencia de salud humana, cercana y de excelencia. Tu bienestar es nuestra única prioridad.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 p-6 rounded-3xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors">
                                <div className="shrink-0 bg-white p-4 rounded-2xl shadow-sm">
                                    <Award className="w-8 h-8 text-brand-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Respaldo y Confianza</h4>
                                    <p className="text-slate-600">Años de experiencia cuidando la salud de las familias zulianas con ética y profesionalismo.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6 p-6 rounded-3xl bg-orange-50/50 border border-orange-100 hover:bg-orange-50 transition-colors">
                                <div className="shrink-0 bg-white p-4 rounded-2xl shadow-sm">
                                    <Heart className="w-8 h-8 text-brand-orange" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Calidez Humana</h4>
                                    <p className="text-slate-600">No eres un número más, eres parte de nuestra familia. Te acompañamos en cada paso de tu recuperación.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 hover:border-brand-blue/20 hover:shadow-xl transition-all group">
                                <div className="mb-6 bg-slate-50 p-4 rounded-2xl w-fit group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{benefit.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
