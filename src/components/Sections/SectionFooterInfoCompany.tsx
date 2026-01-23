import { Facebook } from "lucide-react";

export default function SectionFooterInfoCompany() {
  return (
    <>
      <section className="mx-auto grid md:grid-cols-3 md:grid-rows-1 gap-3 px-10 md:px-45 pb-5 text-gray-900 dark:text-zinc-300">
        <section className="flex flex-col gap-3 md:border md:border-gray-200 p-3 rounded-lg dark:border-zinc-700">
          <h3 className="text-3xl font-extralight text-center">
            <strong>Contáctenos</strong>
          </h3>
          <div>
            <ul className="flex flex-col gap-3 text-xs md:text-md font-light text-center">
              <li className="gap-3">
                <strong>Dirección:</strong>{" "}
                <a href="https://maps.app.goo.gl/5kHjFvCHqdfyHYWb8">
                  Sociedad Cooperativa de Producción de Servicios de Juárez
                  S.C.L. Miguel Hidalgo 1, San Miguel Vindhó, 42842 Tula de
                  Allende, Hgo.
                </a>
              </li>
              <li className="gap-3">
                <strong>Teléfono:</strong>{" "}
                <a href="tel:+527737850498">+52 (773) 785-0498</a>
              </li>
              <li className="gap-3" >
                <strong>Correo Electrónico:</strong>{" "}
                <a href="mailto:fabiola.rh.hgo@cooperativajuarez.com.mx" className="break-all">
                  fabiola.rh.hgo@cooperativajuarez.com.mx
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col gap-3 md:border md:border-gray-200 p-3 rounded-lg dark:border-zinc-700">
          <h3 className="text-3xl font-extralight text-center">
            <strong>Horario de Atención</strong>
          </h3>
            <p className="text-xs md:text-md font-light text-center">
              De Lunes a Viernes de 8:00 a 16:00 hrs.
            </p>
        </section>
        <section className="flex flex-col gap-3 md:border md:border-gray-200 p-3 rounded-lg dark:border-zinc-700">
          <h3 className="text-3xl font-extralight text-center">
            <strong>Redes Sociales</strong>
          </h3>
          <div>
            <p className="text-xs font-light text-center gap-3">
              Siguenos en:{" "}
              <a href="https://www.facebook.com/coopjuarez?locale=es_LA">
                Facebook{" "}
                <Facebook className="inline text-blue-500 dark:text-blue-400" />
                @coopjuarez
              </a>
            </p>
          </div>
        </section>
      </section>
      <section className="mx-auto w-full flex items-center justify-center gap-5 px-10 md:px-45 pb-5 text-gray-900 dark:text-zinc-300">
        <span>
          <p className="text-xs md:text-md font-light text-center gap-3">
            <strong>Copyright © {new Date().getFullYear()}</strong> Sociedad
            Cooperativa de Producción de Servicios Juárez S.C.L. Todos los
            derechos reservados.
          </p>
        </span>
      </section>
    </>
  );
}
