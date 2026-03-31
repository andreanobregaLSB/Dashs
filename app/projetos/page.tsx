export default function ProjetosPage() {
  const projetos = [
    {
      nome: "Onboarding Corporate",
      status: "Em andamento",
      progresso: "72%",
      responsavel: "Ana",
      prazo: "12/04/2026",
      descricao: "Estruturação do novo fluxo de entrada de clientes corporativos.",
    },
    {
      nome: "Portal Financeiro",
      status: "Planejamento",
      progresso: "18%",
      responsavel: "Carlos",
      prazo: "28/04/2026",
      descricao: "Painel central para visão de receitas, custos e indicadores.",
    },
    {
      nome: "Automação Comercial",
      status: "Em revisão",
      progresso: "89%",
      responsavel: "Julia",
      prazo: "08/04/2026",
      descricao: "Automação de atualização de leads e acompanhamento comercial.",
    },
    {
      nome: "Central de Relatórios",
      status: "Concluído",
      progresso: "100%",
      responsavel: "Marcos",
      prazo: "30/03/2026",
      descricao: "Criação da área de relatórios estratégicos para diretoria.",
    },
  ];

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Gestão</p>
          <h1 className="text-2xl font-bold">Projetos</h1>
        </div>

        <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
          Novo projeto
        </button>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Projetos ativos</p>
          <p className="mt-3 text-3xl font-bold">12</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Em andamento</p>
          <p className="mt-3 text-3xl font-bold">7</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Concluídos no mês</p>
          <p className="mt-3 text-3xl font-bold">4</p>
        </div>
      </div>

      <div className="grid gap-4">
        {projetos.map((projeto) => (
          <div
            key={projeto.nome}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-lg font-semibold">{projeto.nome}</h2>
                <p className="mt-2 text-sm text-slate-600">{projeto.descricao}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Status: {projeto.status}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Responsável: {projeto.responsavel}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Prazo: {projeto.prazo}
                  </span>
                </div>
              </div>

              <div className="min-w-40">
                <p className="text-sm text-slate-500">Progresso</p>
                <p className="mt-2 text-2xl font-bold">{projeto.progresso}</p>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-slate-900"
                    style={{ width: projeto.progresso }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}