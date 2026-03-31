export default function Home() {
  const stats = [
    { label: "Projetos ativos", value: "8", detail: "+2 este mês" },
    { label: "Tarefas pendentes", value: "23", detail: "7 com prazo hoje" },
    { label: "Atrasadas", value: "5", detail: "precisam de atenção" },
    { label: "Concluídas", value: "41", detail: "últimos 30 dias" },
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

  const menu = [
    "Dashboard",
    "Projetos",
    "Tarefas",
    "Equipe",
    "Relatórios",
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white lg:flex">
          <div className="border-b border-slate-200 px-6 py-6">
            <p className="text-sm font-medium text-slate-500">Sistema</p>
            <h2 className="mt-1 text-2xl font-bold">Project Flow</h2>
            <p className="mt-2 text-sm text-slate-500">
              Gestão simples e rápida
            </p>
          </div>

          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {menu.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    index === 0
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          <div className="border-t border-slate-200 p-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-900">
                Espaço do time
              </p>
              <p className="mt-1 text-sm text-slate-500">
                12 membros ativos no sistema
              </p>
            </div>
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="border-b border-slate-200 bg-white">
            <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-slate-500">Visão geral</p>
                <h1 className="text-2xl font-bold">Dashboard</h1>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Buscar projeto ou tarefa"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400 sm:w-72"
                />
                <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
                  Novo projeto
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-3 text-3xl font-bold">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
                </div>
              ))}
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold">
                        Projetos em andamento
                      </h2>
                      <p className="text-sm text-slate-500">
                        Resumo rápido do que está ativo
                      </p>
                    </div>
                    <button className="text-sm font-medium text-slate-600 hover:text-slate-900">
                      Ver todos
                    </button>
                  </div>

                  <div className="grid gap-4">
                    {projetos.map((projeto) => (
                      <div
                        key={projeto.nome}
                        className="rounded-2xl border border-slate-200 p-4"
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
                      </div>
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
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <p className="text-sm font-medium text-slate-700">
                          {item}
                        </p>
                      </div>
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
                      <div
                        key={item}
                        className="rounded-xl border border-slate-200 p-4"
                      >
                        <p className="text-sm text-slate-700">{item}</p>
                      </div>
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
          </main>
        </div>
      </div>
    </div>
  );
}