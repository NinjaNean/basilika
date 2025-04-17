import { useState } from 'react'
import Edit from './Component/edit/Edit.jsx'
import { menuData } from '../../data/menuData.js'

function EditItems() {
	const [items, setItems] = useState(menuData)

	const editItem = (id, name, category, description, price, img) => {
		setItems(menuData.map(item=> (
			item.id === idToEdit ? (
				{ ...item, name: name, description: description, price: price, img: img, category: category }
			) : item
		)))
	}
	
}

export default EditItems;