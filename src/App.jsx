import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breed/akita/images/random/3")
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="flex flex-row">
        {data &&
          data.message.map((message, index) => {
            return (
              <img
                key={index}
                src={message}
                alt={message}
                className=" max-w-50"
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
