import {
  SectionHeader,
  SectionTitle,
  SurfaceCard,
  StatusBadge,
  StatCard,
} from "@/components/ui";
import { academicBoardAreas, academicBoardPeople } from "@/lib/mock-data";

const topPerformers = [...academicBoardPeople]
  .sort((a, b) => b.performance - a.performance)
  .slice(0, 5);

const riskAreas = academicBoardAreas.filter(
  (area) => area.tone === "warning" || area.tone === "danger"
);

export default function DiretoriaAcademicaPage() {
  return (
    <div className="page-stack">
      <section className="academic-command">
        <div className="academic-command__main">
          <p className="academic-command__eyebrow">Diretoria Acadêmica</p>
          <h1 className="academic-command__title">
            Mapa institucional de áreas, líderes e pressão operacional
          </h1>
          <p className="academic-command__description">
            Uma leitura de governança para identificar onde a diretoria precisa
            intervir, quais áreas estão performando melhor e onde há risco de
            atraso, sobrecarga ou baixa eficiência.
          </p>
        </div>

        <div className="academic-command__actions">
          <button type="button" className="btn btn--ghost btn--sm">
            Filtrar área
          </button>
          <button type="button" className="btn btn--primary btn--sm">
            Exportar leitura
          </button>
        </div>
      </section>

      <section className="grid grid-4">
        <StatCard label="Áreas avaliadas" value="6" delta="visão consolidada" />
        <StatCard label="Gestores ativos" value="12" delta="monitoramento semanal" />
        <StatCard label="Risco institucional" value="2" delta="áreas em atenção" />
        <StatCard label="Eficiência média" value="84%" delta="+3% no mês" />
      </section>

      <section className="grid grid-2-1">
        <SurfaceCard className="academic-zones-card">
          <SectionHeader
            eyebrow="Mapa das áreas"
            title="Onde a diretoria deve olhar primeiro"
            description="Cada bloco resume saúde, volume e pressão da área."
          />

          <div className="academic-zones-grid">
            {academicBoardAreas.map((area) => (
              <div
                key={area.name}
                className={`academic-zone academic-zone--${area.tone}`}
              >
                <div className="academic-zone__top">
                  <div>
                    <h3 className="card-title">{area.name}</h3>
                    <p className="card-description">Gestor: {area.lead}</p>
                  </div>
                  <StatusBadge tone={area.tone}>{area.status}</StatusBadge>
                </div>

                <div className="academic-zone__metrics">
                  <div>
                    <span className="academic-zone__label">Pessoas</span>
                    <strong className="academic-zone__value">{area.people}</strong>
                  </div>
                  <div>
                    <span className="academic-zone__label">Entregas</span>
                    <strong className="academic-zone__value">{area.deliveries}</strong>
                  </div>
                  <div>
                    <span className="academic-zone__label">Pendências</span>
                    <strong className="academic-zone__value">{area.pending}</strong>
                  </div>
                  <div>
                    <span className="academic-zone__label">Eficiência</span>
                    <strong className="academic-zone__value">{area.efficiency}%</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="academic-alerts-card">
          <SectionTitle
            eyebrow="Áreas críticas"
            title="Pontos de atenção imediata"
            description="Blocos com risco ou pressão elevada."
          />

          <div className="academic-alerts-list">
            {riskAreas.map((area) => (
              <div key={area.name} className="academic-alert-item">
                <div>
                  <p className="academic-alert-item__title">{area.name}</p>
                  <p className="academic-alert-item__meta">
                    {area.pending} pendências • {area.people} pessoas
                  </p>
                </div>
                <StatusBadge tone={area.tone}>{area.status}</StatusBadge>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </section>

      <section className="grid grid-2">
        <SurfaceCard>
          <SectionHeader
            eyebrow="Ranking"
            title="Melhor performance individual"
            description="Leitura simples para entender quem está puxando o resultado."
          />

          <div className="ranking-list">
            {topPerformers.map((person, index) => (
              <div key={person.name} className="ranking-item">
                <div className="ranking-item__left">
                  <div className="ranking-item__position">#{index + 1}</div>
                  <div className="avatar">{person.initials}</div>
                  <div>
                    <p className="ranking-item__name">{person.name}</p>
                    <p className="ranking-item__meta">
                      {person.area} • {person.role}
                    </p>
                  </div>
                </div>

                <div className="ranking-item__right">
                  <strong className="ranking-item__score">
                    {person.performance}%
                  </strong>
                  <StatusBadge tone={person.tone}>{person.capacity}</StatusBadge>
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeader
            eyebrow="Distribuição"
            title="Carga e prazo por pessoa"
            description="Visão para balanceamento entre líderes e equipes."
          />

          <div className="people-matrix">
            {academicBoardPeople.map((person) => (
              <div key={person.name} className="people-matrix__row">
                <div>
                  <p className="people-matrix__name">{person.name}</p>
                  <p className="people-matrix__meta">
                    {person.area} • {person.activeTasks} tarefas
                  </p>
                </div>

                <div className="people-matrix__stats">
                  <span>{person.pending} pendências</span>
                  <span>{person.onTime}% no prazo</span>
                  <span>{person.performance}% performance</span>
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </section>

      <SurfaceCard>
        <SectionTitle
          eyebrow="Leitura da diretoria"
          title="Essa página tem foco em governança"
          description="Aqui a leitura é institucional: áreas, pressão operacional, líderes, performance e risco acadêmico."
        />
      </SurfaceCard>
    </div>
  );
}