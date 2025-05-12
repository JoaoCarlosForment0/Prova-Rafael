import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const BD = { email: "Joao", password: "Joao123" };
  const navigate = useNavigate();
  function verificar() {
    if (email === BD.email && password === BD.password) {
      navigate("/Dashboard");
    }else{
      console.log(email, BD.email, password, BD.password)
    }
  }

  return (
    <div className="flex flex-row justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-screen w-[60%] bg-blue-500 gap-3">
        <h1 className="font-medium text-3xl">
          Faça parte disso tudo você também
        </h1>
        <h1 className="text-lg">Entre agora mesmo</h1>
      </div>
      <form className="flex flex-col justify-center items-center h-screen w-[40%] bg-white gap-5">
        <h1 className=" text-black text-3xl font-medium">Login</h1>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder="Digite seu E-mail"
          className="inputs focus:outline-none w-[80%] h-[50px] bg-gray-200 rounded-lg text-xl p-2"
        />
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          className="inputs focus:outline-none w-[80%] h-[50px] bg-gray-200 rounded-lg text-xl p-2"
        />
        <button
          type="button"
          onClick={() => {verificar()}}
          className="w-[80%] h-[50px] bg-blue-500 rounded-lg text-xl font-medium cursor-pointer"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
export default Login;
