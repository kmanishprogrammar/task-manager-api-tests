const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Task = require("../../models/Task");

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri(), { dbName: "test" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

afterEach(async () => {
  await Task.deleteMany();
});

describe("Integration: Task DB Ops", () => {
  it("should save and fetch a task", async () => {
    const task = await Task.create({
      title: "DB Test",
      description: "Integration test",
    });

    const found = await Task.findById(task._id);
    expect(found.title).toBe("DB Test");
  });
});
