"use client";

import { useMemo, useState } from "react";
import {
  SectionHeader,
  SurfaceCard,
  StatusBadge,
  SectionTitle,
} from "@/components/ui";
import { tasks } from "@/lib/mock-data";

const statusOptions = ["Todos", "Pendente", "Em andamento", "Concluída", "Em risco"];
const priorityOptions = ["Todas", "Alta", "Média", "Baixa"];
const ownerOptions = ["Todos", ...Array.from(new Set(tasks.map((task) => task.owner)))];
const deadlineOptions = ["Todos", "Hoje", "Esta semana", "Este mês"];

function getDeadlineBucket(deadline: string) {
  const [day, month, year] = deadline.split("/").map(Number);
  const taskDate = new Date(year, month - 1, day);
  const now = new Date();

  const sameDay =
    taskDate.getDate() === now.getDate() &&
    taskDate.getMonth() === now.getMonth() &&
    taskDate.getFullYear() === now.getFullYear();

  const diffMs = taskDate.getTime() - now.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  if (sameDay) return "Hoje";
  if (diffDays <= 7) return "Esta semana";
  return "Este mês";
}

export default function TarefasPage() {
  const [status, setStatus] = useState("Todos");
  const [priority, setPriority] = useState("Todas");
  const [owner, setOwner] = useState("Todos");
  const [deadline, setDeadline] = useState("Todos");
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(tasks[0]?.id ?? null);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchStatus = status === "Todos" || task.status === status;
      const matchPriority = priority === "Todas" || task.priority === priority;
      const matchOwner = owner === "Todos" || task.owner === owner;
      const matchDeadline =
        deadline === "Todos" || getDeadlineBucket(task.deadline) === deadline;

      return matchStatus && matchPriority && matchOwner && matchDeadline;
    });
  }, [status, priority, owner, deadline]);

  const selectedTask =
    filteredTasks.find((task) => task.id === selectedTaskId) ?? filteredTasks[0] ?? null;

  const pendingCount = filteredTasks.filter((task) => task.status === "Pendente").length;
  const inProgressCount = filteredTasks.filter(
    (task) => task.status === "Em andamento"
  ).length;
  const completedCount = filteredTasks.filter(
    (task) => task.status === "Concluída"
  ).length;
  const highPriorityCount = filteredTasks.filter(
    (task) => task.priority === "Alta"
  ).length;

  return (
    <div className="page-stack">
      <section className="page-hero page-hero--compact">
        <div>
          <p className="page-hero__eyebrow">Operação</p>
          <h1 className="page-hero__title">Tarefas</h1>
          <p className="page-hero__description">
            Acompanhe fluxo, responsáveis, criticidade, status e prazo em uma
            visão operacional mais organizada.
          </p>
        </div>

        <div className="page-hero__actions page-hero__actions--minimal">
          <button className="btn btn--secondary btn--sm" type="button">
            Nova tarefa
          </button>
          <button className="btn btn--primary btn--sm" type="button">
            Exportar visão
          </button>
        </div>
      </section>

      <section className="grid grid-4">
        <SurfaceCard className="stat-card">
          <span className="stat-card__label">Pendentes</span>
          <strong className="stat-card__value">{pendingCount}</strong>
          <span className="stat-card__delta">aguardando início</span>
        </SurfaceCard>

        <SurfaceCard className="stat-card">
          <span className="stat-card__label">Em andamento</span>
          <strong className="stat-card__value">{inProgressCount}</strong>
          <span className="stat-card__delta">execução ativa</span>
        </SurfaceCard>

        <SurfaceCard className="stat-card">
          <span className="stat-card__label">Concluídas</span>
          <strong className="stat-card__value">{completedCount}</strong>
          <span className="stat-card__delta">resultado entregue</span>
        </SurfaceCard>

        <SurfaceCard className="stat-card">
          <span className="stat-card__label">Alta criticidade</span>
          <strong className="stat-card__value">{highPriorityCount}</strong>
          <span className="stat-card__delta">atenção imediata</span>
        </SurfaceCard>
      </section>

      <section className="section-block">
        <SectionHeader
          eyebrow="Filtros"
          title="Refinar atividades"
          description="Filtre por status, criticidade, responsável e prazo."
        />

        <SurfaceCard className="filters-panel">
          <div className="filters-grid">
            <div className="filter-group">
              <label className="filter-label" htmlFor="status-filter">
                Status
              </label>
              <select
                id="status-filter"
                className="filter-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label" htmlFor="priority-filter">
                Criticidade
              </label>
              <select
                id="priority-filter"
                className="filter-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                {priorityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label" htmlFor="owner-filter">
                Responsável
              </label>
              <select
                id="owner-filter"
                className="filter-select"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
              >
                {ownerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label" htmlFor="deadline-filter">
                Prazo
              </label>
              <select
                id="deadline-filter"
                className="filter-select"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              >
                {deadlineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filters-actions">
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => {
                setStatus("Todos");
                setPriority("Todas");
                setOwner("Todos");
                setDeadline("Todos");
              }}
            >
              Limpar filtros
            </button>

            <div className="filters-summary">
              <span className="filters-summary__label">Resultado</span>
              <strong className="filters-summary__value">
                {filteredTasks.length} atividades
              </strong>
            </div>
          </div>
        </SurfaceCard>
      </section>

      <section className="tasks-layout">
        <div className="tasks-list">
          {filteredTasks.map((task) => (
            <button
              key={task.id}
              type="button"
              className={`unstyled-button ${selectedTask?.id === task.id ? "task-select--active" : ""}`}
              onClick={() => setSelectedTaskId(task.id)}
            >
              <SurfaceCard className="task-card task-card--enhanced">
                <div className="task-card__top">
                  <StatusBadge tone={task.tone}>{task.status}</StatusBadge>
                  <span className="task-card__priority">{task.priority}</span>
                </div>

                <div className="task-card__body">
                  <h3 className="card-title">{task.title}</h3>
                  <p className="card-description">{task.description}</p>
                </div>

                <div className="task-meta-grid">
                  <div className="task-meta-box">
                    <span className="task-meta-box__label">Projeto</span>
                    <strong className="task-meta-box__value">
                      Onboarding Corporativo
                    </strong>
                  </div>

                  <div className="task-meta-box">
                    <span className="task-meta-box__label">Responsável</span>
                    <strong className="task-meta-box__value">{task.owner}</strong>
                  </div>
                </div>
              </SurfaceCard>
            </button>
          ))}
        </div>

        <aside className="task-detail-panel">
          {selectedTask ? (
            <SurfaceCard className="task-detail-card">
              <div className="task-card__top">
                <StatusBadge tone={selectedTask.tone}>{selectedTask.status}</StatusBadge>
                <span className="task-card__priority">{selectedTask.priority}</span>
              </div>

              <div className="task-detail-card__header">
                <h2 className="section-title__title">{selectedTask.title}</h2>
                <p className="section-title__description">
                  Conteúdo interno da tarefa, andamento, checklist e próximos passos.
                </p>
              </div>

              <div className="task-meta-grid">
                <div className="task-meta-box">
                  <span className="task-meta-box__label">Projeto</span>
                  <strong className="task-meta-box__value">
                    Onboarding Corporativo
                  </strong>
                </div>

                <div className="task-meta-box">
                  <span className="task-meta-box__label">Responsável</span>
                  <strong className="task-meta-box__value">{selectedTask.owner}</strong>
                </div>

                <div className="task-meta-box">
                  <span className="task-meta-box__label">Prazo</span>
                  <strong className="task-meta-box__value">{selectedTask.deadline}</strong>
                </div>

                <div className="task-meta-box">
                  <span className="task-meta-box__label">Criticidade</span>
                  <strong className="task-meta-box__value">{selectedTask.priority}</strong>
                </div>
              </div>

              <div className="task-detail-section">
                <h3 className="task-detail-section__title">Descrição</h3>
                <p className="card-description">{selectedTask.description}</p>
              </div>

              <div className="task-detail-section">
                <h3 className="task-detail-section__title">Checklist</h3>
                <div className="checklist-list">
                  <div className="checklist-item">
                    <span className="checklist-item__dot checklist-item__dot--done" />
                    Validar escopo com a coordenação
                  </div>
                  <div className="checklist-item">
                    <span className="checklist-item__dot checklist-item__dot--done" />
                    Revisar dependências com outras áreas
                  </div>
                  <div className="checklist-item">
                    <span className="checklist-item__dot" />
                    Atualizar evidências e anexos
                  </div>
                </div>
              </div>

              <div className="task-detail-section">
                <h3 className="task-detail-section__title">Próximas ações</h3>
                <div className="timeline-list">
                  <div className="timeline-item">
                    <span className="timeline-item__time">Hoje</span>
                    <p className="timeline-item__text">
                      Atualizar status com a liderança acadêmica.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-item__time">+2 dias</span>
                    <p className="timeline-item__text">
                      Consolidar devolutiva final e aprovações.
                    </p>
                  </div>
                </div>
              </div>

              <div className="task-card__actions">
                <button type="button" className="btn btn--ghost btn--sm">
                  Ver histórico
                </button>
                <button type="button" className="btn btn--primary btn--sm">
                  Atualizar status
                </button>
              </div>
            </SurfaceCard>
          ) : (
            <SurfaceCard>
              <SectionTitle
                eyebrow="Detalhe"
                title="Nenhuma tarefa encontrada"
                description="Ajuste os filtros para visualizar o conteúdo interno."
              />
            </SurfaceCard>
          )}
        </aside>
      </section>
    </div>
  );
}