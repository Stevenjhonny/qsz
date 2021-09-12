import {
    Router
} from "express"
import {
    historialRutaNuevaRuta,
    historialRutaBuscarConductor,
    historialRutaRefrescarConductor,

    historialRutaListadoPasajeros,
    historialRutaPasajeroFeedback,
    historialRutaConductorFeedback,
    aceptarViajeidConductor,
    historialRutaBuscarPasajero,
} from "../controllers/historialRuta.js";

const router = Router();
router.post('/nuevaruta', historialRutaNuevaRuta);
router.post('/buscarconductor/:id', historialRutaBuscarConductor);
router.post('/buscarpasajero', historialRutaListadoPasajeros);
router.post('/refrescarpasajero', historialRutaBuscarPasajero);
router.post('/refrescarconductor/:id', historialRutaRefrescarConductor);
router.post('/conductoraceptaviaje', aceptarViajeidConductor);
router.post('/pasajero/feedback', historialRutaPasajeroFeedback);
router.post('/conductor/feedback', historialRutaConductorFeedback);

export default router;