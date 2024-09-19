import Card from "./components/card";
import { useEffect, useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchNewAdvice = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNewAdvice();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Card adviceId={data?.slip?.id} content={data?.slip?.advice}>
          <Button
            imgSrc="/icon-dice.svg"
            altText="icon-dice"
            onClick={fetchNewAdvice}
            className="absolute -bottom-8"
          ></Button>
        </Card>
      )}
    </>
  );
}
