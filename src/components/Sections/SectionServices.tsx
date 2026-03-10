import { motion } from "framer-motion";
import { Truck, Pickaxe, Drill, Construction, Mountain, Wrench, Package, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    {
        id: "agregados",
        title: "1. Suministro de Materiales para Construcción",
        subtitle: "Venta y entrega de agregados pétreos utilizados en obras civiles e infraestructura.",
        icon: Mountain,
        color: "bg-orange-500/10 text-orange-600",
        details: {
            label: "Materiales disponibles",
            items: ["Grava 3/4", "Screen fino", "Balastro 1\"–2\"", "Gravón 3\"", "Piedra hombre", "Base 1 1/2 a finos"]
        },
        footer: "Venta y suministro de agregados pétreos para construcción.",
        clients: ["Constructoras", "Obra pública", "Urbanización", "Caminos y carreteras"]
    },
    {
        id: "transporte",
        title: "2. Transporte y Logística para Construcción",
        subtitle: "Servicios especializados de traslado y manejo de materiales para infraestructura.",
        icon: Truck,
        color: "bg-blue-500/10 text-blue-600",
        details: {
            label: "Servicios",
            items: ["Autotransporte local de materiales", "Logística y transporte especializado"]
        },
        footer: "Incluye fletes, acarreo y movimiento de material en obra.",
        clients: ["Proyectos de construcción", "Distribución logística"]
    },
    {
        id: "maquinaria",
        title: "3. Renta de Maquinaria Pesada",
        subtitle: "Alquiler de maquinaria especializada para obra civil, minería y movimiento de tierra.",
        icon: Construction,
        color: "bg-yellow-600/10 text-yellow-700",
        details: {
            label: "Maquinaria",
            items: ["Bulldozer", "Motoniveladora", "Maquinaria para minería"]
        },
        footer: "Modalidad con o sin operador.",
    },
    {
        id: "especializados",
        title: "4. Servicios Especializados de Obra",
        subtitle: "Servicios técnicos en trabajos de preparación de terreno y operaciones de campo.",
        icon: Wrench,
        color: "bg-cyan-500/10 text-cyan-600",
        details: {
            label: "Servicios principales",
            items: ["Barrenación", "Suministro de agua potable (10k L)"]
        },
        footer: "Control de polvo, compactación y abastecimiento.",
    },
    {
        id: "canteras",
        title: "5. Explotación de Canteras",
        subtitle: "Gestión sostenible de recursos naturales para la obtención de materiales pétreos.",
        icon: Pickaxe,
        color: "bg-emerald-500/10 text-emerald-600",
        details: {
            label: "Actividades",
            items: ["Extracción de agregados", "Producción para infraestructura", "Manejo responsable"]
        },
    },
    {
        id: "fletes",
        title: "6. Fletes y Transporte de Materias Primas",
        subtitle: "Transporte especializado mediante flota adecuada para operación en obra.",
        icon: Package,
        color: "bg-rose-500/10 text-rose-600",
        details: {
            label: "Servicios de carga",
            items: ["Transporte de agregados", "Traslado de materiales", "Distribución de materias primas"]
        },
        footer: "Cobertura local y regional.",
    },
    {
        id: "barrenacion",
        title: "7. Barrenación y Explosión",
        subtitle: "Fragmentación de roca en proyectos mineros y de infraestructura.",
        icon: Drill,
        color: "bg-indigo-500/10 text-indigo-600",
        details: {
            label: "Servicios técnicos",
            items: ["Perforación para cantera", "Preparación de terreno rocoso", "Fragmentación controlada"]
        },
    },
];

export default function SectionServices() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Portafolio</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Nuestros Servicios</h2>
                <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full" />
                <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto font-light">
                    Soluciones integrales diseñadas para maximizar la eficiencia en proyectos de construcción, minería e infraestructura.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full border border-primary/50 glass shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                            <CardHeader className="pb-4">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.color}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    {service.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-medium">
                                    {service.subtitle}
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {service.details && (
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-3">
                                            {service.details.label}
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {service.details.items.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                                                    <CheckCircle2 className="size-3 text-primary shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {service.clients && (
                                    <div className="pt-2 border-t border-border/50">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-3">
                                            Clientes Típicos
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.clients.map((client) => (
                                                <span key={client} className="px-2 py-1 bg-primary/5 text-[10px] font-bold rounded uppercase tracking-tighter text-muted-foreground">
                                                    {client}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.footer && (
                                    <p className="pt-4 text-xs font-medium text-muted-foreground italic border-t border-border/50">
                                        {service.footer}
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
