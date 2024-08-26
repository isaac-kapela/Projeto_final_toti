    //App

    import express from 'express';
    import MenuController from './controllers/MenuController.js';

    const app = express();

    app.use(express.json());

    app.get('/', MenuController.index);

    app.post('/criar', MenuController.criar);

    export default app;
