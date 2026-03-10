import { motion } from "framer-motion";

export default function SectionQualityPoliciesCompany() {
  return (
    <section className="py-24 px-6 mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group order-2 lg:order-1"
        >
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
          <img
            className="relative rounded-2xl shadow-2xl border-2 border-white/20 object-cover w-full h-[500px] filter brightness-100 contrast-100"
            src="https://i.ibb.co/ynZnvvXy/85173087-328787701343544-8616399484693250048-n.jpg"
            alt=" Cooperativa Juárez SCL"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Compromiso Total</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Políticas de <span className="text-primary">Calidad</span>
          </h2>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground font-light leading-loose text-justify">
            <p>
              En <span className="text-primary font-bold">Sociedad Cooperativa de Producción de Servicios Juárez S.C.L.</span> estamos profundamente comprometidos a satisfacer las necesidades más exigentes de nuestros clientes.
            </p>
            <p className="mt-6">
              Logramos esto mediante el control riguroso de cada proceso: desde la barrenación y explotación de yacimientos hasta el transporte de carga pesada. Nuestro Sistema de Gestión de Calidad nos asegura el cumplimiento de objetivos internacionales y requisitos legales, garantizando la excelencia en cada entrega.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Estándar CJ-AN-03</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Revisión 0.0</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
