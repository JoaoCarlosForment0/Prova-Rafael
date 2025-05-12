import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className=" flex flex-row justify-end items-center w-screen h-[50px] bg-blue-500">
        <Link to="/Login" className="mr-10 font-medium text-lg">Entrar</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
