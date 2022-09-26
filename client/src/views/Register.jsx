import React, { useEffect, useState } from "react";
import axios from "axios";
import Registration from "../components/RegistrationForm";
import GuardList from "../components/GuardList";

const Main = () => {
  const [guards, setGuards] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/guards")
      .then((res) => {
        setGuards(res.data.guards);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [guards]);

  const removeFromDom = guardId => {
    setGuards(guards.filter(guard => guard._id !== guardId));
}


  return (
    <div>
      <Registration />
      <hr />
      {/* {loaded && <GuardList guards={guards} removeFromDom={removeFromDom} />} */}

    </div>
  );
};

export default Main;
