import "../index.css"

const Login = () => {
  return (
    <div className="flex flex-row justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-screen w-[60%] rounded-4xl m-5">
        <h1>Oi</h1>
      </div>
      <form className="flex flex-col justify-center items-center h-screen w-[40%] bg-white">
        <input type="text" name="email" id="email" placeholder="Digite seu E-mail" className="inputs" />
        <input type="password" name="senha" id="senha" placeholder="Digite sua senha" className="inputs"/>
      </form>
    </div>
  );
};
export default Login;
