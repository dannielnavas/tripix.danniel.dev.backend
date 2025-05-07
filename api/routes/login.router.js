import express from 'express';

const router = express.Router();
// importar el servicio

router.get('/', (req, res) => {
  res.json({
    message: 'login',
  });
});

export default router;
