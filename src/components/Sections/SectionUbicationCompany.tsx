"use client";

import { motion } from "framer-motion";
import { Card, CardFooter } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SectionUbicationCompany() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary font-bold uppercase tracking-widest text-sm">Visítanos</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Nuestra Ubicación</h2>
        <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-1"
        >
          <Card className="border-none glass shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Oficinas Generales</h3>
              <p className="text-muted-foreground leading-relaxed font-light mb-8">
                Av. Tulancingo, No. 103, San Miguel Vindhó, Tula de Allende Hgo. México.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold" asChild>
                <a href="https://maps.app.goo.gl/5kHjFvCHqdfyHYWb8" target="_blank" rel="noopener noreferrer">
                  <Navigation className="mr-2 w-4 h-4" /> ¿Cómo llegar a la Cooperativa Juárez?
                </a>
              </Button>
            </div>
            <CardFooter className="p-4 text-center">
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Horario: L-V 8:00 - 18:00</span>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="border-none glass shadow-2xl overflow-hidden h-[500px] py-0">
            <iframe
              title="Mapa Cooperativa Juárez"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9808539892226!2d-99.32556482546274!3d19.992303726280654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d22d7aafd9a757%3A0x63e69a5fa5042b15!2sSociedad%20Cooperativa%20de%20Producci%C3%B3n%20de%20Servicios%20de%20Ju%C3%A1rez%20S.C.L.!5e0!3m2!1ses!2smx!4v1727383932347!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="brightness-90 hover:grayscale-0 transition-all duration-500"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
