import axios from "./util/axios.customize";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`);
      console.log(res);
    };
    fetchHelloWorld();
  }, []);
  return <>hello from frontend 1</>;
}

export default App;
