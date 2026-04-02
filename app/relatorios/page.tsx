import Link from "next/link";
import {
  SectionHeader,
  SurfaceCard,
  StatusBadge,
  ProgressBar,
  StatCard,
} from "@/components/ui";
import {
  alerts,
  projects,
  recentActivity,
  reportHighlights,
  reportTakeaways,
} from "@/lib/mock-data";

const warningAlerts = alerts.filter((alert) => alert.tone !== "success");

export default function RelatoriosPage() {
  return (
    <div className="page-stack">
      <section className="page-hero page-hero--compact">
        <div>
          <p className="page-hero__eyebrow">Relatórios</p>
          <h1 className="page-hero__title">Leitura executiva em poucos blocos</h1>
          <p className="page-hero__description">
            O objetivo aqui é entender tendência, risco e ação sem precisar abrir várias telas.
          </p>
        </div>
        <div className="page-hero__actions page-hero__actions--minimal">
          <button className="btn btn--secondary btn--sm" type="button">
            Filtrar período
          </button>
          <button className="btn btn--primary btn--sm" type="button">
            Exportar PDF
          </button>
        </div>
      </section>

      <section className="grid grid-4">
        {reportHighlights.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            delta={item.delta}
          />
        ))}
      </section>

      <section className="grid grid-2">
        <SurfaceCard className="report-card report-card--tall">
          <div className="tone-strip tone-strip--danger" />
          <SectionHeader
            eyebrow="Sinais-chave"
            title="O que mais pede atenção"
            description="Resumo curto dos pontos que merecem ação imediata."
          />
          <div className="report-list">
            {warningAlerts.map((alert) => (
              <div key={alert.title} className="report-list__item">
                <div>
                  <p className="report-list__title">{alert.title}</p>
                  <p className="report-list__meta">{alert.description}</p>
                </div>
                <StatusBadge tone={alert.tone}>{alert.status}</StatusBadge>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="report-card report-card--tall">
          <div className="tone-strip tone-strip--success" />
          <SectionHeader
            eyebrow="Próximas ações"
            title="O que fazer agora"
            description="Três movimentos simples para reduzir atrito."
          />
          <div className="report-card__summary">
            {reportTakeaways.map((item) => (
              <div key={item} className="filters-summary">
                <strong className="filters-summary__value">{item}</strong>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </section>

      <section className="section-block">
        <SectionHeader
          eyebrow="Tendências"
          title="Leitura por projeto"
          description="Uma camada extra para comparar andamento e risco entre as frentes principais."
        />
        <div className="grid grid-2">
          {projects.map((project) => (
            <SurfaceCard key={project.id} className="project-card">
              <div className={`tone-strip tone-strip--${project.tone}`} />
              <div className="project-card__top">
                <div>
                  <h2 className="card-title">{project.name}</h2>
                  <p className="card-description">
                    Líder: {project.owner} • Prazo: {project.deadline}
                  </p>
                </div>
                <StatusBadge tone={project.tone}>{project.status}</StatusBadge>
              </div>

              <div className="project-card__info">
                <span>Prioridade: {project.priority}</span>
                <span>Equipe: {project.teamSize} pessoas</span>
              </div>

              <ProgressBar value={project.progress} />
            </SurfaceCard>
          ))}
        </div>
      </section>

      <section className="grid grid-2">
        <SurfaceCard>
          <div className="tone-strip tone-strip--warning" />
          <SectionHeader
            eyebrow="Movimentação"
            title="Últimos eventos"
            description="Mudanças recentes que ajudam a validar o resumo executivo."
          />
          <div className="activity-list">
            {recentActivity.slice(0, 4).map((item) => (
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

        <SurfaceCard className="report-card">
          <div className="tone-strip" />
          <SectionHeader
            eyebrow="Acesso rápido"
            title="Ir para a ação"
            description="Atalhos para sair da leitura e entrar na execução."
          />
          <div className="report-actions">
            <Link href="/tarefas" className="btn btn--primary">
              Abrir tarefas
            </Link>
            <Link href="/projetos" className="btn btn--secondary">
              Ver projetos
            </Link>
            <Link href="/equipe" className="btn btn--ghost">
              Ajustar equipe
            </Link>
          </div>
        </SurfaceCard>
      </section>
    </div>
  );
}
