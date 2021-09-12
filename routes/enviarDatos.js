import { Router } from "express"
import   enviarDatosPost  from "../controllers/enviarDatos.js";

const router = Router();
router.post('/', enviarDatosPost);

export default router;