import { MessageCircle, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
    return (
        <section id="contacto" className="py-24 bg-brand-blue relative overflow-hidden text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">Contacto</h2>
                        <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                            ¿Listo para estar <span className="text-brand-gold italic">asegurado</span>?
                        </h3>
                        <p className="text-xl opacity-80 mb-12 max-w-lg">
                            Solicita tu presupuesto personalizado o resuelve tus dudas con uno de nuestros asesores expertos.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center space-x-6 group">
                                <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-brand-orange transition-colors">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase opacity-60">Llámanos</p>
                                    <p className="text-xl font-bold">+58 424-6798762</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6 group">
                                <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-brand-orange transition-colors">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase opacity-60">WhatsApp</p>
                                    <p className="text-xl font-bold">+58 424-6798762</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6 group">
                                <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-brand-orange transition-colors">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase opacity-60">Ubicación</p>
                                    <p className="text-xl font-bold">Maracaibo, Edo. Zulia, Venezuela</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href="https://wa.me/584246798762?text=Hola,%20quisiera%20más%20información%20sobre%20los%20planes%20de%20Salud%20Zulia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all shadow-xl"
                            >
                                <MessageCircle className="mr-2 w-6 h-6" />
                                Chatear por WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-[2rem] p-8 lg:p-12 text-slate-800 shadow-2xl">
                            <h4 className="text-2xl font-black mb-8">Envíanos un mensaje</h4>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Nombre</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Tu nombre" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-500 uppercase mb-2">WhatsApp / Teléfono</label>
                                        <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="+58..." />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Plan de Interés</label>
                                    <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none">
                                        <option>Selecciona un plan</option>
                                        <option>Vip New</option>
                                        <option>Gold New</option>
                                        <option>Diamante New</option>
                                        <option>Zafiro New</option>
                                        <option>New Dorado</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 uppercase mb-2">Mensaje</label>
                                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="¿Cómo podemos ayudarte?"></textarea>
                                </div>
                                <button className="w-full bg-brand-orange text-white py-5 rounded-xl font-black text-lg hover:bg-orange-600 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-200/50">
                                    <Send className="w-5 h-5" />
                                    <span>Enviar Solicitud</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
