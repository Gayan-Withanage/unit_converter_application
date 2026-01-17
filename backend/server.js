const express = require("express");
const app = express();

app.use(express.json());

// Length conversion
app.post("/convert/length", (req, res) => {
  const { value, from, to } = req.body;
  let result;

  if (from === "meter" && to === "kilometer") result = value / 1000;
  else if (from === "kilometer" && to === "meter") result = value * 1000;
  else return res.status(400).json({ message: "Invalid length conversion" });

  res.json({ result });
});

// Temperature conversion
app.post("/convert/temperature", (req, res) => {
  const { value, from, to } = req.body;
  let result;

  if (from === "celsius" && to === "fahrenheit") result = (value * 9) / 5 + 32;
  else if (from === "fahrenheit" && to === "celsius") result = ((value - 32) * 5) / 9;
  else return res.status(400).json({ message: "Invalid temperature conversion" });

  res.json({ result });
});

// Weight conversion
app.post("/convert/weight", (req, res) => {
  const { value, from, to } = req.body;
  let result;

  if (from === "kg" && to === "gram") result = value * 1000;
  else if (from === "gram" && to === "kg") result = value / 1000;
  else return res.status(400).json({ message: "Invalid weight conversion" });

  res.json({ result });
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(5000, () => console.log("Server running on port 5000"));

