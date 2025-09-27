import express from "express";
import dotenv from "dotenv";
import basketRoute from "./routes/basketRoutes.js";
import createBasketTable from "./data/createBasketTable.js";
import pool from "./config/db.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

createBasketTable();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.use('/api', basketRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/checkdb", async (req, res)=> {
  const client = await pool.connect();
  const result = await client.query ("SELECT current_database()");
  res.json ({database: result.rows[0]});
  client.release();

});