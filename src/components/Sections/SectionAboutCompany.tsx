import { motion } from "framer-motion";

export default function SectionAboutCompany() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Quiénes Somos</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            Excelencia y Compromiso desde <span className="text-primary">1962</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-justify font-light">
            La Sociedad Cooperativa de Producción de Servicios Juárez S.C.L. se
            originó en 1962, cuando un grupo visionario de 97 trabajadores unieron sus esfuerzos para crear
            una organización enfocada en el crecimiento laboral y personal de sus integrantes y la comunidad.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify font-light">
            Desde entonces, hemos evolucionado para convertirnos en un referente nacional en el
            autotransporte de materiales de construcción, barrenación y explotación minera, siempre
            fieles a nuestros valores fundacionales de solidaridad y mejora continua.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Sombra redonda profesional con resplandor suave */}
          <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/35 transition-all duration-700" />

          <img
            className="relative rounded-full shadow-2xl border-4 border-white/10 object-cover w-full transition-transform duration-500 group-hover:scale-[1.03] filter brightness-120 contrast-130"
            src="https://i.ibb.co/RpVP4PP8/Logo-Coop-Juarez-SCL.png"
            alt="Logo de la Sociedad Cooperativa Juárez SCL"
          />
        </motion.div>
      </div>

      <motion.div
        className="mt-24 pt-16 border-t border-white/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-bold mb-12 text-center tracking-tight">Nuestra Historia</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            <img
              src="https://i.ibb.co/TBDYDzPp/15.jpg"
              alt="Historia de la Cooperativa"
              className="relative rounded-2xl shadow-2xl border-2 border-white/10 object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-[1.02] filter brightness-105 contrast-150"
            />
          </motion.div>

          <div className="prose prose-lg dark:prose-invert text-muted-foreground font-light leading-relaxed text-justify">
            <p>
              A lo largo de más de seis décadas, nuestra cooperativa ha superado desafíos y transformado el paisaje industrial de la región. Lo que comenzó como un sueño de unión laboral, hoy es una estructura corporativa sólida que genera cientos de empleos y contribuye al desarrollo de infraestructura en todo México.
            </p>
            <p className="mt-6">
              Cada kilómetro recorrido por nuestras unidades y cada tonelada de material procesado es testimonio de la disciplina y el esfuerzo colectivo que nos define. Hoy, miramos hacia el futuro con la misma pasión que nuestros fundadores, integrando nuevas tecnologías y procesos sostenibles para seguir liderando el mercado.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
