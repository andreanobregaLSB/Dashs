"use client";

import { useMemo, useState } from "react";
import {
  SectionHeader,
  SurfaceCard,
  StatusBadge,
  StatCard,
} from "@/components/ui";
import {
  academicBoardAreas,
  projects,
  tasks,
  teamMembers,
} from "@/lib/mock-data";

type AreaFilter = "Todas" | (typeof academicBoardAreas)[number]["name"];
type DeliveryFilter = "Todas" | "Diretoria" | "Projetos" | "Tarefas" | "Equipe";
type ToneFilter = "Todos" | "success" | "warning" | "danger" | "neutral";

type GovernanceRow = {
  id: string;
  area: (typeof academicBoardAreas)[number]["name"];
  delivery: Exclude<DeliveryFilter, "Todas">;
  title: string;
  owner: string;
  status: string;
  tone: Exclude<ToneFilter, "Todos">;
  metricLabel: string;
  metricValue: string;
  note: string;
};

const areaOptions: AreaFilter[] = [
  "Todas",
  ...academicBoardAreas.map((area) => area.name),
];

const deliveryOptions: DeliveryFilter[] = [
  "Todas",
  "Diretoria",
  "Projetos",
  "Tarefas",
  "Equipe",
];

const toneOptions: ToneFilter[] = ["Todos", "success", "warning", "danger", "neutral"];

function areaForIndex(index: number) {
  return academicBoardAreas[index % academicBoardAreas.length]?.name ?? academicBoardAreas[0].name;
}

function buildGovernanceRows(): GovernanceRow[] {
  return [
    ...academicBoardAreas.map((area) => ({
      id: `area-${area.name}`,
      area: area.name,
      delivery: "Diretoria" as const,
      title: area.name,
      owner: area.lead,
      status: area.status,
      tone: area.tone,
      metricLabel: "Eficiência",
      metricValue: `${area.efficiency}%`,
      note: `${area.deliveries} entregas • ${area.pending} pendências`,
    })),
    ...projects.map((project, index) => ({
      id: `project-${project.id}`,
      area: areaForIndex(index),
      delivery: "Projetos" as const,
      title: project.name,
      owner: project.owner,
      status: project.status,
      tone: project.tone,
      metricLabel: "Progresso",
      metricValue: `${project.progress}%`,
      note: `Prazo ${project.deadline}`,
    })),
    ...tasks.map((task, index) => ({
      id: `task-${task.id}`,
      area: areaForIndex(index + projects.length),
      delivery: "Tarefas" as const,
      title: task.title,
      owner: task.owner,
      status: task.status,
      tone: task.tone,
      metricLabel: "Prioridade",
      metricValue: task.priority,
      note: `Prazo ${task.deadline}`,
    })),
    ...teamMembers.map((member, index) => ({
      id: `team-${member.name}`,
      area: areaForIndex(index + projects.length + tasks.length),
      delivery: "Equipe" as const,
      title: member.name,
      owner: member.role,
      status: member.capacity,
      tone: member.tone,
      metricLabel: "Performance",
      metricValue: `${member.performance}%`,
      note: `${member.activeTasks} tarefas • ${member.projects} projetos`,
    })),
  ];
}

function getActiveCount(rows: GovernanceRow[], tone: ToneFilter) {
  if (tone === "Todos") return rows.length;
  return rows.filter((row) => row.tone === tone).length;
}

export default function DiretoriaAcademicaPage() {
  const [areaFilter, setAreaFilter] = useState<AreaFilter>("Todas");
  const [deliveryFilter, setDeliveryFilter] = useState<DeliveryFilter>("Todas");
  const [toneFilter, setToneFilter] = useState<ToneFilter>("Todos");
  const [selectedRowId, setSelectedRowId] = useState<string>("area-Graduação");

  const governanceRows = useMemo(() => buildGovernanceRows(), []);

  const filteredRows = useMemo(() => {
    return governanceRows.filter((row) => {
      const matchesArea = areaFilter === "Todas" || row.area === areaFilter;
      const matchesDelivery = deliveryFilter === "Todas" || row.delivery === deliveryFilter;
      const matchesTone = toneFilter === "Todos" || row.tone === toneFilter;
      return matchesArea && matchesDelivery && matchesTone;
    });
  }, [areaFilter, deliveryFilter, toneFilter, governanceRows]);

  const selectedRow =
    filteredRows.find((row) => row.id === selectedRowId) ?? filteredRows[0] ?? null;

  const selectedArea =
    academicBoardAreas.find((area) => area.name === (selectedRow?.area ?? areaFilter)) ??
    academicBoardAreas[0];

  const totalCount = filteredRows.length;
  const criticalCount = getActiveCount(filteredRows, "warning") + getActiveCount(filteredRows, "danger");
  const positiveCount = getActiveCount(filteredRows, "success");
  const areaCount = new Set(filteredRows.map((row) => row.area)).size;

  const deliveryBreakdown = deliveryOptions
    .filter((item): item is Exclude<DeliveryFilter, "Todas"> => item !== "Todas")
    .map((delivery) => ({
      delivery,
      count: filteredRows.filter((row) => row.delivery === delivery).length,
    }))
    .filter((item) => item.count > 0);

  const handleReset = () => {
    setAreaFilter("Todas");
    setDeliveryFilter("Todas");
    setToneFilter("Todos");
  };

  const handleExport = () => {
    window.print();
  };

  const handleRefresh = () => {
    const nextRow = filteredRows[0] ?? governanceRows[0];
    if (nextRow) {
      setSelectedRowId(nextRow.id);
    }
  };

  return (
    <div className="page-stack">
      <section className="academic-command academic-command--hero">
        <div className="academic-command__main">
          <p className="academic-command__eyebrow">Diretoria Acadêmica</p>
          <h1 className="academic-command__title">Governança e entregas</h1>
          <p className="academic-command__description">
            Consolidado do site por área, entrega e situação.
          </p>
        </div>

        <div className="academic-command__actions">
          <button type="button" className="btn btn--ghost btn--sm" onClick={handleReset}>
            Limpar
          </button>
          <button type="button" className="btn btn--primary btn--sm" onClick={handleExport}>
            Exportar
          </button>
        </div>
      </section>

      <SurfaceCard className="governance-filter-card">
        <div className="tone-strip" />
        <SectionHeader
          eyebrow="Filtro rápido"
          title="Área, entrega e situação"
          description="Botões ativos para navegar pelo consolidado."
        />

        <div className="filters-toolbar">
          <div className="filter-group">
            <label className="filter-label">Área</label>
            <div className="filter-button-row">
              {areaOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`btn btn--sm ${areaFilter === option ? "btn--primary" : "btn--ghost"}`}
                  onClick={() => setAreaFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Entrega</label>
            <div className="filter-button-row">
              {deliveryOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`btn btn--sm ${deliveryFilter === option ? "btn--primary" : "btn--ghost"}`}
                  onClick={() => setDeliveryFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Situação</label>
            <div className="filter-button-row">
              {toneOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`btn btn--sm ${toneFilter === option ? "btn--primary" : "btn--ghost"}`}
                  onClick={() => setToneFilter(option)}
                >
                  {option === "Todos" ? "Todos" : option}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group filter-group--actions">
            <label className="filter-label">Ações</label>
            <div className="report-actions report-actions--compact">
              <button type="button" className="btn btn--ghost btn--sm" onClick={handleRefresh}>
                Atualizar leitura
              </button>
              <button type="button" className="btn btn--secondary btn--sm" onClick={handleExport}>
                Imprimir visão
              </button>
              <button type="button" className="btn btn--primary btn--sm" onClick={handleReset}>
                Limpar filtros
              </button>
            </div>
          </div>
        </div>
      </SurfaceCard>

      <section className="grid grid-4">
        <StatCard label="Entregas" value={String(totalCount)} delta="itens filtrados" />
        <StatCard label="Áreas" value={String(areaCount)} delta="frentes ativas" />
        <StatCard label="Em dia" value={String(positiveCount)} delta="status positivo" />
        <StatCard label="Críticos" value={String(criticalCount)} delta="atenção direta" />
      </section>

      <section className="grid grid-2-1">
        <SurfaceCard className="governance-board-card">
          <div className="tone-strip tone-strip--warning" />
          <SectionHeader
            eyebrow="Consolidado"
            title="Entregas do site"
            description="Cada linha é uma frente real do sistema."
          />

          <div className="governance-list">
            {filteredRows.map((row) => (
              <button
                key={row.id}
                type="button"
                className={`unstyled-button governance-row-button ${
                  selectedRow?.id === row.id ? "governance-row-button--active" : ""
                }`}
                onClick={() => setSelectedRowId(row.id)}
              >
                <SurfaceCard className="governance-row-card">
                  <div className={`tone-strip tone-strip--${row.tone}`} />
                  <div className="governance-row-card__top">
                    <div>
                      <StatusBadge tone={row.tone}>{row.delivery}</StatusBadge>
                      <h3 className="card-title">{row.title}</h3>
                      <p className="governance-row-card__meta">
                        Área: {row.area} • {row.owner}
                      </p>
                    </div>
                    <div className="governance-row-card__metric">
                      <strong>{row.metricValue}</strong>
                      <span>{row.metricLabel}</span>
                    </div>
                  </div>
                  <p className="card-description">{row.status} • {row.note}</p>
                </SurfaceCard>
              </button>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="governance-summary-card">
          <div className={`tone-strip tone-strip--${selectedRow?.tone ?? "neutral"}`} />
          <SectionHeader
            eyebrow="Área selecionada"
            title={selectedArea.name}
            description={selectedRow ? selectedRow.title : "Sem item selecionado"}
          />

          <div className="governance-summary-panel">
            <div className="governance-summary-panel__header">
              <div>
                <p className="governance-summary-panel__label">Responsável</p>
                <p className="governance-summary-panel__value">{selectedArea.lead}</p>
              </div>
              <StatusBadge tone={selectedArea.tone}>{selectedArea.status}</StatusBadge>
            </div>

            <div className="task-meta-grid task-meta-grid--dense">
              <div className="task-meta-box">
                <span className="task-meta-box__label">Pessoas</span>
                <strong className="task-meta-box__value">{selectedArea.people}</strong>
              </div>
              <div className="task-meta-box">
                <span className="task-meta-box__label">Entregas</span>
                <strong className="task-meta-box__value">{selectedArea.deliveries}</strong>
              </div>
              <div className="task-meta-box">
                <span className="task-meta-box__label">Pendências</span>
                <strong className="task-meta-box__value">{selectedArea.pending}</strong>
              </div>
              <div className="task-meta-box">
                <span className="task-meta-box__label">Eficiência</span>
                <strong className="task-meta-box__value">{selectedArea.efficiency}%</strong>
              </div>
            </div>

            <div className="governance-summary-panel__header governance-summary-panel__header--subtle">
              <div>
                <p className="governance-summary-panel__label">Leitura filtrada</p>
                <p className="governance-summary-panel__value">Distribuição por entrega</p>
              </div>
              <span className="governance-summary-panel__pill">{deliveryBreakdown.length} tipos</span>
            </div>

            <div className="governance-delivery-grid">
              {deliveryBreakdown.map((item) => (
                <div key={item.delivery} className="governance-delivery-card">
                  <div>
                    <p className="report-list__title">{item.delivery}</p>
                    <p className="report-list__meta">{item.count} entregas filtradas</p>
                  </div>
                  <StatusBadge tone="neutral">{item.count}</StatusBadge>
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </section>

      <section className="grid grid-2">
        <SurfaceCard className="governance-areas-card">
          <div className="tone-strip tone-strip--success" />
          <SectionHeader
            eyebrow="Áreas acadêmicas"
            title="Mapa institucional"
            description="Resumo objetivo das áreas da diretoria."
          />

          <div className="governance-area-grid">
            {academicBoardAreas.map((area) => (
              <div key={area.name} className="governance-area-card">
                <div className="governance-area-card__top">
                  <div>
                    <h3 className="card-title">{area.name}</h3>
                    <p className="card-description">{area.lead}</p>
                  </div>
                  <StatusBadge tone={area.tone}>{area.status}</StatusBadge>
                </div>
                <div className="governance-area-card__stats">
                  <span>{area.people} pessoas</span>
                  <span>{area.deliveries} entregas</span>
                  <span>{area.pending} pendências</span>
                  <span>{area.efficiency}% eficiência</span>
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="governance-actions-card">
          <div className="tone-strip tone-strip--danger" />
          <SectionHeader
            eyebrow="Ações"
            title="Atalhos de navegação"
            description="Entradas diretas para as frentes do site."
          />
          <div className="report-actions">
            <button className="btn btn--primary" type="button" onClick={handleReset}>
              Resetar filtros
            </button>
            <button className="btn btn--secondary" type="button" onClick={handleExport}>
              Imprimir visão
            </button>
            <button type="button" className="btn btn--ghost" onClick={handleRefresh}>
              Atualizar leitura
            </button>
          </div>

          <div className="report-list">
            <div className="report-list__item">
              <div>
                <p className="report-list__title">Projetos</p>
                <p className="report-list__meta">{projects.length} registros</p>
              </div>
              <StatusBadge tone="neutral">Ativo</StatusBadge>
            </div>
            <div className="report-list__item">
              <div>
                <p className="report-list__title">Tarefas</p>
                <p className="report-list__meta">{tasks.length} registros</p>
              </div>
              <StatusBadge tone="neutral">Ativo</StatusBadge>
            </div>
            <div className="report-list__item">
              <div>
                <p className="report-list__title">Equipe</p>
                <p className="report-list__meta">{teamMembers.length} registros</p>
              </div>
              <StatusBadge tone="neutral">Ativo</StatusBadge>
            </div>
          </div>
        </SurfaceCard>
      </section>
    </div>
  );
}
