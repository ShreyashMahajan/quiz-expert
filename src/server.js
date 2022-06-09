import { Server, Model, RestSerializer } from "miragejs";
import { loginHandler, signupHandler } from "./backend/controllers/AuthController";
import { addResultHandler, getResultHandler } from "./backend/controllers/ResultController";
import { getAllQuestionsHandler, getQuestionHandler } from "./backend/controllers/QuestionController";
import { questions } from "./backend/db/questions";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      question: Model,
      user: Model,
      result: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      questions.forEach((item) => {
        server.create("question", { ...item });
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          result: {
            totalScore : 0,
            answered : 0
          },
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // Questions routes (public)
      this.get("/questions", getAllQuestionsHandler.bind(this));
      this.get("/questions/:questionId", getQuestionHandler.bind(this));

      // report routes (private)
      this.get("/user/result", getResultHandler.bind(this));
      this.post("/user/result", addResultHandler.bind(this));
    },
  });
}
