"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import { Input } from "@/components/ui/input";
//import { Textarea } from "@/components/ui/textarea";
//import { Button } from "@/components/ui/button";
//import { Label } from "@/components/ui/label";
import ContactForm from "./components/FormContact";

export default function SectionUbicationCompany() {
  return (
    <section className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-10 md:px-5 p-5 max-w-4xl text-gray-900 dark:text-zinc-300">
      {/* Ubicación */}
      <Card className="flex flex-col gap-3">
        <CardHeader>
          <CardTitle>
            <h3 className="text-2xl md:text-4xl font-light">
              <strong>Ubicación</strong>
            </h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-60 md:h-80 rounded-lg overflow-hidden">
            <iframe
              title="Mapa Cooperativa Juárez"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9808539892226!2d-99.32556482546274!3d19.992303726280654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d22d7aafd9a757%3A0x63e69a5fa5042b15!2sSociedad%20Cooperativa%20de%20Producci%C3%B3n%20de%20Servicios%20de%20Ju%C3%A1rez%20S.C.L.!5e0!3m2!1ses!2smx!4v1727383932347!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </CardContent>
      </Card>

      {/* Contáctanos 
      <Card className="flex flex-col gap-3">
        <CardHeader>
          <CardTitle>
            <h3 className="text-2xl md:text-4xl font-light">
              <strong>Contáctanos</strong>
            </h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                placeholder="Ingresa tu nombre o razón social"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingresa tu correo electrónico"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Ingresa tu número de teléfono"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                required
              />
            </div>
            <div className="flex items-start">
              <Button type="submit" className="mt-2">
                Enviar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>*/}

      <ContactForm />
    </section>
  );
}
