import express from 'express';
import Student from './controllers/Student';

const app = express();

app.use(express.json());

app.post('/api/v1/students', Student.create);
app.get('/api/v1/students', Student.getAll);
app.get('/api/v1/students/:id', Student.getOne);
app.put('/api/v1/students/:id', Student.update);
app.delete('/api/v1/students/:id', Student.delete);

app.listen(3000);
console.log('Server running on port ', 3000);