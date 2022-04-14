import express from "express"

const port = 3001

const app = express()

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index.ejs')
});



app.listen(port, ()=> {
    console.log(`estou na porta ${port}` )
});