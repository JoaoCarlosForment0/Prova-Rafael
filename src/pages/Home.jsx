import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breed/akita/images/random/8")
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="flex flex-col items-center w-screen mb-5">
      <div className="flex flex-col justify-center items-center w-screen h-[50vh] bg-blue-500">
        <h1 className="font-bold text-5xl">Bem vindo!</h1>
      </div>
      <h1 className="mt-10 mb-10 text-3xl font-mono">
        Alguns de nossos companheiros:{" "}
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5">
        {data &&
          data.message.map((message, index) => {
            return (
              <div className="flex flex-col items-center w-[300px] h-[350px] bg-gray-200 rounded-2xl gap-5">
                <img
                  key={index}
                  src={message}
                  alt={message}
                  className=" min-w-60 max-w-60 min-h-50 max-h-50 rounded-2xl mt-5"
                />
                <div className="flex flex-col w-[80%] gap-2 mb-5">
                  <h1 className="text-black">
                    <span className="font-bold">Nome:</span> Tobi
                  </h1>
                  <h1 className="text-black">
                    <span className="font-bold">Raça:</span> Akita
                  </h1>
                  <h1 className="text-black">
                    <span className="font-bold">Tutor:</span> Luís Gustavo Días
                  </h1>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
