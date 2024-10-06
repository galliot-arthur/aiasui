import {
  API_GLOBAL_ERROR,
  BAD_REQUEST_ERROR,
  FORBIDDEN_ERROR,
  NOT_FOUND_ERROR,
} from "../../domain";

export const i18n = {
  title: {
    full: "Aiasui",
    sliced: {
      ai: "ai",
      as: "as",
      ui: "ui",
    },
  },
  description:
    "An experimentation to figure how Artificial Intelligence can be used as User Interface.",
  descriptionLong: {
    title: "What is Aiasui?",
    description:
      "This chatbot serves as an experiment to explore how AI can collect and process user data in a manner similar to traditional form-based data collection. It is designed to be used as a tool for collecting and processing data. It was built using Next.JS and Vercel AI Sdk.",
  },
  chat: {
    roles: {
      user: "You: ",
      assistant: "AI: ",
    },
    inputPlaceholder: "Say something...",
    sendMessage: "Send Message",
  },
  api: {
    errors: {
      [API_GLOBAL_ERROR]:
        "An error occured. Please try again later. If the problem persists, please contact the administrator.",
      [NOT_FOUND_ERROR]: "The requested resource was not found",
      [BAD_REQUEST_ERROR]:
        "The request could not be understood by the server due to malformed syntax or missing information.",
      [FORBIDDEN_ERROR]:
        "You are not authorized to access this resource. Please contact the administrator.",
    },
  },
};
