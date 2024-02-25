const express = require('express');
const users = require('./routes/users');

const app = express();

app.use('/users', users);
app.use('/journals', journals);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});