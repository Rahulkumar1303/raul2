import React, { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kaam krle bhai", iscompleted: false },
  ]);

  const [title, settitle] = useState("");
  const [completed, setcompleted] = useState(true);
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("Mumbai")
  
  return (
    <>
      <h1>Create Tasks</h1>
      <form>
        <input
          onChange={(e) => settitle(e.target.value)}
          type="text"
          value={title}
          placeholder="title"
        />
        <br />
        <input
          onChange={(e) => setcompleted(e.target.checked)}
          type="checkbox"
        />
        completed
        <br /> <br />
        <input
          value="male"
          onChange={(e) => setgender(e.target.value)}
          checked={gender=="male" &&  true}
          type="radio"
        />
        male
        <br /> <br />
        <input
          value="Female"
          onChange={(e) => setgender(e.target.value)}
          checked={gender=="Female" &&  true}
          type="radio"
        />Female
        <br /><br />
        <select  value={city} onChange={(e)=>setcity(e.target.value)}>
           <option value="Delhi">Delhi</option>
           <option value="Mumbai">Mumbai</option>
           <option value="Kolkata">Kolkata</option>
        </select>
        <br /><br />
        <button>Create Todo</button>
      </form>
    </>
  );
};

export default App;
