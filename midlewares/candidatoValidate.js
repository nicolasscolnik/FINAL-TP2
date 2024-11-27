export const validarCandidato = (req, res, next) => {
    const candidato = req.body.candidato;

    if (['a', 'b', 'c', 'enblanco', 'A', 'B', 'C', 'ENBLANCO'].includes(candidato)) {
        req.body.candidato = candidato.toUpperCase();
        next();
    } else {
        res.status(400).json({ mensaje: 'Candidato no válido. Solo Ingresar "A", "B", "C" o "ENBLANCO"' });
    }
};
