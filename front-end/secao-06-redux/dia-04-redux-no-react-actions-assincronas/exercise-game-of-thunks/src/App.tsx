import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "./types";
import { thunkCharacter } from "./redux/actions";
import CharacterCard from "./components/CharacterCard";

function App() {
  const [character, setCharacter] = useState('');
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <h1>Game of Thunks API</h1>
      <input
        type="text"
        onChange={ ({ target }: React.ChangeEvent<HTMLInputElement>) => setCharacter(target.value) }
        value={ character }
      />
      <button
        type="button"
        onClick={ () => dispatch(thunkCharacter(character)) }
      >
        Enviar!
      </button>
      <CharacterCard />
    </div>
  )
}

export default App
