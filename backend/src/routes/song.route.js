import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Chemin des sons");
});
export default router;
