import express from 'express';
import userRoutes from './routes/users.js'
import journalRoutes from './routes/journals.js'
import chatbotRoutes from './routes/chatbot.js'
import * as dotenv from "dotenv";

const app = express();
const PORT = 8000;
dotenv.config({ path: "./.env.local" });

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

