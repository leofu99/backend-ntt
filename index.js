import express, { Router } from "express";
import { appRouter } from "./src/routes.js";
import cors from "cors";

const App = express();
const PORT = process.env.PORT || 8089;
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(appRouter);

App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default App;
