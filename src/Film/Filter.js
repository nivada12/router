 import React from 'react';
 function Filter(props){
 const {updateInput}= props;
 return(
     <div className="d-flex justify-content-end" >
         
 <input placeholder="movies search" type="text"   onChange={(e) => updateInput(e.target.value)}></input>   

</div>    
);

}
    



export default Filter;