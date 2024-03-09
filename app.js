import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservation.js";
const port = process.env.PORT || 4000;
const app = express();
app.options('*', cors());

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: "https://brahmins.netlify.app",
    methods: ["POST"],
    credentials: true,
  })
);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

dbConnection();
app.use(errorMiddleware)
app.use("/api/reservation", reservationRouter);

app.listen(port, ()=>{
  console.log(`SERVER HAS STARTED AT PORT ${port}`);
})

export default app;
