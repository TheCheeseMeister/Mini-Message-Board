const db = require("../db/queries");

async function getIndex(req, res) {
    const messages = await db.getMessages();

    res.render("index.ejs", { title: "Mini Messageboard", messages: messages });
}

async function addNewMessage(req, res) {
    let author = req.body.author;
    let messageText = req.body.message;
    let date = new Date();

    await db.insertMessage(messageText, author, date);

    res.redirect("/");
}

async function viewMessageGet(req, res) {
    let index = Number(req.params.id);
    let message = await db.findMessage(index);
    message = message[0];

    res.render("message.ejs", { message: message });
}

async function viewMessagePost(req, res) {
    let index = Number(req.params.id) + 1;

    res.redirect(`/message/${index}`);
}

async function clearMessages(req, res) {
    await db.clearMessages();

    res.redirect("/");
}

module.exports = {
    getIndex,
    addNewMessage,
    viewMessageGet,
    viewMessagePost,
    clearMessages,
};