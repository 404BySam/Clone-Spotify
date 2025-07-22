import { Router } from "express";
import { getAdmin } from "../controller/admin.controller.js";

const router = Router();

// on ajoute des controllers donc plus besoin :

// router.get("/", (req, res) => {
//   res.send("Chemin d'accès Admin");
// });

router.get("/", getAdmin);

export default router;
