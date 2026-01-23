import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <main className="relative">
      {/* sutil overlay vignetting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
      <section className="mx-auto max-w-7xl px-10 md:px-45 py-5">
        <h3 className="text-balance text-4xl font-semibold leading-tight sm:text-4xl lg:text-6xl text-start text-gray-900 dark:text-zinc-300">
          Bienvenido a{" "}
          <strong className="text-gray-800 drop-shadow-md dark:drop-shadow-2xl dark:text-zinc-200">
            Sociedad Cooperativa de Producción de Servicios Juárez SCL
          </strong>
        </h3>
        <Card className="mt-10 max-w-5xl text-gray-900 dark:text-zinc-300">
          <CardContent>
            <ul className="space-y-4 text-lg sm:text-xl">
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0" />
                <a
                  href="tel:+527737850498"
                  className="underline-offset-4 hover:underline"
                  target="_blank"
                >
                  +52 (773) 785-0498
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0" />
                <a
                  href="mailto:fabiola.rh.hgo@cooperativajuarez.com.mx"
                  className="underline-offset-4 hover:underline"
                  target="_blank"
                >
                  fabiola.rh.hgo@cooperativajuarez.com.mx
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/5kHjFvCHqdfyHYWb8"
                  className="underline-offset-4 hover:underline"
                  target="_blank"
                >
                  Av. Tulancingo, No. 103, San Miguel Vindhó, Tula de Allende
                  Hgo.
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-10 h-px w-full max-w-5xl bg-gradient-to-r from-transparent to-transparent border-b border-zinc-900/10 dark:border-zinc-700 " />
      </section>
    </main>
  );
}
