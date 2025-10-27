let express = require("express");
let cors = require("cors");
let {users,timesheet} = require("./user");

let app = express();

app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

// Login route
app.post("/login", (req, res) => {
  let { username, password } = req.body;

  let user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  return res.json({ message: "Login successfully",data:user });
});

app.get("/timesheet",(req,res)=>{
  if (timesheet.length === 0) {
    return res.status(404).json({ message: "No timesheet found for this user" });
  }

  res.json(timesheet);
});




app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});
