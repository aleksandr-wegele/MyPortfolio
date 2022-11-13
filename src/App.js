import axios from "axios";
import React from "react";
import { Route } from "react-router-dom";

import AppContext from "./AppContext";
import Nav from "./components/Nav";
import LeftBar from "./components/LeftBar";
import Project from "./components/pages/Project";
import ModalWindow from "./components/modalWindow/ModalWindow";
import Summary from "./components/pages/Summary";
import DescriptionProject from "./components/pages/DescriptionProject";
import MySkills from "./components/mobile/MySkills";
import AboutMobile from "./components/mobile/AboutMobile";
import NavMobile from "./components/mobile/NavMobile";

function App() {
  
const [projectOpened, setProjectOpened] = React.useState(false);
const [isLoading, setIsLoading] = React.useState(false);
const [items, setItems] = React.useState([]);
const [itemsWindow, setItemsWindow] = React.useState([]);
const [currentPage, setCurrentPage] = React.useState(1);


React.useEffect(() => {
  async function fetchData(){
  try {
  setIsLoading(true);
  const [itemResponse, itemWindow, ] = await Promise.all([
  axios.get(`https://6359336cff3d7bddb99bc5ef.mockapi.io/project?page=${currentPage}&limit=1`),
  axios.get(`https://6359336cff3d7bddb99bc5ef.mockapi.io/project`),
]);

  setIsLoading(false);
  setItems(itemResponse.data);
  setItemsWindow(itemWindow.data);
  } catch (error) {
      alert('Ошибка при запросе данных');
      console.error(error);
  }
  }
  fetchData();
}, [currentPage]);

const onClickProject = () => {
    setProjectOpened(true);
  }


  return (
    
    <AppContext.Provider value={{
      items,
      itemsWindow,
      isLoading,
      onClickProject,
      setProjectOpened,
      setCurrentPage,
      
    }}>
      
      <div className="App">
        <div className="App_desctop_1224">
          {projectOpened ? <ModalWindow/> : null} 
            <div className="wrap_content">
              <LeftBar/>
              <div className="content">
              <Nav/>
                
                <Route exact path="/cv/">
                  <Project/>
                </Route>
                
                <Route exact path="/cv/project/:title" component={DescriptionProject}/>

                <Route exact path="/cv/summary">
                  <Summary/>
                </Route>
              </div>
              
            </div>
        </div>

        <div className="App_mobile_320">
            <div className="wrap_content">
              <AboutMobile/>
              <NavMobile/>
              <Route exact path="/cv/">
                <MySkills/>
              </Route>
              <div className="content">
                <Route exact path="/cv/project">
                  <Project/>
                </Route>
                
                <Route exact path="/cv/project/:title" component={DescriptionProject}/>

                <Route exact path="/cv/summary">
                  <Summary/>
                </Route>
              </div>
              
            </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
