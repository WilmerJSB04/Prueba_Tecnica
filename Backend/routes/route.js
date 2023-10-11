const express = require('express');
const router = express.Router();

// Importa los controladores
const { authController, valJwtController } = require('../controllers/auth/auth.controller');

// Defino la ruta
router.post('/auth', async (req, res, next) => {
  // Llama al controlador como middleware
  await authController(req, res, next);
});


router.post('/auth-token', async (req, res, next) => {
    // Llama al controlador como middleware
    valJwtController(req, res, next);
});

// Exporto el enrutador
module.exports = router;