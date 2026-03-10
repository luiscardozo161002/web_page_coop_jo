import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, Phone, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const affiliates = [
    {
        name: "Transportes Hidro Hidalguenses S.A. DE C.V.",
        date: "19 de Junio, 1962",
        address: "Av. Tulancingo, No. 103, San Miguel Vindhó, Tula de Allende, Hgo.",
        phone: "773 137 9269",
        activity: "Autotransporte foráneo de materiales para la construcción, explotación de yacimientos, cortes y bancos de materiales.",
    },
    {
        name: "Juárez de Oriente S.A. DE C.V.",
        date: "19 de Junio, 1962",
        address: "Av. Tulancingo, No. 103, San Miguel Vindhó, Tula de Allende, Hgo.",
        phone: "55 7435 4927",
        activity: "Autotransporte foráneo de materiales para la construcción, explotación de yacimientos, cortes y bancos de materiales.",
    },
    {
        name: "Unidad Médica Integral Hidalguense S.A DE C.V.",
        date: "19 de Junio, 1962",
        address: "Av. Tulancingo, No. 103, San Miguel Vindhó, Tula de Allende, Hgo.",
        phone: "55 7435 4927",
        activity: "Hospital en Tula de Allende (Zimapan). Ofrece atención médica integral a la población y trabajadores de la cooperativa.",
    },
];

export default function SectionAffiliates() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Nuestro Grupo</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">Empresas Filiales</h2>
                <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="space-y-6">
                {affiliates.map((affiliate, index) => (
                    <motion.div
                        key={affiliate.name}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="overflow-hidden glass border-none hover:shadow-xl transition-shadow group">
                            <CardContent className="p-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                                    <div className="p-6 lg:p-8 flex flex-col justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors col-span-1 sm:col-span-2 lg:col-span-1">
                                        <Building2 className="w-10 h-10 text-primary mb-2" />
                                        <h3 className="text-xl font-bold">{affiliate.name}</h3>
                                    </div>

                                    <div className="p-6 flex items-center gap-4">
                                        <Calendar className="w-5 h-5 text-primary shrink-0" />
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-muted-foreground">Constitución</p>
                                            <p className="text-sm">{affiliate.date}</p>
                                        </div>
                                    </div>
                                    <div className="p-6 flex items-center gap-4">
                                        <MapPin className="w-5 h-5 text-primary shrink-0" />
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-muted-foreground">Dirección</p>
                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(affiliate.address)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm hover:text-primary transition-colors hover:underline"
                                            >
                                                {affiliate.address}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-6 flex items-center gap-4">
                                        <Phone className="w-5 h-5 text-primary shrink-0" />
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-muted-foreground">Teléfono</p>
                                            <a
                                                href={`tel:${affiliate.phone.replace(/\s/g, '')}`}
                                                className="text-sm hover:text-primary transition-colors hover:underline"
                                            >
                                                {affiliate.phone}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-6 flex items-center gap-4">
                                        <Briefcase className="w-5 h-5 text-primary shrink-0" />
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-muted-foreground">Actividad</p>
                                            <p className="text-sm font-medium">{affiliate.activity}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
