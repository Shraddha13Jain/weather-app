const express=require('express');
const app=express();
const path =require('path');
const hbs=require('hbs');
const port=process.env.PORT || 3000;
app.set('view engine','hbs');
//hbs - handle bars
app.set('views', path.join(__dirname,'/templates/views')); //provide the path of the views directory
hbs.registerPartials(path.join(__dirname,'/templates/partials')); //use to register the partials
//app.set('views', path.join(__dirname, '/templates/views'));

app.use(express.static(path.join(__dirname,"/public")));

app.get('/',(req,res)=> 
{
    res.render('index')
})
app.get('/about',(req,res)=> 
{
    res.send("We update you with weather report")
})
app.get('/weather',(req,res)=> 
{
    res.render('weather');
})
app.get('*',(req,res)=> 
{
    res.render('404error');
})


app.listen(port, () =>
{
    console.log("Running....");
})