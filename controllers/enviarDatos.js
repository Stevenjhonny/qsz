import enviarDato from '../models/enviarDatos.js'

const enviarDatosPost = async(req, res)=>{
    console.log(req.body);
    const {btcOrigen, monto, btcDestino}=req.body;
    console.log(req.body);
    const enviardatos= enviarDato({btcOrigen, monto, btcDestino});

    enviardatos.save();
    return res.status(200).json({ enviardatos }); 
}

export default enviarDatosPost;