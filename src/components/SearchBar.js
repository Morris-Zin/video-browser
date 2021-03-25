import React, {useState} from 'react'; 

const SearchBar = ({onSubmit})  =>  {
   
     const [term, setTerm] = useState(""); 
        
     const onFormSubmit = (e) => { 
            e.preventDefault(); 
            onSubmit(term) ;   //ToDo : callback from parent Element 
      }

          return ( 
               <div className="ui segment search-bar">
                   <form onSubmit={onFormSubmit} className="ui form">
                        <div className="field">
                             <label>Video Search</label>
                            <input value={term} autoComplete="off" type="text" onChange={(e) => setTerm(e.target.value)}/>
                        </div>
                  </form>
               </div>
          )
}


export default SearchBar; 