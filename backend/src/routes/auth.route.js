import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Chemin d'accès login");
});
export default router;
