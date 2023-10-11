// Importa los servicios
const { authService } = require('./auth.service');
const { verifyToken } = require("../../utils/handleToken");

// Controlador para la ruta '/auth'
const authController = async (req, res) => {
    try{
        // Llama al servicio correspondiente
        await authService(req.body);
        
        // Si todo está bien, retorna una respuesta con el código de estado 200
        return res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
    } catch (error) {
        // Manejo el error
        return res.status(500).json({ success: false, message: 'Ocurrió un error en el servidor' });
    }  
};

// Controlador para la ruta '/auth-token'
const valJwtController = async (req, res) => {
    try {
        // Verificamos el token temporal //
        const tokenJwt = await verifyToken(req.body.token);
        // Si el token es inválido o ha expirado, se envía una respuesta con el código de estado 401 //     
        if (!tokenJwt) return res.status(403).json({ success: false, message: 'Token inválido o expirado' });
        
        // Si todo está bien, se envía una respuesta con el código de estado 200 //
        return res.status(200).json({ success: true, message: '¡TODO OK!' });
        
    } catch (error) {
        // Manejo el error
        console.log(error)
        return res.status(500).json({ success: false, message: 'Ocurrió un error en el servidor' });
    }    
};

// Exporta los controladores
module.exports = {
    authController,
    valJwtController
};