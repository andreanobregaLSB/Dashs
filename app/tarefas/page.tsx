export default function TarefasPage() {
  const tarefas = [
    {
      titulo: "Revisar fluxo de cadastro",
      projeto: "Onboarding Corporate",
      responsavel: "Ana",
      status: "Pendente",
      prioridade: "Alta",
      prazo: "Hoje",
    },
    {
      titulo: "Validar permissões de acesso",
      projeto: "Portal Financeiro",
      responsavel: "Carlos",
      status: "Em andamento",
      prioridade: "Alta",
      prazo: "Amanhã",
    },
    {
      titulo: "Ajustar dashboard executivo",
      projeto: "Central de Relatórios",
      responsavel: "Julia",
      status: "Concluída",
      prioridade: "Média",
      prazo: "Finalizado",
    },
    {
      titulo: "Criar estrutura inicial do kanban",
      projeto: "Automação Comercial",
      responsavel: "Marcos",
      status: "Em andamento",
      prioridade: "Baixa",
      prazo: "10/04/2026",
    },
    {
      titulo: "Definir regras de aprovação",
      projeto: "Onboarding Corporate",
      responsavel: "Ana",
      status: "Pendente",
      prioridade: "Alta",
      prazo: "12/04/2026",
    },
  ];

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Operação</p>
          <h1 className="text-2xl font-bold">Tarefas</h1>
        </div>

        <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
          Nova tarefa
        </button>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Pendentes</p>
          <p className="mt-3 text-3xl font-bold">14</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Em andamento</p>
          <p className="mt-3 text-3xl font-bold">9</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Concluídas</p>
          <p className="mt-3 text-3xl font-bold">31</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Atrasadas</p>
          <p className="mt-3 text-3xl font-bold">5</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3">
          {tarefas.map((tarefa) => (
            <div
              key={tarefa.titulo}
              className="rounded-2xl border border-slate-200 p-4"
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{tarefa.titulo}</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Projeto: {tarefa.projeto}
                  </p>
                  <p className="text-sm text-slate-500">
                    Responsável: {tarefa.responsavel}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {tarefa.status}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Prioridade: {tarefa.prioridade}
                  </span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                    Prazo: {tarefa.prazo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}