const express = require('express'); // backend framework
const app = express();
const budgets = require("./models/budgets")
app.use("/static", express.static("public"));
const jsonParser = express.json()
app.use(jsonParser);
const PORT = 3000;

// Index Route
app.get('/budgets', (req,res)=>{
    res.render('index.ejs', 
    {
        allBudget:budgets
    });
});

// New Route
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs');
});

// Show Route

app.get("/budgets/:index", (req,res)=>{
    res.render("show.ejs", {
        allBudget:budgets,
        index: req.params.index
    });
});



// Create Route



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});