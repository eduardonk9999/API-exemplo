import { Tarefa } from "../models/tarefa.model";

// os dados moram aqui agora (depois vira MongoDB)
let tarefas: Tarefa[] = [
  { id: 1, titulo: "Estudar Express", concluida: false },
  { id: 2, titulo: "Aprender MongoDB", concluida: false },
];

export const tarefaRepository = {
  listar(): Tarefa[] {
    return tarefas;
  },

  buscarPorId(id: number): Tarefa | undefined {
    return tarefas.find((t) => t.id === id);
  },

  criar(titulo: string): Tarefa {
    const novaTarefa: Tarefa = {
      id: tarefas.length + 1,
      titulo,
      concluida: false,
    };
    tarefas.push(novaTarefa);
    return novaTarefa;
  },

  atualizar(id: number, dados: Partial<Tarefa>): Tarefa | undefined {
    const tarefa = tarefas.find((t) => t.id === id);
    if (!tarefa) return undefined;

    if (dados.titulo !== undefined) tarefa.titulo = dados.titulo;
    if (dados.concluida !== undefined) tarefa.concluida = dados.concluida;

    return tarefa;
  },

  remover(id: number): boolean {
    const index = tarefas.findIndex((t) => t.id === id);
    if (index === -1) return false;

    tarefas.splice(index, 1);
    return true;
  },
};