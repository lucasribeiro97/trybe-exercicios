import { useDispatch, useSelector } from "react-redux"
import { Dispatch, ReduxState } from "./types"
import { fetchDogImage } from "./redux/actions";

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={ () => { dispatch(fetchDogImage()) } }
      >
        Novo Doguinho
      </button>
    </div>
  )
}

export default App
