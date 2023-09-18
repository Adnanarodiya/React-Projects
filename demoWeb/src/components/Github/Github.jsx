import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Adnanarodiya")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="bg-gray-600 text-white italic p-4 text-center text-3xl">
        GitHub Followers : {data.followers}
      </div>
      <div
        className="flex justify-center my-8
      "
      >
        <img
          className="rounded-3xl"
          src={data.avatar_url}
          alt="Git Pictuer"
          width={300}
          height={300}
        />
      </div>
    </>
  );
};

export default Github;
