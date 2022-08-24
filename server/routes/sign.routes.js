const signController = require("../controllers/sign.controller");

module.exports = (app) => {
  app.get("/api/signs", signController.getSigns);
  app.get("/api/signs/:id", signController.getSignById);
  app.post("/api/signs", signController.createSign);
  app.put("/api/signs/:id", signController.updateSign);
  app.delete("/api/signs/:id", signController.deleteSign);
};
