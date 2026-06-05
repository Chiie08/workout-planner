-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "workoutDate" TIMESTAMP(3) NOT NULL,
    "bodyPart" TEXT NOT NULL,
    "exercise" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "sets" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);
