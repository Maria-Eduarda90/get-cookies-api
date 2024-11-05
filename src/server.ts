import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/salvar-cookies', (req, res) => {
    const cookies = req.body;

    const filePath = path.join(__dirname, 'cookies.txt');

    fs.writeFile(filePath, JSON.stringify(cookies, null, 2), (err) => {
        if (err) {
            console.error('Erro ao salvar cookies:', err);
            res.status(500).json({ message: 'Erro ao salvar cookies' });
        }
        else {
            console.log('cookies: ', cookies);
            console.log('Cookies salvos com sucesso!');
            res.json({ message: 'Cookies salvos com sucesso!' });
        }
    })
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost${PORT}`)
})