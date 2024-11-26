import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        username: credentials.username,
        password: credentials.password,
      });
  
      const token = response.data?.token;
  
      // Gelen token'ın varlığını ve formatını kontrol edin
      if (!token || token.split(".").length !== 3) {
        console.error("Geçersiz token formatı:", token);
        alert("Geçersiz token alındı. Lütfen tekrar deneyin.");
        return;
      }
  
      // Doğru formatta bir token varsa decode etmeden önce login işlemini yap
      login(token); // login fonksiyonuna token gönderiliyor
      navigate("/accounts");
    } catch (error) {
      console.error("Login işlemi başarısız:", error);
      alert("Kullanıcı adı veya şifre hatalı.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
