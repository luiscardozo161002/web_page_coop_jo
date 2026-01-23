export default function SectionAboutCompany() {
  return (
    <section className="mx-auto flex flex-col gap-5 px-10 md:px-45 p-5 text-gray-900 dark:text-zinc-300" >
      <h3 className="text-2xl md:text-4xl font-light"><strong>Acerca de Cooperativa Juárez</strong></h3>
      <p className="text- md:text-lg text-justify font-extralight">
        La Sociedad Cooperativa de Producción de Servicios Juárez S.C.L. se
        originó en 1962, cuando 97 trabajadores unieron sus esfuerzos para crear
        una organización enfocada en el crecimiento laboral y personal. Desde
        entonces, hemos evolucionado para convertirnos en un referente en el
        autotransporte local de materiales de construcción, siempre
        comprometidos con la calidad y la satisfacción de nuestros clientes.
      </p>
      <img className="border-white border-2 rounded-sm" src="https://i.ibb.co/vCQphDyW/fondo-cpjz.png" alt="Fondo de la empresa Sociedad Cooperativa Juárez SCL" />
    </section>
  )
}

