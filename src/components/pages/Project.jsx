import React from "react"
import ContentLoader from "react-content-loader"

import ItemProject from "../itemProject/ItemProject"
import Pagination from "../pagination/Pagination";


import AppContext from "../../AppContext"

function Project() {
    const {items, isLoading, setCurrentPage} = React.useContext(AppContext);
    

    return(
        <div className='projectPage'> 
        {isLoading ? (<div style={{'margin-top' : '30px'}}>
            <ContentLoader 
            speed={3}
            width={1100}
            height={720}
            viewBox="0 0 1100 740"
            backgroundColor="#dedede"
            foregroundColor="#9c9c9c">
            <rect x="865" y="510" rx="10" ry="10" width="115" height="30" /> 
            <rect x="0" y="11" rx="0" ry="0" width="200" height="33" /> 
            <rect x="883" y="0" rx="0" ry="0" width="217" height="56" /> 
            <rect x="653" y="0" rx="0" ry="0" width="217" height="56" /> 
            <rect x="0" y="86" rx="0" ry="0" width="1100" height="100" /> 
            <rect x="0" y="236" rx="0" ry="0" width="600" height="470" /> 
            <rect x="690" y="236" rx="0" ry="0" width="140" height="255" /> 
            <rect x="910" y="236" rx="0" ry="0" width="190" height="310" />
        </ContentLoader></div>) 
            : (items.map((item, index) => {
            return (
              <ItemProject
              key={index}
              id={item.id}
              title={item.title}
              posterFull={item.poster_project}
              poster={item.poster}
              technology={item.technology}
              stack={item.stack}
              task={item.description_task}
              realiz={item.description_realiz}
              deploy={item.deploy}
              repositories={item.repositories}
              />
            )
        }))}
        <Pagination
        onChangePage={(number) => setCurrentPage(number)}/>
        </div>
        
    )
}

export default Project
