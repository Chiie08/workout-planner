const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();

app.set("view engine", "pug");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const workouts = await prisma.workout.findMany({
    orderBy: {
      workoutDate: "desc",
    },
  });

  res.render("index", {
    workouts,
    totalWorkouts: workouts.length,
  });
});

app.post("/create", async (req, res) => {
  await prisma.workout.create({
    data: {
      name: req.body.name,
      workoutDate: new Date(req.body.workoutDate),
      bodyPart: req.body.bodyPart,
      exercise: req.body.exercise,
      weight: Number(req.body.weight),
      reps: Number(req.body.reps),
      sets: Number(req.body.sets),
    },
  });

  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  await prisma.workout.delete({
    where: {
      id: Number(req.body.id),
    },
  });

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server Start");
});
