import Link from "next/link";
import {
  SectionHeader,
  StatCard,
  SurfaceCard,
  StatusBadge,
  ProgressBar,
  SectionTitle,
} from "@/components/ui";
import {
  alerts,
  executiveMetrics,
  recentActivity,
  workAreas,
  projects,
  teamMembers,
} from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-panel__content">
          <div className="hero-panel__eyebrow">Central operacional</div>
          <h1 className="hero-panel__title">
            Visualize prioridades, responsáveis e entregas em um só lugar.
          </h1>
          <p className="hero-panel__description">
            Uma visão executiva e operacional para acompanhar projetos, tarefas,
            equipe e decisões com rapidez.
          </p>

          <div className="hero-panel__actions">
            <Link href="/tarefas" className="btn btn--primary">
              Abrir tarefas
            </Link>
            <Link href="/projetos" className="btn btn--secondary">
              Ver projetos
            </Link>
          </div>
        </div>

        <div className="hero-panel__summary">
          <SurfaceCard>
            <SectionTitle
              eyebrow="Resumo do momento"
              title="Panorama do sistema"
              description="Leitura rápida do que exige atenção agora."
            />
            <div className="mini-grid">
              {executiveMetrics.slice(0, 4).map((item) => (
                <div key={item.label} className="mini-metric">
                  <span className="mini-metric__label">{item.label}</span>
                  <strong className="mini-metric__value">{item.value}</strong>
                  <span className="mini-metric__delta">{item.delta}</span>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </section>

      <section className="section-block">
        <SectionHeader
          eyebrow="Radar do dia"
          title="Alertas e pontos de decisão"
          description="Tudo o que está perto do prazo, com risco ou esperando ação."
          action={
            <Link href="/relatorios" className="btn btn--ghost">
              Ver análise
            </Link>
          }
        />
        <div className="grid grid-4">
          {alerts.map((alert) => (
            <SurfaceCard key={alert.title} className="alert-card">
              <div className="alert-card__top">
                <StatusBadge tone={alert.tone}>{alert.status}</StatusBadge>
                <span className="alert-card__count">{alert.count}</span>
              </div>
              <h3 className="card-title">{alert.title}</h3>
              <p className="card-description">{alert.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeader
          eyebrow="Mapa do trabalho"
          title="Áreas principais do sistema"
          description="Módulos clicáveis para navegar pela operação."
        />
        <div className="grid grid-4">
          {workAreas.map((area) => (
            <Link key={area.href} href={area.href} className="tile-link">
              <SurfaceCard className="tile-card">
                <div className="tile-card__icon">{area.icon}</div>
                <h3 className="card-title">{area.title}</h3>
                <p className="card-description">{area.description}</p>
                <span className="tile-card__meta">{area.meta}</span>
              </SurfaceCard>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid grid-2-1">
        <SurfaceCard>
          <SectionTitle
            eyebrow="Painel vivo"
            title="Atividade recente"
            description="Últimas movimentações do time e dos projetos."
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

        <SurfaceCard>
          <SectionTitle
            eyebrow="Linha de decisão"
            title="Indicadores rápidos"
            description="Sinais para tomada de decisão imediata."
          />
          <div className="decision-list">
            {executiveMetrics.slice(4).map((item) => (
              <StatCard
                key={item.label}
                label={item.label}
                value={item.value}
                delta={item.delta}
              />
            ))}
          </div>
        </SurfaceCard>
      </section>

      <section className="grid grid-2">
        <SurfaceCard>
          <SectionTitle
            eyebrow="Projetos em destaque"
            title="Saúde dos projetos"
            description="Status, progresso e líder responsável."
          />
          <div className="project-list">
            {projects.slice(0, 3).map((project) => (
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
          <SectionTitle
            eyebrow="Equipe"
            title="Responsáveis com maior carga"
            description="Quem está puxando as entregas mais críticas."
          />
          <div className="team-list">
            {teamMembers.slice(0, 4).map((member) => (
              <div key={member.name} className="team-item">
                <div className="avatar">{member.initials}</div>
                <div>
                  <h3 className="team-item__name">{member.name}</h3>
                  <p className="team-item__meta">
                    {member.role} • {member.activeTasks} tarefas ativas
                  </p>
                </div>
                <StatusBadge tone={member.tone}>{member.capacity}</StatusBadge>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </section>
    </div>
  );
}