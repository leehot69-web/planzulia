export interface PlanFeature {
    name: string;
    period: string;
}

export interface Plan {
    id: string;
    name: string;
    ageRange: string;
    annualCoverage: number;
    monthlyCost: number;
    costDetail?: string;
    color: string;
    features: PlanFeature[];
}

export const planFeatures = [
    "HOSPITALIZACION",
    "UCI",
    "CIRUGIA ELECTIVAS*",
    "CIRUGIAS DE EMERGENCIA*",
    "EMBARAZO",
    "SERVICIO DE EMERGENCIAS",
    "CONSULTAS BÁSICAS",
    "CONSULTAS ESPECIALIZADAS",
    "SERVICIO DE ODONTOLOGIA",
    "RAYOS X DE EMERGENCIA",
    "RAYOS X",
    "MAMOGRAFIA*",
    "TOMOGRAFIAS EMERGENCIA",
    "LABORATORIOS EMERGENCIA",
    "LABORATORIOS BÁSICOS",
    "LABORATORIO ESPECIALES",
    "ECOGRAMAS EMERGENCIA",
    "ECOGRAMAS BÁSICOS",
    "ECOGRAMA ESPECIAL",
    "ELECTROCARDIOGRAMA",
    "ECOCARDIOGRAMAS */MAPA / HOLTER",
    "MASTOLOGÍA CONSULTA",
    "MASTOLOGÍA CIRUGÍAS ELECTIVAS*",
    "DERMATOLOGÍA ESTÉTICA",
    "SERVICIO DE PELUQUERÍA Y MANICURE",
    "CONSULTAS NEUROCIRUGÍA / NEUROLOGÍA PEDIÁTRICA*",
    "NEUROCIRUGÍA EMERGENCIA: CURA Y PLASTIA DE HERIDAS",
    "CONSULTAS: PSICOPEDAGOGÍA/ HEMATOLOGÍA NEFROLOGÍA/ OFTALMOLOGÍA*"
];

export const plans: Plan[] = [
    {
        id: 'vip-new',
        name: 'Vip New',
        ageRange: '2 meses a 59 años',
        annualCoverage: 20000,
        monthlyCost: 18,
        color: '#ff3366',
        features: [
            { name: "HOSPITALIZACION", period: "3 MESES P/E" },
            { name: "UCI", period: "1 AÑO P/E" },
            { name: "CIRUGIA ELECTIVAS*", period: "1 AÑO P/E" },
            { name: "CIRUGIAS DE EMERGENCIA*", period: "SIN P/E" },
            { name: "EMBARAZO", period: "1 AÑO P/E" },
            { name: "SERVICIO DE EMERGENCIAS", period: "SIN P/E" },
            { name: "CONSULTAS BÁSICAS", period: "SIN P/E" },
            { name: "CONSULTAS ESPECIALIZADAS", period: "SIN P/E" },
            { name: "SERVICIO DE ODONTOLOGIA", period: "3 MESES P/E" },
            { name: "RAYOS X DE EMERGENCIA", period: "SIN P/E" },
            { name: "RAYOS X", period: "SIN P/E" },
            { name: "MAMOGRAFIA*", period: "3 MESES P/E" },
            { name: "TOMOGRAFIAS EMERGENCIA", period: "3 MESES P/E" },
            { name: "LABORATORIOS EMERGENCIA", period: "SIN P/E" },
            { name: "LABORATORIOS BÁSICOS", period: "SIN P/E" },
            { name: "LABORATORIO ESPECIALES", period: "3 MESES P/E" },
            { name: "ECOGRAMAS EMERGENCIA", period: "SIN P/E" },
            { name: "ECOGRAMAS BÁSICOS", period: "SIN P/E" },
            { name: "ECOGRAMA ESPECIAL", period: "3 MESES P/E" },
            { name: "ELECTROCARDIOGRAMA", period: "SIN P/E" },
            { name: "ECOCARDIOGRAMAS */MAPA / HOLTER", period: "3 MESES P/E" },
            { name: "MASTOLOGÍA CONSULTA", period: "NO APLICA" },
            { name: "MASTOLOGÍA CIRUGÍAS ELECTIVAS*", period: "NO APLICA" },
            { name: "DERMATOLOGÍA ESTÉTICA", period: "NO APLICA" },
            { name: "SERVICIO DE PELUQUERÍA Y MANICURE", period: "NO APLICA" },
            { name: "CONSULTAS NEUROCIRUGÍA / NEUROLOGÍA PEDIÁTRICA*", period: "NO APLICA" },
            { name: "NEUROCIRUGÍA EMERGENCIA: CURA Y PLASTIA DE HERIDAS", period: "NO APLICA" },
            { name: "CONSULTAS: PSICOPEDAGOGÍA/ HEMATOLOGÍA NEFROLOGÍA/ OFTALMOLOGÍA*", period: "NO APLICA" }
        ]
    },
    {
        id: 'gold-new',
        name: 'Gold New',
        ageRange: '2 meses a 59 años',
        annualCoverage: 35000,
        monthlyCost: 25,
        color: '#ffb400',
        features: [
            { name: "HOSPITALIZACION", period: "3 MESES P/E" },
            { name: "UCI", period: "1 AÑO P/E" },
            { name: "CIRUGIA ELECTIVAS*", period: "1 AÑO P/E" },
            { name: "CIRUGIAS DE EMERGENCIA*", period: "SIN P/E" },
            { name: "EMBARAZO", period: "1 AÑO P/E" },
            { name: "SERVICIO DE EMERGENCIAS", period: "SIN P/E" },
            { name: "CONSULTAS BÁSICAS", period: "SIN P/E" },
            { name: "CONSULTAS ESPECIALIZADAS", period: "SIN P/E" },
            { name: "SERVICIO DE ODONTOLOGIA", period: "3 MESES P/E" },
            { name: "RAYOS X DE EMERGENCIA", period: "SIN P/E" },
            { name: "RAYOS X", period: "SIN P/E" },
            { name: "MAMOGRAFIA*", period: "3 MESES P/E" },
            { name: "TOMOGRAFIAS EMERGENCIA", period: "3 MESES P/E" },
            { name: "LABORATORIOS EMERGENCIA", period: "SIN P/E" },
            { name: "LABORATORIOS BÁSICOS", period: "SIN P/E" },
            { name: "LABORATORIO ESPECIALES", period: "3 MESES P/E" },
            { name: "ECOGRAMAS EMERGENCIA", period: "SIN P/E" },
            { name: "ECOGRAMAS BÁSICOS", period: "SIN P/E" },
            { name: "ECOGRAMA ESPECIAL", period: "3 MESES P/E" },
            { name: "ELECTROCARDIOGRAMA", period: "SIN P/E" },
            { name: "ECOCARDIOGRAMAS */MAPA / HOLTER", period: "3 MESES P/E" },
            { name: "MASTOLOGÍA CONSULTA", period: "6 MESES P/E" },
            { name: "MASTOLOGÍA CIRUGÍAS ELECTIVAS*", period: "NO APLICA" },
            { name: "DERMATOLOGÍA ESTÉTICA", period: "3 MESES P/E" },
            { name: "SERVICIO DE PELUQUERÍA Y MANICURE", period: "SIN P/E" },
            { name: "CONSULTAS NEUROCIRUGÍA / NEUROLOGÍA PEDIÁTRICA*", period: "1 AÑO P/E" },
            { name: "NEUROCIRUGÍA EMERGENCIA: CURA Y PLASTIA DE HERIDAS", period: "NO APLICA" },
            { name: "CONSULTAS: PSICOPEDAGOGÍA/ HEMATOLOGÍA NEFROLOGÍA/ OFTALMOLOGÍA*", period: "3 MESES P/E" }
        ]
    },
    {
        id: 'diamante-new',
        name: 'Diamante New',
        ageRange: '2 meses a 59 años',
        annualCoverage: 65000,
        monthlyCost: 42,
        color: '#f36f21',
        features: [
            { name: "HOSPITALIZACION", period: "3 MESES P/E" },
            { name: "UCI", period: "6 MESES P/E" },
            { name: "CIRUGIA ELECTIVAS*", period: "1 AÑO P/E" },
            { name: "CIRUGIAS DE EMERGENCIA*", period: "SIN P/E" },
            { name: "EMBARAZO", period: "6 MESES P/E" },
            { name: "SERVICIO DE EMERGENCIAS", period: "SIN P/E" },
            { name: "CONSULTAS BÁSICAS", period: "SIN P/E" },
            { name: "CONSULTAS ESPECIALIZADAS", period: "SIN P/E" },
            { name: "SERVICIO DE ODONTOLOGIA", period: "SIN P/E" },
            { name: "RAYOS X DE EMERGENCIA", period: "SIN P/E" },
            { name: "RAYOS X", period: "SIN P/E" },
            { name: "MAMOGRAFIA*", period: "3 MESES P/E" },
            { name: "TOMOGRAFIAS EMERGENCIA", period: "3 MESES P/E" },
            { name: "LABORATORIOS EMERGENCIA", period: "SIN P/E" },
            { name: "LABORATORIOS BÁSICOS", period: "SIN P/E" },
            { name: "LABORATORIO ESPECIALES", period: "SIN P/E" },
            { name: "ECOGRAMAS EMERGENCIA", period: "SIN P/E" },
            { name: "ECOGRAMAS BÁSICOS", period: "SIN P/E" },
            { name: "ECOGRAMA ESPECIAL", period: "SIN P/E" },
            { name: "ELECTROCARDIOGRAMA", period: "SIN P/E" },
            { name: "ECOCARDIOGRAMAS */MAPA / HOLTER", period: "SIN P/E" },
            { name: "MASTOLOGÍA CONSULTA", period: "3 MESES P/E" },
            { name: "MASTOLOGÍA CIRUGÍAS ELECTIVAS*", period: "1 AÑO P/E" },
            { name: "DERMATOLOGÍA ESTÉTICA", period: "SIN P/E" },
            { name: "SERVICIO DE PELUQUERÍA Y MANICURE", period: "SIN P/E" },
            { name: "CONSULTAS NEUROCIRUGÍA / NEUROLOGÍA PEDIÁTRICA*", period: "3 MESES P/E" },
            { name: "NEUROCIRUGÍA EMERGENCIA: CURA Y PLASTIA DE HERIDAS", period: "SIN P/E" },
            { name: "CONSULTAS: PSICOPEDAGOGÍA/ HEMATOLOGÍA NEFROLOGÍA/ OFTALMOLOGÍA*", period: "SIN P/E" }
        ]
    },
    {
        id: 'zafiro-new',
        name: 'Zafiro New',
        ageRange: '2 meses a 59 años',
        annualCoverage: 120000,
        monthlyCost: 85,
        costDetail: 'Costo mensual por 4 familiares',
        color: '#3366ff',
        features: [
            { name: "HOSPITALIZACION", period: "3 MESES P/E" },
            { name: "UCI", period: "1 AÑO P/E" },
            { name: "CIRUGIA ELECTIVAS*", period: "1 AÑO P/E" },
            { name: "CIRUGIAS DE EMERGENCIA*", period: "SIN P/E" },
            { name: "EMBARAZO", period: "1 AÑO P/E" },
            { name: "SERVICIO DE EMERGENCIAS", period: "SIN P/E" },
            { name: "CONSULTAS BÁSICAS", period: "SIN P/E" },
            { name: "CONSULTAS ESPECIALIZADAS", period: "SIN P/E" },
            { name: "SERVICIO DE ODONTOLOGIA", period: "3 MESES P/E" },
            { name: "RAYOS X DE EMERGENCIA", period: "SIN P/E" },
            { name: "RAYOS X", period: "SIN P/E" },
            { name: "MAMOGRAFIA*", period: "3 MESES P/E" },
            { name: "TOMOGRAFIAS EMERGENCIA", period: "3 MESES P/E" },
            { name: "LABORATORIOS EMERGENCIA", period: "SIN P/E" },
            { name: "LABORATORIOS BÁSICOS", period: "SIN P/E" },
            { name: "LABORATORIO ESPECIALES", period: "3 MESES P/E" },
            { name: "ECOGRAMAS EMERGENCIA", period: "SIN P/E" },
            { name: "ECOGRAMAS BÁSICOS", period: "SIN P/E" },
            { name: "ECOGRAMA ESPECIAL", period: "3 MESES P/E" },
            { name: "ELECTROCARDIOGRAMA", period: "SIN P/E" },
            { name: "ECOCARDIOGRAMAS */MAPA / HOLTER", period: "3 MESES P/E" },
            { name: "MASTOLOGÍA CONSULTA", period: "NO APLICA" },
            { name: "MASTOLOGÍA CIRUGÍAS ELECTIVAS*", period: "NO APLICA" },
            { name: "DERMATOLOGÍA ESTÉTICA", period: "3 MESES P/E" },
            { name: "SERVICIO DE PELUQUERÍA Y MANICURE", period: "SIN P/E" },
            { name: "CONSULTAS NEUROCIRUGÍA / NEUROLOGÍA PEDIÁTRICA*", period: "NO APLICA" },
            { name: "NEUROCIRUGÍA EMERGENCIA: CURA Y PLASTIA DE HERIDAS", period: "NO APLICA" },
            { name: "CONSULTAS: PSICOPEDAGOGÍA/ HEMATOLOGÍA NEFROLOGÍA/ OFTALMOLOGÍA*", period: "3 MESES P/E" }
        ]
    }
];

export const doradoPlans = [
    {
        name: 'New Dorado Etapa 1',
        ageRange: '60 a 80 años',
        annualCoverage: 20000,
        monthlyCost: 18,
        detail: 'Solo Consultas'
    },
    {
        name: 'New Dorado Etapa 2',
        ageRange: '60 a 80 años',
        annualCoverage: 20000,
        monthlyCost: 35,
        detail: 'Servicios Ambulatorios'
    },
    {
        name: 'New Dorado Etapa 3',
        ageRange: '60 a 80 años',
        annualCoverage: 20000,
        monthlyCost: 66,
        detail: 'Todos los servicios'
    }
];
