import { Tarefa } from "../models/tarefa.model"
import { tarefaRepository } from "../repositories/tarefa.repository"


export const tarefaService = {
    listar(): Tarefa[] {
        return tarefaRepository.listar();
    },

    buscaPorId(id: number): Tarefa | undefined {
        return tarefaRepository.buscarPorId(id);
    },

     criar(titulo: string): Tarefa {
        return tarefaRepository.criar(titulo.trim()); // .trim() = regra: tira espaços nas pontas
    },


    atualizar(id:number, dados: Patrial<Tarefa>): Tarefa | undefined {
        return tarefaRepository.atualizar(id, dados);
    }

    remover(id: number): boolean {
        return tarefaRepository.remover(id);
    },
}