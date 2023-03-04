import Header from "./components/Header"
import {menuSections} from "./assets/data/DataStructure"
import SectionItem from "./components/SectionItem"


function App() {
  return (
    <div className="App">
      <Header />
      <SectionItem menu={menuSections}/>
    </div>
  );
}

export default App;
