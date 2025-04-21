import { menuData } from '../../data/menuData.js'
import { useState } from 'react'
import '../edit/Edit.css'



const Edit = ({editItem}) => {
    const [menuItems, setMenuItems] = useState(menuData)
    const [editId, setEditId] = useState(null)
	const [newName, setNewName] = useState('')
	const [newCat, setNewCat] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newDesc, setNewDesc] = useState('') 
    const [newImg, setNewImg] = useState('')

	const handleEditItem = (id, name, category, price, description, img) => {
        setEditId(id)
		setNewName(name)
		setNewCat(category)
        setNewPrice(price)
        setNewDesc(description)
        setNewImg(img)
    
	}
	const handleSave = (id) => {
		setEditId(null)
		setMenuItems(id, newPrice , newName, newCat, newDesc, newImg)
	}

	return (
        <ul className="edit-container">
        {menuItems.map(({ id, name, category, price, description, img }) => (
            <td className='edit-list' key={id}>
                {editId === id ? (
                    <>
                        <input type="text" placeholder="name" value={newName} onChange={e => setNewName(e.target.value)} className='edit-input'/>

                        <input type="text" placeholder="category" value={newCat} onChange={e => setNewCat(e.target.value)}className='edit-input' />

                        <input type="number" placeholder="price" value={newPrice} onChange={e => setNewPrice(e.target.value)} className='edit-input'/>

                        <input type="text" placeholder="description" value={newDesc} onChange={e => setNewDesc(e.target.value)} className='edit-input'/>

                        <input type="text" placeholder="image" value={newImg} onChange={e => setNewImg(e.target.value)}className='edit-input' />

                        <button className='edit-button' onClick={() => handleSave(id)}>save</button>
                       
                    </>
                ) : (
                    <>
                        <span>{name}</span>
                        <button className='save-button' onClick={() => handleEditItem(id, name, category, price, description, img)}>change</button>
                    </>
                )}
            </td>
        ))}
    </ul>
    
	)
}

export default Edit