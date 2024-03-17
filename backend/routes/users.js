import express from 'express';
const router = express.Router();

// GET /users
router.get('/', (req, res) => {
  res.send('GET /users route, user information will display here');
});

router.get('/:id', (req, res) => {
    res.send('GET /users/:id route, parameterized user information will display here');
});

// POST /users
router.post('/create_user', (req, res) => {
  res.send('POST /users route, user information will be added here');
});

export default router;