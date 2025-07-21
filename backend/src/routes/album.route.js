import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Chemin d'accès des albums");
});
export default router;
