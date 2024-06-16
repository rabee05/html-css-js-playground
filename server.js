import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let serverJustStarted = true;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    /* options */
});
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('trust proxy', 1);
app.use(cookieParser());
app.use('/static', express.static('public'));

// This is to update the page on restart
io.on('connection', (socket) => {
    if (serverJustStarted) {
        socket.emit('reload');
        serverJustStarted = false;
    }
});

app.get('/', (req, res) => {
    try {
        res.render(path.join(__dirname, 'public', 'index'), {});
    } catch (error) {
        console.log(error.message);
    }
});

httpServer.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
