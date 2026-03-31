import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    {
      label: "Projetos ativos",
      value: "8",
      detail: "+2 este mês",
      href: "/projetos",
    },
    {
      label: "Tarefas pendentes",
      value: "23",
      detail: "7 com prazo hoje",
      href: "/tarefas",
    },
    {
      label: "Atrasadas",
      value: "5",
      detail: "precisam de atenção",
      href: "/tarefas",
    },
    {
      label: "Concluídas",
      value: "41",
      detail: "últimos 30 dias",
      href: "/relatorios",
    },
  ];

  const projetos = [
    {
      nome: "Onboarding Corporate",
      status: "Em andamento",
      progresso: "72%",
      responsavel: "Ana",
    },
    {
      nome: "Portal Financeiro",
      status: "Planejamento",
      progresso: "18%",
      responsavel: "Carlos",
    },
    {
      nome: "Automação Comercial",
      status: "Em revisão",
      progresso: "89%",
      responsavel: "Julia",
    },
  ];

  const prioridades = [
    "Revisar fluxo de cadastro",
    "Validar permissões de acesso",
    "Definir dashboard executivo",
    "Ajustar status das tarefas",
  ];

  const atividades = [
    "Ana atualizou o projeto Onboarding Corporate",
    "Carlos criou 3 tarefas no Portal Financeiro",
    "Julia concluiu a etapa de validação",
    "Novo comentário em Automação Comercial",
  ];

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-slate-500">Visão geral</p>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-3xl font-bold">{item.value}</p>
            <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
          </Link>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Projetos em andamento</h2>
                <p className="text-sm text-slate-500">
                  Resumo rápido do que está ativo
                </p>
              </div>
              <Link
                href="/projetos"
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                Ver todos
              </Link>
            </div>

            <div className="grid gap-4">
              {projetos.map((projeto) => (
                <Link
                  key={projeto.nome}
                  href="/projetos"
                  className="rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold">{projeto.nome}</h3>
                      <p className="text-sm text-slate-500">
                        Responsável: {projeto.responsavel}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {projeto.status}
                      </span>
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                        {projeto.progresso}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Prioridades da semana</h2>
            <p className="mb-5 text-sm text-slate-500">
              Itens que merecem foco primeiro
            </p>

            <div className="space-y-3">
              {prioridades.map((item, index) => (
                <Link
                  key={item}
                  href="/tarefas"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Atividade recente</h2>
            <p className="mb-5 text-sm text-slate-500">
              Últimas movimentações
            </p>

            <div className="space-y-4">
              {atividades.map((item) => (
                <Link
                  key={item}
                  href="/projetos"
                  className="block rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
                >
                  <p className="text-sm text-slate-700">{item}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Resumo rápido</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Taxa média de conclusão</span>
                <strong className="text-slate-900">76%</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Equipe online agora</span>
                <strong className="text-slate-900">9</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Tarefas para hoje</span>
                <strong className="text-slate-900">12</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}