import express, { Request, Response } from "express";

const app = express();

app.get("/users", (req: Request, res: Response) => res.json(["Eduardo"]));

app.listen(3333);
