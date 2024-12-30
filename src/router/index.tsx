import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import Catalog from '../pages/Catalog/Catalog'
import Home from '../pages/Home/Home'

export default function Routers() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/catalog' element={<Catalog />} />
			<Route path='/about' element={<About />} />
		</Routes>
	)
}
