import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Chemin auth");
});
export default router;
