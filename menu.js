const http = require('http');

const server = http.createServer(function (req,res) {
    const menuList = [
        {nome: 'Carne de Sol', 'preco': 25.00, descricao: 'arroz, tropero, vinagrete e fritas'},
        {nome: 'Almôndegas', 'preco': 22.00, descricao: 'arroz, batata frita, feijão, puré'},
        {nome: 'Linguiça Toscana', 'preco': 30.00, descricao: 'arroz, farofa de ovo e couve'},
        {nome: 'Filê de Tilapia', 'preco': 25.00, descricao: 'arroz, batata frita, feijão, pure'},
        {nome: 'Filê grelhado', 'preco': 35.00, descricao: 'arroz, legumis, feijão'},
        {nome: 'Bisteca', 'preco': 25.00, descricao: 'arroz, batata frita, feijão, couve, salada'},

            //const data = JSON.stringify(menuList);
                res.JSON(menuList),
            
    ]    
});

server.listen(5555, function()
{console.log("ouvindo no port 5555");

})
