import "./App.css";
import ActionsContainer from "./components/ActionsContainer";
import SignupContainer from "./components/SignupContainer";

function App() {
  return (
    <div className="appContainer">
      <div className="actionsContainer">
        <div className="actionsInnerContainer">
          <ActionsContainer />
        </div>
      </div>
      <div className="signupContainer">
        <SignupContainer />
      </div>
    </div>
  );
}

export default App;
