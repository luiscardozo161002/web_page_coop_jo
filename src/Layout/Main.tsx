"use client"

import ArticleInfoHistoryCompany from "@/components/Articles/ArticleInfoHistoryCompany";
import ArticleInfoCompanyValues from "@/components/Articles/ArticleInfoCompanyValues";

export default function MainLayout() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b">
      <ArticleInfoHistoryCompany />
      <ArticleInfoCompanyValues />
    </main>
  );
}


