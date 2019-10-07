var messages = [];
var id = 0;

module.exports = {
    createMessage: (req,res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },
    readMessage:(req,res) => {
        res.status(200).send(messages);
    },
    updateMessage:(req,res) => {
        const {text} = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages);
    },
    deleteMessage: (req,res) => {
        const deleteID = req.params.id;
        const index = messages.findIndex(message => message.id == deleteID);
        
        if(index !== -1){
            messages.splice(index, 1)
            res.status(200).send(messages);
        } else {
            res.status(404).send('Delete failed.')
        }
    }
}