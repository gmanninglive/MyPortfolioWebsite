import React from 'react';


import Card from "./Card";

export default function Cards ({ portfolioCases }) {

  

    return(
        
        <div className="">    {/*"w-full sm:w-3/4 lg:w-1/2 flex flex-wrap " */}
              {portfolioCases.map( ( {node} ) =>  (
                  <div class=" portfoliocards" key={node.id}>
                      <Card portfolioCase={node} />
                      

                     </div>
                 ))}

       
        </div>
        
        
        
        )
};
