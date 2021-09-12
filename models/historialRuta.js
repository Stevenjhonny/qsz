import mongoose from "mongoose";
const historialRutaSchema = new mongoose.Schema({
    lugarOrigen: { type: String},
    lugarDestino: { type: String},
    dineroPagado: { type: Number},
    idPasajero: {  type: mongoose.Schema.ObjectId, ref: 'UsuarioAplicacion'},
    idConductor: { type: mongoose.Schema.ObjectId, ref: 'UsuarioAplicacion'},
    estadoViaje: { type: String, default:"0"},
    feedbackCliente:{type: String, default:""},
    feedbackConductor:{ type: String, default:""},
    createAt: { type: Date, default: Date.now }
})
export default mongoose.model('historialRuta', historialRutaSchema);