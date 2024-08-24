import '../css/components/itemList.css';
import { useState } from 'react';
const ItemList = () => { 
    let items = [
        { id: 1, description: "passport", quantity: 1, packed: false },
        { id: 2, description: "shoes", quantity: 4, packed: true },
        { id: 3, description: "shirts", quantity: 4, packed: false }
    ];

    const [item, setItem] = useState(items); 

    return (
        <div className='itemList'>
            <ul>
                {items.map((item) => ( 
                    <li key={item.id}>
                        <span style ={item.packed ? {textDecoration:"line-through"}:{}}>
                            {item.quantity + " "}{item.description}
                        </span> 
                        <button>❌</button>
                    </li>))}
            </ul>
        </div>
    );
}

export default ItemList;