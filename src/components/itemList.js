import '../css/components/itemList.css';

const ItemList = ({ items, onDeleteItem, onChecked }) => {


    return (
        <div className='itemList'>
            <ul>
                {items.map((item) => (
                    <li className='listItem' key={item.id}>
                        <input 
                            type="checkbox" 
                            checked={item.packed} 
                            onChange={() => onChecked(item.id)} 
                            className="checkBox" 
                        />
                        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                            {item.quantity + " "}{item.desc}
                        </span>
                        <button className="crossBtn" onClick={() => onDeleteItem(item.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
