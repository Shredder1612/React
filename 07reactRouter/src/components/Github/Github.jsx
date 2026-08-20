import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Shredder1612")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       setData(data)
  //   })
  // }, [])

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-between">
      <img src={data.avatar_url} width={300} alt="" className="rounded-lg"/>
      <div>
        Name: {data.name}
        <br />
        Email: {data.email}
        <br />
        Location: {data.location}
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Shredder1612");
  return response.json();
};
