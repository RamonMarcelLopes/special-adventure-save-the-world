import express from "express"
import path from 'path'

const port = 3001

let __dirname = path.resolve(path.dirname('')) 

const app = express()

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('index.ejs')
});

const bases =[
{
    id: 1,
    nome: "floresta petrea",
    descricao: "a base mais facil",
    preço: "50.00"
},
{
    id: 2,
    nome: "Plankerton",
    descricao: "a base facil",
    preço: "50.00"
},
{
    id: 3,
    nome: "Canny Valley",
    descricao: "a base media",
    preço: "50.00"
},
{
    id: 4,
    nome: "Twine Peaks",
    descricao: "a base mais dificil ",
    preço: "50.00"
},

]


app.listen(port, ()=> {
    console.log(`estou na porta ${port}` )
});