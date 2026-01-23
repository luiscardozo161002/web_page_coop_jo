import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SectionPurposesCompany() {
  return (
    <section className="mx-auto grid md:grid-cols-2 md:grid-rows-1 gap-5 px-10 md:px-45 p-5 text-gray-900 dark:text-zinc-300">
      <Card className="flex flex-col gap-3">
        <CardHeader>
          <CardTitle>
            <h3 className="text-2xl md:text-4xl font-light">
              <strong>Misión</strong>
            </h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-lg text-justify gap-3 font-extralight">
            En Sociedad Cooperativa de Producción de Servicios Juárez S.C.L.
            estamos comprometidos a ser una empresa líder en el ramo de
            barrenación, explotación y transporte de materia prima para la
            industria de la construcción, así como su comercialización a nivel
            nacional e internacional, asegurándonos de la satisfacción de
            nuestros clientes en base al cumplimiento de sus necesidades a
            través de un programa de mejora continua.
          </p>
        </CardContent>
        <CardFooter>
          <span className="text-sm md:text-md">CJ-AN-03 REV.0</span>
        </CardFooter>
      </Card>
      <Card className="flex flex-col gap-3">
        <CardHeader>
          <CardTitle>
            <h3 className="text-2xl md:text-4xl font-light">
              <strong>Visión</strong>
            </h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-lg text-justify gap-3 font-extralight">
            Ubicarse como una empresa líder a nivel nacional e internacional en
            los procesos relacionados con barrenación, explotación, transporte y
            comercialización de materias primas para la industria de la
            construcción, con el din de satisfacer las necesidades de nuestros
            clientes.
          </p>
        </CardContent>
        <CardFooter>
          <span className="text-sm md:text-md">CJ-AN-03 REV.0</span>
        </CardFooter>
      </Card>
    </section>
  );
}
