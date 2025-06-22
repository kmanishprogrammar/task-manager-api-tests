const Task = require("../../models/Task");

describe("Task Model Unit Tests", () => {
  it("should create a task with default status", () => {
    const task = new Task({
      title: "Test Task",
      description: "Testing task model",
    });

    expect(task.title).toBe("Test Task");
    expect(task.description).toBe("Testing task model");
    expect(task.status).toBe("pending");
  });
});
