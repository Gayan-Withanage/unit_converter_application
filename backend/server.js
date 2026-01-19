const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Unit Converter API is running 🚀");
});

// Length conversion
app.post("/convert/length", (req, res) => {
  const { value, from, to } = req.body;

  if (typeof value !== "number") {
    return res.status(400).json({ message: "Value must be a number" });
  }

  let result;

  if (from === "meter" && to === "kilometer") {
    result = value / 1000;
  } else if (from === "kilometer" && to === "meter") {
    result = value * 1000;
  } else {
    return res.status(400).json({ message: "Invalid length conversion" });
  }

  res.json({ result });
});

// ⭐ SERVER START (DEPLOY SAFE)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

