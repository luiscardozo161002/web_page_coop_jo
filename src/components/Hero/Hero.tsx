import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, 
              color-mix(in oklch, var(--background), transparent 15%), 
              color-mix(in oklch, var(--background), transparent 40%)
            ), url('https://i.ibb.co/3mMsWzb8/Gemini-Generated-Image-xduqbaxduqbaxduq.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(var(--primary-rgb),0.1),transparent_80%)]" />
        <div className="absolute inset-0 bg-dots opacity-10" />
      </motion.div>

      <section className="relative z-10 mx-auto px-6 pt-0 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 mt-10 text-sm font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full backdrop-blur-sm">
            Desde 1962 Construyendo el Futuro
          </span>

          <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 drop-shadow-sm text-primary text-shadow-lg">
            Sociedad <span className="text-blue-950 dark:text-blue-700">Cooperativa</span> <br />
            <span className="text-blue-950 dark:text-blue-700">Juárez<span className="text-accent"> SCL</span></span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 font-medium mb-7 leading-relaxed drop-shadow-md">
            Líderes en autotransporte, barrenación y servicios para la industria de la construcción. Excelencia operativa respaldada por décadas de experiencia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-7 text-lg rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
              <Link to="/servicios">Conoce Nuestros Servicios</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-blue-950 px-8 py-7 text-lg rounded-2xl border-2 hover:bg-secondary/10 transition-all text-white dark:text-white dark:bg-blue-700">
              <Link to="/contacto">Contáctanos hoy</Link>
            </Button>
          </div>
        </motion.div>

        {/* Quick Contact Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 pt-12 border-t border-foreground/10 max-w-5xl mx-auto"
        >
          <a href="tel:+527737850498" className="flex items-center justify-center gap-3 text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer group">
            <Phone className="size-5 text-primary transition-transform group-hover:scale-110" />
            <span>+52 (773) 785-0498</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fabiola.rh.hgo@cooperativajuarez.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer group lg:col-span-1 sm:col-span-2 lg:order-none order-first"
          >
            <Mail className="size-5 text-primary transition-transform group-hover:scale-110" />
            <span className="break-all">fabiola.rh.hgo@cooperativajuarez.com.mx</span>
          </a>
          <a href="https://maps.app.goo.gl/5kHjFvCHqdfyHYWb8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer group">
            <MapPin className="size-5 text-primary transition-transform group-hover:scale-110" />
            <span>Tula de Allende, Hgo.</span>
          </a>
        </motion.div>

      </section>
    </main>
  );
}
