"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function SectionContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = encodeURIComponent(
            `Hola, *Sociedad Cooperativa De Producción de Servicios Juárez SCL*\n\n` +
            `Me comunico con el departamento de RH, brindando mis datos para que se pongan en contacto conmigo.\n\n` +
            ` *Nombre:* ${formData.name}\n` +
            ` *Email:* ${formData.email}\n` +
            ` *Asunto:* ${formData.subject}\n\n` +
            ` *Mensaje:*\n${formData.message}`
        );
        const whatsappNumber = "5215574354927";
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    };

    return (
        <section id="contacto" className="py-24 px-6 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Contáctanos</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">Estamos para servirte</h2>
                <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold mb-6">Información de Contacto</h3>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                                <MapPin className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Dirección</p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Av.+Tulancingo,+No.+103,+San+Miguel+Vindhó,+Tula+de+Allende+Hgo."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                                >
                                    Av. Tulancingo, No. 103, San Miguel Vindhó, Tula de Allende Hgo.
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                                <Phone className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Teléfonos</p>
                                <a
                                    href="tel:+525574354927"
                                    className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                                >
                                    +52 (557) 435-4927
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                                <Mail className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Correo Electrónico</p>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=fabiola.rh.hgo@cooperativajuarez.com.mx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground text-sm hover:text-primary transition-colors hover:underline underline-offset-4 break-all"
                                >
                                    fabiola.rh.hgo@cooperativajuarez.com.mx
                                </a>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border/50">
                            <p className="font-bold mb-4 uppercase tracking-wider text-xs text-muted-foreground">Síguenos en redes sociales</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.facebook.com/coopjuarez?locale=es_LA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110">
                                        <Facebook className="w-5 h-5" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="glass border border-primary/10 shadow-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16" />
                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">Nombre Completo</label>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ej. Juan Pérez"
                                        required
                                        className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">Correo Electrónico</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="juan@ejemplo.com"
                                        required
                                        className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Asunto</label>
                                <Input
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="¿En qué podemos ayudarte?"
                                    required
                                    className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Mensaje</label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Escribe tu mensaje aquí..."
                                    required
                                    className="min-h-[150px] bg-white/5 border-white/10 focus:border-primary/50 transition-colors resize-none"
                                />
                            </div>
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-7 text-lg rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group">
                                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                Enviar por WhatsApp
                            </Button>
                        </form>
                    </Card>
                    <p className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Respuesta garantizada vía WhatsApp
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
