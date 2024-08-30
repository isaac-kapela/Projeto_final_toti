import React from "react";

function menulist() {
const menu = [
    {nome: 'Carne de Sol', preco: 25.00, descricao: 'arroz, tropero, vinagrete e fritas'};
    {nome: 'Almôndegas', preco: 22.00, descricao: 'arroz, batata frita, feijão, puré'};
    {nome: 'Linguiça Toscana', preco: 30.00, descricao: 'arroz, farofa de ovo e couve'};
    {nome: 'Filê de Tilapia', preco: 25.00, descricao: 'arroz, batata frita, feijão, pure'};
    {nome: 'Filê grelhado', preco: 35.00, descricao: 'arroz, legumis, feijão'};
    {nome: 'Bisteca', preco: 25.00, descricao: 'arroz, batata frita, feijão, couve, salada'};

]

const menulist = menu.map(menu => <h1>{menu.nome} {menu.preco} {menu.descricao}</h1>)

return (
    <div>
        {menulist}
    </div>
)

}

export default menulist;