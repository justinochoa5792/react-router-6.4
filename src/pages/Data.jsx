import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const Data = () => {
  const dogUrl = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <h1>Data</h1>
      <img src={dogUrl} alt="dog" />
    </div>
  );
};

export default Data;

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();

  return dog.url;
};
