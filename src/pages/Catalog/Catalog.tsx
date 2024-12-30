import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Product, ProductResponse } from '../../types/ProductType'
import styles from './Catalog.module.scss'

const Catalog: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get<ProductResponse>(
					'https://dummyjson.com/products'
				)
				setProducts(response.data.products)
			} catch {
				setError('Error fetching products')
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<div>
			<h1>Product Catalog</h1>
			<ul className={styles.box__products}>
				{products.map(product => (
					<li className={styles.product} key={product.id}>
						<h2 className={styles.product__title}>{product.title}</h2>
						<img
							className={styles.product__img}
							src={product.thumbnail}
							alt={product.title}
						/>
						<p>Price: ${product.price}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Catalog
