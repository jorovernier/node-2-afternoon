const express = require('express');
const app = express();

const {createMessage, readMessage, updateMessage, deleteMessage} = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))


app.post('/api/messages', createMessage)

app.get('/api/messages', readMessage)

app.put('/api/messages/:id', updateMessage)

app.delete('/api/messages/:id', deleteMessage)


const port = 3001
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})