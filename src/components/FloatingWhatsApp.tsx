import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/584246798762?text=Hola!%20Estoy%20visitando%20su%20página%20web%20y%20quisiera%20más%20información%20sobre%20los%20planes%20de%20salud."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
            aria-label="Contactar por WhatsApp"
        >
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                ¿Necesitas ayuda? Chatea con nosotros
            </span>
        </a>
    );
}
