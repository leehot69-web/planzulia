import heroImage from '../assets/hero.png';
import { ChevronRight, ShieldCheck, HeartPulse, Building2 } from 'lucide-react';

export function Hero() {
    return (
        <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="mb-12 lg:mb-0">
                        <div className="inline-flex items-center space-x-2 bg-blue-100/50 text-brand-blue px-4 py-2 rounded-full mb-6 border border-blue-200">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">Plan Médico Salud Zulia</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                            Protegemos a tu <span className="text-brand-orange">familia</span> con los mejores planes
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                            Atención médica de alta calidad, más de 30 especialidades y amplia cobertura anual para tu tranquilidad.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#planes" className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-xl hover:shadow-blue-200/50 group">
                                Ver Planes
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#beneficios" className="inline-flex items-center justify-center bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                                Saber más
                            </a>
                        </div>

                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
                            <div className="flex items-center space-x-3">
                                <div className="bg-orange-100 p-2 rounded-lg">
                                    <Building2 className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">9</div>
                                    <div className="text-sm text-slate-500 font-medium">Sedes en Zulia</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <HeartPulse className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">+30</div>
                                    <div className="text-sm text-slate-500 font-medium">Especialidades</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-orange/20 to-brand-blue/20 blur-3xl rounded-full opacity-50"></div>
                        <div className="relative bg-white p-4 rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                            <img
                                src={heroImage}
                                alt="Familia feliz"
                                className="w-full h-auto rounded-2xl object-cover aspect-[4/5] object-center"
                            />
                            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs animate-bounce-subtle">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
                                    <p className="text-sm font-bold text-slate-800">Atención médica 24/7 disponible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
