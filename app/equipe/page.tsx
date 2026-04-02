import {
  SectionHeader,
  SurfaceCard,
  StatusBadge,
  ProgressBar,
  StatCard,
} from "@/components/ui";
import { teamMembers } from "@/lib/mock-data";

export default function EquipePage() {
  const summary = [
    { label: "Membros ativos", value: "12", delta: "+2 este mês" },
    { label: "Carga alta", value: "4", delta: "precisam apoio" },
    { label: "Entregas da semana", value: "18", delta: "+6 concluídas" },
    { label: "Bloqueios", value: "3", delta: "1 a menos" },
  ];

  return (
    <div className="page-stack">
      <section className="page-hero page-hero--compact">
        <div>
          <p className="page-hero__eyebrow">Equipe</p>
          <h1 className="page-hero__title">Carga, capacidade e performance</h1>
          <p className="page-hero__description">
            Veja quem está equilibrado, quem precisa de ajuda e onde redistribuir trabalho.
          </p>
        </div>
        <div className="page-hero__actions page-hero__actions--minimal">
          <button className="btn btn--secondary btn--sm" type="button">
            Ver capacidade
          </button>
          <button className="btn btn--primary btn--sm" type="button">
            Adicionar membro
          </button>
        </div>
      </section>

      <section className="grid grid-4">
        {summary.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            delta={item.delta}
          />
        ))}
      </section>

      <section className="section-block">
        <SectionHeader
          eyebrow="Mapa da equipe"
          title="Pessoas em foco"
          description="Capacidade, tarefas ativas e desempenho por responsável."
        />
        <div className="grid grid-2">
          {teamMembers.map((member) => (
            <SurfaceCard key={member.name} className="member-card">
              <div className={`tone-strip tone-strip--${member.tone}`} />
              <div className="member-card__top">
                <div className="member-card__identity">
                  <div className="avatar avatar--lg">{member.initials}</div>
                  <div>
                    <h2 className="card-title">{member.name}</h2>
                    <p className="card-description">{member.role}</p>
                  </div>
                </div>
                <StatusBadge tone={member.tone}>{member.capacity}</StatusBadge>
              </div>

              <div className="member-card__meta">
                <span>{member.activeTasks} tarefas ativas</span>
                <span>{member.projects} projetos</span>
              </div>

              <ProgressBar value={member.performance} />
            </SurfaceCard>
          ))}
        </div>
      </section>
    </div>
  );
}
