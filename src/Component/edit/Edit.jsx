import menuData from '../../data/menuData.js'



const Edit = () => {
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
		editCity(id, newName, newCat, newPrice, newDesc, newImg)
	}

	return (
		
	)
}

export default Edit