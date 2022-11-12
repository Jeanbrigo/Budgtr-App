const express = require('express'); // backend framework
const app = express();
const budgets = require("./models/budgets")
app.use("/static", express.static("public"));
const PORT = 3000;

// Index Route
app.get('/budgets', (req,res)=>{
    res.render('index.ejs', 
    {
        allBudget:budgets
    });
});

// Show Route

app.get("/budgets/:index", (req,res)=>{
    res.render("show.ejs", {
        allBudget:budgets,
        index: req.params.index
    });
});

// New Route


// Create Route



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});