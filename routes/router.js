import { Router } from "express";
import votoRoutes from "./votoRoutes.js";
import { validarCandidato } from "../midlewares/candidatoValidate.js";
import { validarZona } from "../midlewares/zonaValidate.js";



const router = Router();

router.use("/votos", votoRoutes)
router.use(validarCandidato)
router.use(validarZona)

export default router;
