"use client"

import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/ToogleTheme/theme-provider"
import IndexLayout from "@/Layout/Index"
import PageNotFound from "@/Layout/PageNotFound"
import HomePage from "@/Pages/HomePage"
import SectionUbicationCompany from "@/components/Sections/SectionUbicationCompany"
import SectionValuesCompany from "@/components/Sections/SectionValuesCompany"
import SectionAboutCompany from "@/components/Sections/SectionAboutCompany"
import SectionQualityPoliciesCompany from "@/components/Sections/SectionQualityPoliciesCompany"
import SectionPurposesCompany from "@/components/Sections/SectionPurposesCompany"
import SectionServices from "@/components/Sections/SectionServices"
import SectionAffiliates from "@/components/Sections/SectionAffiliates"
import SectionContact from "@/components/Sections/SectionContact"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route element={<HomePage />}>
          <Route path="/" element={<IndexLayout />} />
          <Route path="/acerca" element={<SectionAboutCompany />} />
          <Route path="/mision-y-vision" element={<SectionPurposesCompany />} />
          <Route path="/politicas-de-calidad" element={<SectionQualityPoliciesCompany />} />
          <Route path="/ubicacion" element={<SectionUbicationCompany />} />
          <Route path="/valores" element={<SectionValuesCompany />} />
          <Route path="/servicios" element={<SectionServices />} />
          <Route path="/filiales" element={<SectionAffiliates />} />
          <Route path="/contacto" element={<SectionContact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
