export default function EquipePage() {
  const equipe = [
    {
      nome: "Ana Souza",
      cargo: "Product Owner",
      projetos: 3,
      tarefas: 12,
      status: "Online",
    },
    {
      nome: "Carlos Lima",
      cargo: "Desenvolvedor",
      projetos: 2,
      tarefas: 9,
      status: "Em reunião",
    },
    {
      nome: "Julia Rocha",
      cargo: "UX/UI Designer",
      projetos: 4,
      tarefas: 7,
      status: "Online",
    },
    {
      nome: "Marcos Silva",
      cargo: "Analista de Dados",
      projetos: 2,
      tarefas: 6,
      status: "Offline",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-slate-500">Pessoas</p>
        <h1 className="text-2xl font-bold">Equipe</h1>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Membros ativos</p>
          <p className="mt-3 text-3xl font-bold">12</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Online agora</p>
          <p className="mt-3 text-3xl font-bold">9</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Carga média</p>
          <p className="mt-3 text-3xl font-bold">8 tarefas</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        {equipe.map((membro) => (
          <div
            key={membro.nome}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{membro.nome}</h2>
                <p className="mt-1 text-sm text-slate-500">{membro.cargo}</p>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {membro.status}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Projetos ativos</p>
                <p className="mt-2 text-2xl font-bold">{membro.projetos}</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Tarefas abertas</p>
                <p className="mt-2 text-2xl font-bold">{membro.tarefas}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}