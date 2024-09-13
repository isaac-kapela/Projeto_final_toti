// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams, Link } from 'react-router-dom';

// const MenuManager = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [form, setForm] = useState({
//     nome: '',
//     descricao: '',
//     preco: '',
//     categoria: '',
//     imagem: '',
//     disponibilidade: true
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:8000/')
//       .then(response => {
//         setMenuItems(response.data);
//       })
//       .catch(error => {
//         console.error('Erro ao buscar itens do menu:', error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prevForm => ({ ...prevForm, [name]: value }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (isEditing) {
//   //     axios.put(`http://localhost:8000/editar/${editId}`, form)
//   //       .then(() => {
//   //         setMenuItems(menuItems.map(item => item.id === editId ? form : item));
//   //         resetForm();
//   //       })
//   //       .catch(error => {
//   //         console.error('Erro ao editar item:', error);
//   //       });
//   //   } else {
//   //     axios.post('http://localhost:8000/criar', form)
//   //       .then(response => {
//   //         setMenuItems([...menuItems, response.data]);
//   //         resetForm();
//   //       })
//   //       .catch(error => {
//   //         console.error('Erro ao adicionar item ao menu:', error);
//   //       });
//   //   }
//   // };

//   // const handleEdit = (id) => {
//   //   const item = menuItems.find(item => item.id === id);
//   //   setForm(item);
//   //   setIsEditing(true);
//   //   setEditId(id);
//   // };

//   // const handleDelete = (id) => {
//   //   axios.delete(`http://localhost:8000/excluir/${id}`)
//   //     .then(() => {
//   //       setMenuItems(menuItems.filter(item => item.id !== id));
//   //     })
//   //     .catch(error => {
//   //       console.error('Erro ao excluir item:', error);
//   //     });
//   // };

//   // const resetForm = () => {
//   //   setForm({
//   //     nome: '',
//   //     descricao: '',
//   //     preco: '',
//   //     categoria: '',
//   //     imagem: '',
//   //     disponibilidade: true
//   //   });
//   //   setIsEditing(false);
//   //   setEditId(null);
//   // };

//   return (
//     <div>
//       {/* <h1>Gerenciar Menu</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
//         <input type="text" name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} />
//         <input type="number" name="preco" placeholder="Preço" value={form.preco} onChange={handleChange} required />
//         <input type="text" name="categoria" placeholder="Categoria" value={form.categoria} onChange={handleChange} />
//         <input type="text" name="imagem" placeholder="URL da Imagem" value={form.imagem} onChange={handleChange} />
//         <button type="submit">{isEditing ? 'Salvar' : 'Adicionar'}</button>
//         {isEditing && <button type="button" onClick={resetForm}>Cancelar</button>}
//       </form> */}
//       <h2>Itens do Menu</h2>
//       <ul>
//         {menuItems.map(item => (
//           <li key={item.id}>
//             <h3>{item.nome}</h3>
//             <p>{item.descricao}</p>
//             <p>Preço: {item.preco}</p>
//             {/* <button onClick={() => handleEdit(item.id)}>Editar</button>
//             <button onClick={() => handleDelete(item.id)}>Excluir</button> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MenuManager;