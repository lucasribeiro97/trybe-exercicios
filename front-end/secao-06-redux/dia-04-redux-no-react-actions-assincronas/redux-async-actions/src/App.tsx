import { useDispatch, useSelector } from "react-redux"
import { Dispatch, ReduxState } from "./types"

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <button>
        Novo Doguinho
      </button>
    </div>
  )
}

export default App
