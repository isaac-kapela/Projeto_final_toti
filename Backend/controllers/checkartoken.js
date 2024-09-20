import jwt from 'jsonwebtoken';

const checarToken = (req, res, next) => {
  const autenticarHeader = req.headers['authorization'];
  const token = autenticarHeader && autenticarHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  try {
    const seguranca = process.env.SECRET;
    jwt.verify(token, seguranca);
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Token inválido' });
  }
};

export default checarToken;