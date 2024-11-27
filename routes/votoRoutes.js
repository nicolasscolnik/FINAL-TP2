import { Router } from "express";
import votoController from "../controllers/votoController.js";
import { validarCandidato } from "../midlewares/candidatoValidate.js";
import { validarZona } from "../midlewares/zonaValidate.js";


const votoRoutes = Router();
const controller = new votoController();

votoRoutes.post("/", validarCandidato, validarZona, controller.create);
votoRoutes.get("/", controller.getAll);

export default votoRoutes;
