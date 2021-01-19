/*
    Turas de Usuario / auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const {check} = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post('/new', 
            [ //MIDDLEWARE
                check('name', 'El nombre es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password debe de tener 6 caracteres minimo').isLength({min: 6}),
                validarCampos
            ], 
            crearUsuario);

router.post('/',
            [
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password debe de tener 6 caracteres minimo').isLength({min: 6}),
                validarCampos

            ],
            loginUsuario);

router.get('/renew', validarJWT ,revalidarToken);

module.exports = router;