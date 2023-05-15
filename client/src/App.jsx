import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);
  const [isFormEdited, setIsFormEdited] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
  });

  return (
    <>
      <Header />
      <Hero
        setData={setData}
        defaultValues={defaultValues}
        setDefaultValues={setDefaultValues}
        isFormEdited={isFormEdited}
        setIsFormEdited={setIsFormEdited}
      />
      <Table
        data={data}
        setData={setData}
        setDefaultValues={setDefaultValues}
        setIsFormEdited={setIsFormEdited}
      />
    </>
  );
}

export default App;
