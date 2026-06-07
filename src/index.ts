import express from "express";

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



app.listen(PORT, () => {
    console.log("Servidor ON");
})