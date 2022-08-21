import express from 'express';
import cors from 'cors';
import { UserDto } from '@shadowvzs/dto/UserDto';

const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    const userDto: UserDto = {
        id: 'someRandomThing',
        firstName: 'Little',
        lastName: 'Joe',
        email: 'little_joe@gmail.com',
        createAt: new Date(),
        createdBy: 'someUserId',
    }
    res.send(JSON.stringify(userDto))
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});