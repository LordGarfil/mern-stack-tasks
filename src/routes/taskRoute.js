const express = require("express")
const router = express.Router()

const Task = require("../models/task")

router.get("/", async (req, res) => {
  const tasks = await findTask()
  res.status(201).json(tasks)
})

router.get("/:id", async (req, res) => {
  const tasks = await findTask(req.params.id)
  res.status(201).json(tasks)
})

router.post("/", async (req, res) => {
  const task = await createTask(req.body)
  res.status(task.status).json({ message: task.message })
})

router.put("/:id", async (req, res) => {
  const task = await updateTask(req.params.id, req.body)
  res.status(task.status).json({ message: task.message })
})

router.delete("/:id", async (req, res) => {
  const task = await deleteTask(req.params.id)
  res.status(task.status).json({ message: task.message })
})

async function findTask(id = null) {
  let tasks = {}
  if(!id){
    tasks = await Task.find()
  }else{
    tasks = await Task.findById(id)
  }
  
  console.log(tasks)
  return tasks
}

async function createTask(data = null) {
  if (!data) {
    return {
      status: 200,
      message: "Fill data to create task",
    }
  }
  try {
    const { title, description, completed } = data
    const task = new Task({ title, description, completed })
    await task.save()
    console.log(task)
    return {
      status: 201,
      message: "Task saved",
    }
  } catch (err) {
    return {
      status: 200,
      message: err,
    }
  }
}

async function updateTask(id, task) {
  const { title, description, completed } = task
  const newTask = { title, description, completed }
  try {
    await Task.findByIdAndUpdate(id, newTask)
    return {
      status: 201,
      message: "Task updated",
    }
  } catch (err) {
    return {
      status: 200,
      message: err,
    }
  }
}

async function deleteTask(id) {
  try {
    await Task.findByIdAndRemove(id)
    return {
      status: 201,
      message: "Task deleted",
    }
  } catch (err) {
    return {
      status: 200,
      message: err,
    }
  }
}

module.exports = router
