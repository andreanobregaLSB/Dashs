"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menu = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Diretoria Acadêmica", href: "/diretoria-academica" },
  { label: "Projetos", href: "/projetos" },
  { label: "Tarefas", href: "/tarefas" },
  { label: "Equipe", href: "/equipe" },
  { label: "Relatórios", href: "/relatorios" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("sidebar-collapsed", collapsed);
    return () => {
      document.body.classList.remove("sidebar-collapsed");
    };
  }, [collapsed]);

  const handleCloseMobile = () => setOpen(false);

  return (
    <>
      <header className="mobile-topbar">
        <div>
          <p className="mobile-topbar__eyebrow">Sistema</p>
          <h1 className="mobile-topbar__title">Project Flow</h1>
        </div>

        <button
          type="button"
          className="btn btn--ghost btn--sm"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </header>

      <button
        type="button"
        className={`sidebar-reopen ${collapsed ? "sidebar-reopen--visible" : ""}`}
        onClick={() => setCollapsed(false)}
        aria-label="Abrir barra lateral"
      >
        ☰
      </button>

      <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
        <div className="sidebar__topbar">
          <div className="sidebar__brand">
            <p className="sidebar__eyebrow">Sistema</p>
            <h2 className="sidebar__title">Project Flow</h2>
            <p className="sidebar__description">
              Operação, equipe e entrega em um só lugar.
            </p>
          </div>

          <button
            type="button"
            className="sidebar__collapse-btn"
            onClick={() => setCollapsed(true)}
            aria-label="Fechar barra lateral"
          >
            ←
          </button>
        </div>

        <nav className="sidebar__nav">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleCloseMobile}
                className={`sidebar__link ${isActive ? "sidebar__link--active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__footer-card">
            <span className="sidebar__footer-label">Espaço do time</span>
            <strong className="sidebar__footer-value">
              12 membros ativos no sistema
            </strong>
            <span className="sidebar__footer-subtitle">
              4 entregas críticas exigindo atenção hoje.
            </span>
          </div>
        </div>
      </aside>

      {open ? (
        <button
          type="button"
          className="sidebar-backdrop"
          onClick={handleCloseMobile}
          aria-label="Fechar menu"
        />
      ) : null}
    </>
  );
}