"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Nuevo mensaje de contacto para Cooperativa Juárez SCL:\n\n Nombre: ${form.name}\n Correo: ${form.email}\n Teléfono: ${form.phone}\n\n Mensaje:\n${form.message}`
    )
    const phone = "525574354927" // Número en formato internacional
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank")
  }

  return (
    <Card className="flex flex-col gap-3">
      <CardHeader>
        <CardTitle>
          <h3 className="text-2xl md:text-4xl font-light">
            <strong>Contáctanos</strong>
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              placeholder="Ingresa tu nombre o razón social"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Correo</Label>
            <Input
              id="email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Ingresa tu número de teléfono"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              value={form.message}
              onChange={handleChange}
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
    </Card>
  )
}
