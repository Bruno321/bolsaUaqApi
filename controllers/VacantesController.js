//Models
const Vacantes = require("../models/Vacantes");

/* Regresa todas las vacantes */
exports.getVacante = async (req,res,next) => {
    try {
        const vacantes = await Vacantes.findAll();
        // TODO que tambien regrese el nombre de la empresa
        return res.status(200).json({ message: vacantes });
    } catch (error) {
        return res
        .status(401)
        .json({ message: "Error al obtener las vacantes" }); 
    }
}

/* Regresa el archivo PDF */
exports.getVacantePdf = async (req,res,next) => {
    // return 
}

/* Crea una vacante */
exports.postVacante = async (req,res,next) => {
    const data = req.body.data;

}

/* Cambia el status de una vacante, cualquier int diferente de 0,1,2 regresa error */
exports.patchVacante = async (req,res,next) => {
    // return 
}