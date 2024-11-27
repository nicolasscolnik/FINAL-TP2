export const validarZona = (req, res, next) => {
    const zona = parseInt(req.body.zona);

    if ([1, 2, 3, 4].includes(zona)) {
      next();
    } else {
      res.status(400).json({ mensaje: 'Zona no válida. Solo Ingresar 1, 2, 3 o 4' });
    }
  };
  

  