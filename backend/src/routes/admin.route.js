import { Router } from "express";
import { createSong } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

// on ajoute des controllers donc plus besoin :

// router.get("/", (req, res) => {
//   res.send("Chemin d'accès Admin");
// });

router.get("/", protectRoute, requireAdmin, createSong);

export default router;
