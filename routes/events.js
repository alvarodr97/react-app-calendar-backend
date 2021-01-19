const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt')
const router = Router();
const { getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events')
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

// Todas tienen que pasar por la validacion del JWT
// Aplica el middleware a todo lo que se encuentre debajo
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear eventos
router.post('/', 
            [
                check('title', 'El titulo es obligarotio').not().isEmpty(),
                check('start', 'Fecha de inicio obligatoria').custom(isDate),
                check('end', 'Fecha de finalizacion obligatoria').custom(isDate),
                validarCampos
            ], 
            crearEvento);

// Actualizar evento
router.put('/:id', 
            [], 
            actualizarEvento);

// Borrar evento
router.delete('/:id', 
            [], 
            eliminarEvento);

module.exports = router;