import { Router } from "express";
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteSong,
} from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

// on ajoute des controllers donc plus besoin :

// router.get("/", (req, res) => {
//   res.send("Chemin d'accès Admin");
// });
router.use("/check", protectRoute, requireAdmin);

router.get("/check", checkAdmin);

router.get("/songs", createSong);
router.delete("/songs/ :id", deleteSong);

router.post("/albums", createAlbum);
router.delete("/albums/:id", createAlbum);

export default router;
