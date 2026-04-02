import Link from "next/link";
import {
  SectionHeader,
  StatCard,
  SurfaceCard,
  StatusBadge,
  ProgressBar,
  SectionTitle,
} from "@/components/ui";
import { executiveMetrics, projects, recentActivity } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="page-stack">
      <section className="page-hero page-hero--compact">
        <div>
          <p className="page-hero__eyebrow">Dashboard</p>
          <h1 className="page-hero__title">Visão executiva da operação</h1>
          <p className="page-hero__description">
            Um recorte curto para entender saúde, risco e próximos movimentos.
          </p>
        </div>

        <div className="page-hero__actions page-hero__actions--minimal">
          <Link href="/relatorios" className="btn btn--secondary btn--sm">
            Abrir relatórios
          </Link>
          <Link href="/tarefas" className="btn btn--primary btn--sm">
            Ver tarefas
          </Link>
        </div>
      </section>

      <section className="grid grid-4">
        {executiveMetrics.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            delta={item.delta}
          />
        ))}
      </section>

      <section className="grid grid-2-1">
        <SurfaceCard>
          <div className="tone-strip" />
          <SectionHeader
            eyebrow="Projetos"
            title="Carteira ativa"
            description="Projeto, prazo e progresso sem ruído extra."
          />
          <div className="project-list">
            {projects.map((project) => (
              <div key={project.id} className="project-row">
                <div className="project-row__header">
                  <div>
                    <h3 className="project-row__title">{project.name}</h3>
                    <p className="project-row__meta">
                      Líder: {project.owner} • Prazo: {project.deadline}
                    </p>
                  </div>
                  <StatusBadge tone={project.tone}>{project.status}</StatusBadge>
                </div>
                <ProgressBar value={project.progress} />
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <div className="tone-strip tone-strip--warning" />
          <SectionTitle
            eyebrow="Movimentações"
            title="Atividade recente"
            description="Mudanças que valem uma ação agora."
          />
          <div className="activity-list">
            {recentActivity.map((item) => (
              <div key={item.id} className="activity-item">
                <div className="activity-item__dot" />
                <div>
                  <p className="activity-item__title">{item.title}</p>
                  <p className="activity-item__meta">
                    {item.user} • {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </section>
    </div>
  );
}
