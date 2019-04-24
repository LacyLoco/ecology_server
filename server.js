const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const pointsRouter = require('./router/recpoints');
const articlesRouter = require('./router/articles');
const recycleTextRouter = require('./router/recycletext');
const tipsRouter = require('./router/tips');
const config = require('./config');

//используем бибилиотеку express
let app = express();

//создание сервера
const server = require('http').createServer(app);  

// parse application/x-www-form-urlencoded
// анализирует текст в виде URL-кодированных данных и предоставляет 
//результирующий объект (содержащий ключи и значения) для req.body. 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// анализирует текст как JSON и req.body результирующий объект на req.body.
app.use(bodyParser.json());

app.use('/v1/', pointsRouter);
app.use('/v1/', articlesRouter);
app.use('/v1/', recycleTextRouter);
app.use('/v1/', tipsRouter);
app.use('/v1/', router);

//свой ip компьютера,  ifconfig | grep inet
let ip = "127.0.0.1";
//let ip = "192.168.1.204";

server.listen(8282, ip, () => {
	console.log('Listening on port 8282');
});