import { useState } from 'react';
import '../css/components/form.css'
const Form = ({onAddItems}) => {

    const[desc, setDesc] = useState("");
    const[quantity, setQuantity] = useState(1);    

    const handleSubmit = function handleSubmit(e){
        e.preventDefault();
        if(!desc) return;

        const newItem = {desc, quantity, packed:false, id : Date.now()}
        // console.log("before new item")
        // console.log(newItem);
        onAddItems(newItem);

        setDesc('')
        setQuantity(1)
    }


    return(
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label className="itemLabelDropdown" >Choose an option:</label>
                    <select 
                        className="dropoDown" 
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}>
                        {   
                        [...Array(20).keys().map((x) => x+1)]  //a simple  array contains 1-20
                        .map(val => <option value = {val} key={val} >{val}</option>)  
                        }                       
                    </select>
                </div>

                <div className="form-group" >
                    <input 
                        className="itemInput" 
                        placeholder="   Item..."
                        type="text" 
                        value = {desc} 
                        onChange={(e)=> setDesc(e.target.value)}
                    />
                </div>

                <div className="form-group" >
                    <button className="submitBtn" >Add</button>
                </div>
            </form>
        </div>
    );

}

export default Form;