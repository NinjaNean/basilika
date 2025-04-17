import React, { useState } from 'react';


const EditItems = ({ idToEdit, idToRemove, nameToEdit, categoryToEdit, priceToEdit, descriptionToEdit, imgToEdit }) => {
    const [name, setName] = useState(nameToEdit);
    const [category, setCategory] = useState(categoryToEdit);
    const [price, setPrice] = useState(priceToEdit);
    const [description, setDescription] = useState(descriptionToEdit);
    const [img, setImg] = useState(imgToEdit);
    const [menuItem, setMenuItem] = useState([]);
     
    return (

        <div className="edit-container">
                <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                
                <input type="text" placeholder="category" value={category} onChange={e => setCategory(e.target.value)} />
                
                <input type="number" placeholder="price" value={price} onChange={e => setPrice(e.target.value)} />
               
                <input type="text" placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
                
                <input type="text" placeholder="image" value ={img} onChange={e => setImg(e.target.value)} />
               
                <button onClick={() => editItem(idToEdit, name, category, price, description, img)}>Edit</button>
                
                <button onClick={() => removeItem(idToRemove)}>Remove</button>
            </div>
    )
}
export default EditItems;