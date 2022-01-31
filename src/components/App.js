import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import useStore from "../store";
import Registration from "./Registration/Registration";

const App = () => {

  const [name, setName] = useState("");
  const addPokemons = useStore((state) => state.addPokemons);
  const pokemons = useStore( state => state.pokemons )
  const state = useStore( state => state )

  const onChange = (e) => {
    setName(e.target.value);
  };

  const addPokemon = () => {
    addPokemons({ name: name });
    clear();

    state.setStudentDetail({firstname: "Dan"})
    console.log(state.student)
  };

  const clear = () => setName("");

  return(
    <>
      <Registration />
    </>
  )
}


export default App;