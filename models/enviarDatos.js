import mongoose from "mongoose";
const enviarDatosSchema = new mongoose.Schema({
    btcOrigen: { type: String},
    monto: { type: String},
    btcDestino: { type: String},
})
export default mongoose.model('enviarDato', enviarDatosSchema);
