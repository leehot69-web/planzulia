import logo from '../assets/logo.png';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center py-2">
                        <img src={logo} alt="Salud Zulia Logo" className="h-24 w-auto drop-shadow-md" />
                        <span className="ml-3 text-3xl font-black text-brand-blue tracking-tighter hidden sm:block">Salud Zulia</span>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#inicio" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Inicio</a>
                        <a href="#planes" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Planes</a>
                        <a href="#beneficios" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Beneficios</a>
                        <a href="#contacto" className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200/50">
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
