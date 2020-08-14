//servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {
    pageLanding,
    pageStudy, 
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar o nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//início e configuração do servidor
server
//receber dados do req.body
.use(express.urlencoded({extended:true}))
//configurar arquivos estáticos (CSS, Scripts, Images)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)