const express =  require ('express');
let mysql = require ('mysql2');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.post('/mahasiswa', (req, res) => {

    const data = req.body;
    console.log('Data diterima:', data);

    res.status(201).json({
        message: 'Data mahasiswa berhasil diterima!',
        data: data
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3309',
    password: '200421D@m2121',
    database: 'mahasiswa',
})

db.connect((err) => {
    if(err){
        console.log('error connecting to Mysql: ' +err.stack);
        return;
    }
    console.log('Connected t0 Mysql succesfully');
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})