import styled from 'styled-components';

export const Style_cadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }

  label {
    margin-bottom: 5px;
    color: #555;
  }

  input {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  p {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }

  p.success {
    color: green;
  }

  p.error {
    color: red;
  }

  .btn-Registrar {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  
`;

export default Style_cadastro;