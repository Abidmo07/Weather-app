import { useState } from "react"


export default function NavBar(props) {
    const [searchTerm,setSearchTerm]=useState("");
    //this is for the ability of writing in the input 
    function handleOnChange(e){
        setSearchTerm(e.target.value)
        
    } 
    //for submitting the text that we put it in the search bar
    function handleKeyDown(e){
      if(e.key=="Enter"){
        if(searchTerm!=null){
            // eslint-disable-next-line react/prop-types
            props.location(searchTerm);
        }
      }  
    }
  return (
   <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="text-xl btn btn-ghost">Weather-App</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="w-24 input input-bordered md:w-auto"
       value={searchTerm}
        onChange={handleOnChange}
       onKeyDown={handleKeyDown}
       />
    </div>

  </div>
</div>
  )
}

