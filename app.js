import express from 'express';

const app = express();

app.use(express.static('public'));

const PORT = 3007;

app.get('/', (req, res) => {

    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit-form', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Start the server and make it listen on the port 
// specified above
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});