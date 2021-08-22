import React from 'react';

const Card = ({state}) => {
return(
<>
<section className="main-card--cointainer">
 {state.map((live) => {
     const {id,name,category,image,description}=live;
     return(
         <>
  <div key={id} className="card-cantainer">
        <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle">{id}</span>
              <span className="card-author subtle"//style={mystle,{color:"red"}}
              >{name}</span>
              <h2 className="card-title">{name}</h2>
              <div className="card-read">Read</div>
                <span className="card-description subtle"> ipsum dolor, sit amet consectetur adipisicing elit. Hic alias inventore perspiciatis ea blanditiis at.</span>
 <img src={image} alt="" className="card-media" /> 
           <span className="card-tag subtle">Order Now!</span>
              </div>
           </div>   
       </div>
         </>

)
}
)
}
</section>
   </> 
)}

export default Card;