import { useSelector, useDispatch } from "react-redux";
import { actionCreator } from "./redux/actions";

type RootState = {
  counterReducer : {
    count: number;
    clicks: number;
  }
}

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Contador</h1>
        <h2>{ rootState.counterReducer.count }</h2>
        <h1>Clicks</h1>
        <h2>{ rootState.counterReducer.clicks }</h2>
      </div>
      <div>
        <button onClick={ () => dispatch(actionCreator()) }>Incrementa 1</button>
        <button onClick={ () => dispatch(actionCreator(5)) }>Incrementa 5</button>
      </div>
    </>
  )
}

export default App
