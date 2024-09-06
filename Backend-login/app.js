require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const PORTA = 5000;
const db_user = process.env.DB_USER;
const db_Senha = process.env.DB_SENHA;

const User = require('./models/User');
const e = require('express');

app.get('/', (req, res) => {
    res.status(200).json({ message: 'bão?' });
});

app.post('/autenticar/registrar', async (req, res) => {
    const { nome, email, senha, comfirmarSenha } = req.body;

    if (nome == null || nome === '') {
        return res.status(400).json({ message: 'Nome é obrigatório' });
    }

    if (email == null || email === '') {
        return res.status(400).json({ message: 'email é obrigatório' });
    }

    if (senha == null || senha === '') {
        return res.status(400).json({ message: 'senha é obrigatória' });
    }

    if (senha !== comfirmarSenha) {
        return res.status(400).json({ message: 'As senhas não iguais' });
    }

    const usuarioExistente = await User.findOne({ email: email });

    if (usuarioExistente) {
        return res.status(400).json({ message: 'Email já cadastrado, por favor utilize um outro email' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const senhaHash = await bcrypt.hash(senha, senhaCriptografada);

    const usuario = new User({
        nome,
        email,
        senha: senhaHash,
    })
    try {
        await usuario.save();
        res.status(200).json({ message: 'Usuario criado com sucesso!' });
    }
    catch (erro) {
        console.log(erro)

        res.status(400).json({ message: 'Aconteceu um erro  no servidor, tente novamente mais tarde!' });
    }
});

app.post('/autenticar/login', async (req, res) => {
    const { email, senha } = req.body;

    if (email == null || email === '') {
        return res.status(400).json({ message: 'email é obrigatório' });
    }

    if (senha == null || senha === '') {
        return res.status(400).json({ message: 'senha é obrigatória' });
    }
    const usuario = await User.findOne({ email: email });
    if (usuario == null || usuario === '') {
        return res.status(400).json({ message: 'Usuario não encontrado' });

    }

    const checarSenha = await bcrypt.compare(senha, usuario.senha);

    if (checarSenha === false) {
        return res.status(400).json({ message: 'Senha incorreta' });
    }

    try {
        const seguranca = process.env.SECRET;

        const token = jwt.sign({ id: usuario._id },
            seguranca,
        );
        res.status(200).json({ message: 'Login efetuado com sucesso', token });
    }
    catch (erro) {
        res.status(400).json({ message: 'Aconteceu um erro no servidor, tente novamente mais tarde!' });
    }
});

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ message: 'JSON inválido' });
    }
    next();
});

mongoose.connect(`mongodb+srv://${db_user}:${db_Senha}@cluster0.ehvie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(PORTA, () => {
            console.log(`Servidor rodando na porta http://localhost:${PORTA}`);
        });
        console.log('Conectado ao banco de dados');
    })
    .catch((erro) => {
        console.error('Erro ao conectar ao banco de dados:', erro.message);
    });