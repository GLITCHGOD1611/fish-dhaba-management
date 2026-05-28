const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;

const userRouter = require('./routes/UserRout');
const tableRouter = require('./routes/TableRout');
const orderRouter = require('./routes/OrderRout');
const menuRouter = require('./routes/menuRout');

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/users', userRouter);
app.use('/api/table', tableRouter);
app.use('/api/order', orderRouter);
app.use('/api/menu', menuRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});