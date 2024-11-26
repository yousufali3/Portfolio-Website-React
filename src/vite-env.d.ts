/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_SERVICE: string;
    TEMPLATE_ID: string; // Add other env variables as needed
    USER_ID: string;
  }
}
