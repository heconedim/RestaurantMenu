import Header from "./components/Header"
import {menuSections} from "./assets/data/DataStructure"
import SectionList from "./components/SectionList"


function App() {
  return (
    <div className="App">
      <Header />
      <SectionList menu={menuSections}/>
    </div>
  );
}

export default App;
