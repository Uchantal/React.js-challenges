import { useState } from "react";
import Counter from "./Counter";



const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const [friends, setFriends] = useState(["Chantal", "Peace"]);
  const addOneFriend = () => setFriends([...friends, "Josiane"]);
  const removeFriend = () => setFriends(friends.filter(f => f !== "Josiane"));
  const updateFriend = () => {
    setFriends(friends.map(f => (f === "Josiane" ? "Peace Josiane" : f)));
  };

  return (
    <div>
      <section>
        {friends.map((f, index) => (
          <li key={index}>{f}</li> // Using index as key
        ))}
      </section>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove a Friend</button>
      <button onClick={updateFriend}>Update Friend</button>
      <Counter/>
    
    </div>
  );
};

export default App;
