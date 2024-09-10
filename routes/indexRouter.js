const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

indexRouter.get("/message/:id", (req, res) => {
    let index = Number(req.params.id) - 1;
    let message = messages[index];

    res.render("message.ejs", { message: message });
});

indexRouter.get("/", (req, res) => {
    res.render("index.ejs", { title: "Mini Messageboard", messages: messages });
});

indexRouter.post("/new", (req, res) => {
    let author = req.body.author;
    let messageText = req.body.message;

    messages.push({ text: messageText, user: author, added: new Date() });

    res.redirect("/");
});

indexRouter.post("/message/:id", (req, res) => {
    let index = Number(req.params.id) + 1;

    res.redirect(`/message/${index}`);
});

module.exports = indexRouter;