const { Router } = require("express");
const controller = require("../controllers/controller");
const indexRouter = Router();

indexRouter.get("/", controller.getIndex);
indexRouter.post("/new", controller.addNewMessage);
indexRouter.get("/message/:id", controller.viewMessageGet);
indexRouter.post("/message/:id", controller.viewMessagePost);
indexRouter.get("/clear", controller.clearMessages);

module.exports = indexRouter;