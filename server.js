const express = require('express'); // backend framework
const app = express();
const budgets = require("./models/budgets")
app.use("/static", express.static("public"));
app.use(express.urlencoded({extended:true}))
const PORT = 3000;
const methodOverride = require("method-override") // import method override

app.get("/", (req,res)=>{
    res.redirect('/budgets')
})

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

// New Item Post Route
app.post('/budgets', (req,res)=>{
    budgets.push(req.body);
    res.redirect("/budgets") // redirect back to index page
})

// Show Route

app.get("/budgets/:index", (req,res)=>{
    res.render("show.ejs", {
        allBudget:budgets,
        index: req.params.index
    });
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});