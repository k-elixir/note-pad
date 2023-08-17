import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="flex gap-4 items-center justify-center bg-slate-900 h-screen">
      <div className="flex rounded-[8px] w-96 border-2 border-slate-950 bg-white overflow-hidden px-2">
        <input
          type="text"
          placeholder="Search ..."
          class="h-[40px] w-[95%] p-2 bg-transparent outline-none"
        />
      </div>
      <FontAwesomeIcon
        icon={faPlus}
        className="text-sky-900 text-2xl add-note"
      />
      <FontAwesomeIcon
        icon={faPaintRoller}
        className="text-sky-900 text-2xl change-bg-color"
      />
    </div>
  );
}

export default App;
