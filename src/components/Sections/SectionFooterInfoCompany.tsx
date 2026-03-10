import { Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function SectionFooterInfoCompany() {
  return (
    <footer className="relative w-full mt-12 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: `linear-gradient(to bottom, color-mix(in oklch, var(--background), transparent 20%), color-mix(in oklch, var(--background), transparent 50%)), url('https://i.ibb.co/5xS27XMW/1.jpg')`
        }}
      />

      <div className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-12 py-16 border-t border-border backdrop-blur-[2px]">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold tracking-tight text-foreground border-b border-primary/20 pb-2 w-fit">
            Contáctenos
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
            <li className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <a
                href="https://maps.app.goo.gl/5kHjFvCHqdfyHYWb8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors leading-relaxed"
              >
                Sociedad Cooperativa de Producción de Servicios de Juárez
                S.C.L. Miguel Hidalgo 1, San Miguel Vindhó, 42842 Tula de
                Allende, Hgo.
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:+527737850498" className="hover:text-primary transition-colors">
                +52 (773) 785-0498
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:fabiola.rh.hgo@cooperativajuarez.com.mx" className="hover:text-primary transition-colors truncate">
                fabiola.rh.hgo@cooperativajuarez.com.mx
              </a>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold tracking-tight text-foreground border-b border-primary/20 pb-2 w-fit">
            Horario de Atención
          </h3>
          <div className="flex gap-4 items-start text-sm text-muted-foreground">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Lunes a Viernes</p>
              <p>8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold tracking-tight text-foreground border-b border-primary/20 pb-2 w-fit">
            Redes Sociales
          </h3>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Mantente conectado con nosotros a través de nuestras plataformas digitales.
            </p>
            <a
              href="https://www.facebook.com/coopjuarez?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </div>
              @coopjuarez
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-20 w-full py-8 px-6 border-t border-border/50 text-center backdrop-blur-[2.5px] bg-gray-100/10 dark:bg-gray-900/10">
        <p className="text-xs font-semibold text-black/50 md:text-wrap dark:text-white/900">
          Copyright © {new Date().getFullYear()} Sociedad
          Cooperativa de Producción de Servicios Juárez S.C.L. <span className="hidden sm:inline">|</span> <br className="sm:hidden" /> Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}

