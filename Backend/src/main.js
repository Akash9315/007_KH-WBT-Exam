const express = require("express");
const app = express();
app.use(express.json());

const { addMessage, readMessages } = require("./message");

app.listen(5000, () => console.log("Server Started"));

app.get("/getMessages", async (req, res) => {
  const list = await readMessages();
  res.json(list);
});

app.post("/postMessage", async (req, res) => {
  let list = req.body;
  await addMessage(list);
  res.json({ confirmmation: "MEssage Added Successfuly" });
});
