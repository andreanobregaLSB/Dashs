import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Flow",
  description: "Sistema de gestão",
};

const menu = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projetos", href: "/projetos" },
  { label: "Tarefas", href: "/tarefas" },
  { label: "Equipe", href: "/equipe" },
  { label: "Relatórios", href: "/relatorios" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-100 text-slate-900">
        <div className="flex min-h-screen">
          <aside className="w-72 border-r border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-6 py-6">
              <p className="text-sm font-medium text-slate-500">Sistema</p>
              <h2 className="mt-1 text-2xl font-bold">Project Flow</h2>
              <p className="mt-2 text-sm text-slate-500">
                Gestão simples e rápida
              </p>
            </div>

            <nav className="px-4 py-6">
              <div className="space-y-2">
                {menu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="mt-auto border-t border-slate-200 p-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-900">
                  Espaço do time
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  12 membros ativos no sistema
                </p>
              </div>
            </div>
          </aside>

          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}