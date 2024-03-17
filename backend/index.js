const express = require('express');
const app = express();
const PORT = 8000;
const userRoutes = require('./routes/users')
const journalRoutes = require('./routes/journals')
const chatbotRoutes = require('./routes/chatbot');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/journals', journalRoutes);
app.use('/chatbot', chatbotRoutes);

app.get('/', (req, res) => {
    res.send('Test route for backend.');
});

// Note: frontend server running on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

