import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function SectionPurposesCompany() {
  return (
    <section className="py-24 px-6 mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="h-full border-none bg-gradient-to-tr from-red-300 to-red-700 text-white overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-500 rounded-[80px_0_80px_0] relative">

            {/* Background Decoration - Target SVG */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-target-icon lucide-target text-white w-[800px] h-[800px]"
              ><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
            </div>

            <CardHeader className="relative z-10">
              <div className="flex items-center justify-end mb-6">
                <span className="flex items-center gap-2">
                  <img src="https://i.ibb.co/RpVP4PP8/Logo-Coop-Juarez-SCL.png" alt="Logo de Cooperativa Juárez SCL" className="object-cover w-20 h-20 rounded-full p-2 bg-white/10" />
                </span>
              </div>
              <CardTitle>
                <h3 className="text-5xl font-black tracking-tighter mb-4">Misión</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed text-justify font-extralight">
                En <span className="text-white font-extrabold">Sociedad Cooperativa Juárez S.C.L.</span> estamos comprometidos a ser una empresa líder en barrenación, explotación y transporte de materia prima para la industria de la construcción. Nuestra meta es la satisfacción total de nuestros clientes mediante la mejora continua y la comercialización nacional e internacional.
              </p>
            </CardContent>
            <CardFooter className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">CJ-AN-03 | Referencia de Excelencia</span>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="h-full border-none bg-gradient-to-tr from-slate-400 to-blue-950 text-white overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-500 rounded-[80px_0_80px_0] relative">
            {/* Background Decoration - Eye SVG */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-eye-icon lucide-eye text-white w-[800px] h-[800px]"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            <CardHeader className="relative z-10">
              <div className="flex items-center justify-end mb-6">
                <span className="flex items-center gap-2">
                  <img src="https://i.ibb.co/RpVP4PP8/Logo-Coop-Juarez-SCL.png" alt="Logo de Cooperativa Juárez SCL" className="object-cover w-20 h-20 rounded-full p-2 bg-white/10" />
                </span>
              </div>
              <CardTitle>
                <h3 className="text-5xl font-black tracking-tighter mb-4">Visión</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed text-justify font-extralight">
                Consolidarnos como el referente indiscutible a nivel nacional e internacional en los procesos de barrenación, explotación, transporte y comercialización de materias primas para la construcción. Visualizamos un futuro de liderazgo sostenido, basado en la innovación y la plena satisfacción de las necesidades de nuestros socios estratégicos.
              </p>

            </CardContent>
            <CardFooter className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">CJ-AN-03 | Liderazgo Industrial</span>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
