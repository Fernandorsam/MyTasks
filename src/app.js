const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const taskMocka = [
  {id: 1, title:  "treinar programação", done: false },
  {id: 2, title:  "estudar inglês", done: false },
  {id: 3, title:  "fazer compras", done: true }

]

app.get('/', (req, res) => {
  res.json(taskMocka);
});

app.get('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = taskMocka.find((task, index) => index + 1 === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
   res.status(200).json(task);
});


app.post('/', (req, res) => {
  const newTask = req.body;
  if(!newTask.title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTaskWithDefault = {
    id : taskMocka.length + 1,
    title: newTask.title,
    done: newTask.done || false
  };

  taskMocka.push(newTaskWithDefault);

 
  res.status(201).json(newTaskWithDefault);
});

app.put('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  const taskIndex = taskMocka.findIndex((task, index) => index + 1 === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  taskMocka[taskIndex] = { ...taskMocka[taskIndex], ...updatedTask };
  res.json(taskMocka[taskIndex]);
});

app.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = taskMocka.findIndex((task, index) => index + 1 === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  taskMocka.splice(taskIndex, 1);
  res.status(206).json({message : 'Task deleted successfully'});
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});