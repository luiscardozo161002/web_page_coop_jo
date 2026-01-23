"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "../ToogleTheme/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur md:bg-gradient-to-b md:backdrop-blur border-b border-zinc-900/10 dark:border-zinc-700 md:px-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide flex items-center gap-3 text-gray-900 dark:text-zinc-300"
        >
          <img
            src="https://i.ibb.co/S7Zw0Ld9/Logo-Coop-Juarez-SCL.png"
            alt="Logo de Cooperativa Juárez SCL"
            className="w-11 sm:w-16 rounded-full border p-[0.5] bg-white object-cover"
          />
          <span className="hidden sm:block">Cooperativa Juárez SCL</span>
        </Link>

        {/* Nav */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/">Inicio</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/acerca">Acerca de</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/mision-y-vision">Misión y Visión</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/politicas-de-calidad">Políticas de Calidad</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/ubicacion">Ubicación</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/valores">Valores</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}