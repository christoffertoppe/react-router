import React from 'react'
import axios from 'axios';
//import axios from 'axios';




const Add = ({setEvents}) => {

  let inputValue = "";
  async function handleSubmit(event) {
    let date = new Date();
    let time = "(klo " + date.getHours() + ":" + date.getMinutes() + " " +date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear() +")";
    let params= {
      content: inputValue,
      date: time
    }
      if( inputValue !== "") {

        console.log(date);
        let res = await axios.post('http://localhost:3002/notes' , params);
        console.log(res);
        setEvents(res);
    } else {
        alert("Yritit tallentaa tyhjän kentän")

      }
  }









 function handleChange(e) {
     inputValue = e.target.value
  }

    return(
        <div className="container">
           <div>

               <h2>Lisää tapahtuma.</h2>

             <form onSubmit={handleSubmit}>

             <input type="text"
                    onChange={handleChange} />

             <input type="submit" value="Tallenna" />
             </form>
           </div>
        </div>
    )
}

export default Add
/*
<button onClick={handleSubmit}>Tallenna</button>*/