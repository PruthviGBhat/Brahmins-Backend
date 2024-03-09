import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservation.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: ["POST"],
    credentials: true,
  })
);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

dbConnection();
app.use(errorMiddleware)
app.use("/api/reservation", reservationRouter);

app.listen(process.env.PORT, ()=>{
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})

export default app;