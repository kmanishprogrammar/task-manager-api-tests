const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const request = require("supertest");
const express = require("express");
const taskRoutes = require("../../routes/taskRoutes");
const Task = require("../../models/Task");

const app = express();
app.use(express.json());
app.use("/api/tasks", taskRoutes);

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri(), { dbName: "apitest" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

afterEach(async () => {
  await Task.deleteMany();
});

describe("API Test: /api/tasks", () => {
  it("POST /api/tasks should create a task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "API Task", description: "via API" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("API Task");
  });

  it("GET /api/tasks should return tasks", async () => {
    await Task.create({ title: "Read Test", description: "check list" });

    const res = await request(app).get("/api/tasks");
    expect(res.body.length).toBe(1);
  });
});
