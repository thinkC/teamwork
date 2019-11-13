import express from 'express';

const app = express();
//const process = process;
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Teamwork Project!')
});

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})