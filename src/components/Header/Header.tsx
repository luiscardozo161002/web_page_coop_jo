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
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Acerca de", path: "/acerca" },
    { name: "Misión y Visión", path: "/mision-y-vision" },
    { name: "Servicios", path: "/servicios" },
    { name: "Filiales", path: "/filiales" },
    { name: "Valores", path: "/valores" },
    { name: "Ubicación", path: "/ubicacion" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex  items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform hover:scale-105"
        >
          <img
            src="https://i.ibb.co/S7Zw0Ld9/Logo-Coop-Juarez-SCL.png"
            alt="Logo de Cooperativa Juárez SCL"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary bg-white object-cover shadow-sm"
          />
          <div className="flex flex-col">
            <span className="hidden xl:block text-xl font-bold tracking-tight text-foreground">
              Cooperativa Juárez SCL
            </span>
            <span className="hidden xl:block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
              Excelencia en Servicios
            </span>
          </div>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="xl:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 glass">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="w-full cursor-pointer py-2">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}