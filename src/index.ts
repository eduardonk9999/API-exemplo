import express from "express";
import { error } from "node:console";

const app = express();
const PORT = 3000;

app.use(express.json()); // Permite a API ler JSON

let tarefas = [
    { id: 1, titulo: "Estudar Express", concluida: false },
    { id: 2, titulo: "Aprender MongoDB", concluida: false },
];


// Lista as tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});



// Busca uma tarefa por ID. ID
app.get("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id); // o valor que vai na URL

  const tarefa = tarefas.find((t) => t.id === id); // nova tarefa achada

  if (!tarefa) {
    return res.status(404).json({ // se nao achar manda 404
        error: "Tarefa não encontrada"
    });
  }

  res.json(tarefa);
});


// CRIA a tarefa
app.post("/tarefas", (req, res) => {
    const { titulo } = req.body; // pega o titulo

    const novaTarefa = {
        id: tarefas.length + 1,
        titulo: titulo,
        concluida: false
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
})


// UPDATE
app.put("/tarefas/:id", (req, res) => {
    const id = Number(req.params.id);

    const tarefa = tarefas.find((t) => t.id === id);

    if(!tarefa) {
        return res.status(404).json({
            erro: "Tarefa não encontrada"
        });
    }
    
    const { titulo, concluida } = req.body;
    if (titulo !== undefined) tarefa.titulo = titulo;
    if (concluida !== undefined) tarefa.concluida = concluida;

    res.json(tarefa)

    
})


// DELETE
app.delete("/tarefas/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = tarefas.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada "});
    }

    tarefas.splice(index, 1); // remove 1 item naquela posição

    res.status(204).send(); // 204 = sucesso, sem conteúdo pra devolver ...
});


app.listen(PORT, () => {
    console.log("Servidor ON");
})