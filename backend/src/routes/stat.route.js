import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Chemin des stats");
});
export default router;
