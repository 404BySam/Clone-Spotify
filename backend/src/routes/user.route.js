import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  req.auth.userId;
  res.send("Bienvenue dans le Back");
});

export default router;
