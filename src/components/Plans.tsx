import { plans, doradoPlans } from '../data/plans';
import { Check, Info } from 'lucide-react';

export function Plans() {
    return (
        <section id="planes" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-3">Nuestras Coberturas</h2>
                    <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Planes que se adaptan a ti</h3>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Ofrecemos diversas opciones para que tú y tu familia estén protegidos ante cualquier eventualidad médica.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 overflow-hidden flex flex-col group"
                        >
                            <div
                                className="p-8 text-white relative"
                                style={{ backgroundColor: plan.color }}
                            >
                                <div className="text-sm font-bold uppercase opacity-80 mb-2">{plan.ageRange}</div>
                                <h4 className="text-3xl font-black mb-4">{plan.name}</h4>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-5xl font-black">${plan.monthlyCost}</span>
                                    <span className="ml-2 text-sm font-medium opacity-80">/ mes por afiliado</span>
                                </div>
                                {plan.costDetail && (
                                    <p className="text-xs font-bold bg-white/20 p-2 rounded-lg mt-2 inline-block">
                                        {plan.costDetail}
                                    </p>
                                )}
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <p className="text-sm font-bold uppercase opacity-80 mb-1">Cobertura Anual</p>
                                    <p className="text-2xl font-black">${plan.annualCoverage.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className="p-8 flex-grow">
                                <ul className="space-y-4">
                                    {plan.features.slice(0, 10).map((feature, idx) => (
                                        <li key={idx} className="flex justify-between items-start text-sm">
                                            <span className="text-slate-600 font-medium leading-tight mr-2">{feature.name.replace('*', '')}</span>
                                            <span className="text-brand-blue font-bold whitespace-nowrap bg-blue-50 px-2 py-0.5 rounded text-[10px]">{feature.period}</span>
                                        </li>
                                    ))}
                                    <li className="pt-4 text-center">
                                        <button className="text-brand-blue font-bold text-sm hover:underline cursor-pointer">
                                            Ver todos los beneficios
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className="px-8 pb-8 mt-auto">
                                <a
                                    href={`https://wa.me/584246798762?text=${encodeURIComponent(`Hola! Quisiera más información sobre el plan ${plan.name} para mi familia.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-4 rounded-xl font-black text-white transition-all shadow-lg group-hover:-translate-y-1"
                                    style={{ backgroundColor: plan.color }}
                                >
                                    Afiliarme ahora
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* New Dorado Section */}
                <div className="mt-20 bg-gradient-to-r from-brand-gold to-orange-400 rounded-[3rem] p-8 lg:p-16 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 lg:flex items-center gap-16">
                        <div className="lg:w-1/3 mb-10 lg:mb-0">
                            <div className="bg-white/20 p-3 rounded-2xl w-fit mb-6">
                                <Info className="w-8 h-8" />
                            </div>
                            <h3 className="text-5xl font-black mb-6">New Dorado</h3>
                            <p className="text-xl opacity-90 leading-relaxed font-medium mb-8">
                                Un plan pensado exclusivamente para nuestros adultos mayores de <span className="underline decoration-white underline-offset-4">60 a 80 años</span>.
                            </p>
                            <div className="bg-black/10 p-6 rounded-2xl border border-white/20">
                                <p className="text-sm font-bold uppercase opacity-80 mb-1">Cobertura Anual</p>
                                <p className="text-4xl font-black">$20,000</p>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid sm:grid-cols-3 gap-6">
                            {doradoPlans.map((stage, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 text-slate-900 shadow-xl border border-white relative group hover:-translate-y-2 transition-all">
                                    <div className="absolute -top-4 left-8 bg-brand-gold text-white text-xs font-black px-4 py-2 rounded-full uppercase">
                                        Etapa {idx + 1}
                                    </div>
                                    <div className="text-3xl font-black text-brand-gold mb-2">${stage.monthlyCost}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-4">Costo Mensual</div>
                                    <h5 className="font-black text-xl mb-4 leading-tight">{stage.detail}</h5>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center text-xs font-bold text-slate-500">
                                            <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                                            Atención Preferencial
                                        </li>
                                        <li className="flex items-center text-xs font-bold text-slate-500">
                                            <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                                            Cobertura Vitalicia
                                        </li>
                                    </ul>
                                    <a
                                        href={`https://wa.me/584246798762?text=${encodeURIComponent(`Hola! Quisiera información sobre el plan New Dorado ${stage.detail} para adultos mayores.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 bg-brand-gold/10 text-brand-gold font-black rounded-xl hover:bg-brand-gold hover:text-white transition-all text-sm text-center"
                                    >
                                        Seleccionar
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
