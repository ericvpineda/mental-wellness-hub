// Test backend

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World2');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});