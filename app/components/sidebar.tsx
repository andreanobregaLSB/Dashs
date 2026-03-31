export default function RelatoriosPage() {
  const indicadores = [
    { titulo: "Taxa média de conclusão", valor: "76%" },
    { titulo: "Projetos em risco", valor: "2" },
    { titulo: "Tarefas para hoje", valor: "12" },
    { titulo: "Atrasos na semana", valor: "5" },
  ];

  const relatorios = [
    {
      nome: "Performance semanal",
      descricao: "Resumo da evolução das tarefas e entregas da semana.",
      data: "04/04/2026",
      responsavel: "Marcos",
    },
    {
      nome: "Indicadores executivos",
      descricao: "Painel consolidado com métricas de produtividade e andamento.",
      data: "03/04/2026",
      responsavel: "Ana",
    },
    {
      nome: "Projetos com maior risco",
      descricao: "Levantamento dos projetos com prazos críticos ou bloqueios.",
      data: "02/04/2026",
      responsavel: "Carlos",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-slate-500">Análises</p>
        <h1 className="text-2xl font-bold">Relatórios</h1>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {indicadores.map((item) => (
          <div
            key={item.titulo}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{item.titulo}</p>
            <p className="mt-3 text-3xl font-bold">{item.valor}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Relatórios recentes</h2>
            <p className="text-sm text-slate-500">
              Documentos e análises geradas recentemente
            </p>
          </div>

          <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
            Gerar relatório
          </button>
        </div>

        <div className="grid gap-4">
          {relatorios.map((relatorio) => (
            <div
              key={relatorio.nome}
              className="rounded-2xl border border-slate-200 p-4"
            >
              <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <h3 className="font-semibold">{relatorio.nome}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {relatorio.descricao}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Data: {relatorio.data}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Responsável: {relatorio.responsavel}
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