import Link from "next/link";
import {
  SectionHeader,
  SurfaceCard,
  StatusBadge,
  ProgressBar,
  SectionTitle,
} from "@/components/ui";
import { projects } from "@/lib/mock-data";

export default function ProjetosPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <div>
          <p className="page-hero__eyebrow">Projetos</p>
          <h1 className="page-hero__title">Portfólio e andamento</h1>
          <p className="page-hero__description">
            Projetos com líder, status, progresso e prioridade.
          </p>
        </div>
        <div className="page-hero__actions">
          <button className="btn btn--secondary" type="button">
            Filtrar status
          </button>
          <button className="btn btn--primary" type="button">
            Novo projeto
          </button>
        </div>
      </section>

      <section className="section-block">
        <SectionHeader
          eyebrow="Carteira"
          title="Projetos ativos"
          description="Visual executivo com foco em saúde, prazo e execução."
        />
        <div className="grid grid-2">
          {projects.map((project) => (
            <SurfaceCard key={project.id} className="project-card">
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

              <div className="project-card__actions">
                <Link href="/tarefas" className="btn btn--ghost">
                  Ver tarefas
                </Link>
                <button className="btn btn--secondary" type="button">
                  Abrir detalhes
                </button>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <SurfaceCard>
        <SectionTitle
          eyebrow="Resumo"
          title="Padrão para expansão futura"
          description="Depois você pode ligar estes cards a dados reais, modal e banco."
        />
      </SurfaceCard>
    </div>
  );
}