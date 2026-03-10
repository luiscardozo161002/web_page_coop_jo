import { motion } from "framer-motion";
import { CardContent, CardTitle, Card, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Users, Shield, Heart, Scale, GraduationCap, Award } from "lucide-react";

const valuesCompany = [
  {
    icon: Award,
    title: "Compromiso",
    description: "Actuamos con responsabilidad y dedicación total en cada proyecto, honrando nuestra palabra.",
    bgColor: "bg-red-500/10",
    iconColor: "text-red-600"
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    description: "El trabajo en equipo es nuestra mayor fortaleza; unimos talentos para superar cualquier desafío industrial.",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Responsabilidad",
    description: "Asumimos con integridad las consecuencias de nuestras decisiones y el impacto en nuestro entorno.",
  },
  {
    icon: Heart,
    title: "Solidaridad",
    description: "Nuestra base cooperativista nos impulsa a apoyar a nuestra comunidad y a cada uno de nuestros socios.",
  },
  {
    icon: Scale,
    title: "Respeto",
    description: "Fomentamos un ambiente de dignidad, valorando la diversidad y las ideas de todos nuestros integrantes.",
  },
  {
    icon: GraduationCap,
    title: "Disciplina",
    description: "La constancia y el orden son las claves que nos permiten entregar resultados de clase mundial día tras día.",
  },
];

export default function SectionValuesCompany() {
  return (
    <section className="py-24 px-6 mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary font-bold uppercase tracking-widest text-sm">Nuestro ADN</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Valores que nos Definen</h2>
        <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Ideology Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 glass p-8 md:p-12 rounded-[2rem] border-primary/10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Users className="text-white w-10 h-10" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6">Ideología de Trabajo</h3>
            <p className="text-xl text-muted-foreground font-light leading-relaxed text-justify">
              "El trabajo en equipo es el combustible que permite que gente común logre resultados poco comunes. En Cooperativa Juárez, la unión no es solo un valor, es nuestra ventaja competitiva. Juntos, transformamos desafíos en hitos industriales."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/10 p-6 rounded-2xl text-center">
              <span className="block text-3xl font-black text-primary mb-1">97+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Fundadores</span>
            </div>
            <div className="bg-secondary/10 p-6 rounded-2xl text-center">
              <span className="block text-3xl font-black text-secondary mb-1">100%</span>
              <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Compromiso</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Values Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {valuesCompany.map((value, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-none glass hover:bg-white dark:hover:bg-card transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="relative translate-y-0 left-0 hover:bg-primary hover:text-white" />
            <CarouselNext className="relative translate-y-0 right-0 hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </motion.div>

      <div className="mt-16 text-center">
        <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground opacity-20">
          Documento Interno: CJ-AN-03 Rev.0 | Gestión de Valores
        </span>
      </div>
    </section>
  );
}
