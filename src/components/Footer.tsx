import logo from '../assets/logo.png';
import { Facebook, Instagram, Twitter, Linkedin, HeartPulse } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
                    <div className="col-span-2">
                        <div className="flex items-center text-white mb-6">
                            <img src={logo} alt="Salud Zulia Logo" className="h-10 w-auto brightness-200 contrast-200" />
                            <span className="ml-3 text-2xl font-black tracking-tight">Salud Zulia</span>
                        </div>
                        <p className="text-lg max-w-sm mb-8 leading-relaxed">
                            Dedicados a proteger lo más valioso: la vida y la salud de las familias zulianas. Compromiso, calidad y excelencia médica.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-brand-orange transition-colors"><Instagram className="w-6 h-6" /></a>
                            <a href="#" className="hover:text-brand-orange transition-colors"><Facebook className="w-6 h-6" /></a>
                            <a href="#" className="hover:text-brand-orange transition-colors"><Twitter className="w-6 h-6" /></a>
                            <a href="#" className="hover:text-brand-orange transition-colors"><Linkedin className="w-6 h-6" /></a>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Navegación</h5>
                        <ul className="space-y-4">
                            <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#planes" className="hover:text-white transition-colors">Nuestros Planes</a></li>
                            <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
                            <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Legales</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Uso de Coberturas</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium">
                    <p>© {currentYear} Plan Médico Salud Zulia. Todos los derechos reservados.</p>
                    <div className="flex items-center mt-4 md:mt-0">
                        <span>Hecho con</span>
                        <HeartPulse className="w-4 h-4 mx-2 text-brand-orange" />
                        <span>en el Zulia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
