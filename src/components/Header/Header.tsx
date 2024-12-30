import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<div className={styles.header}>
			<p className={styles.logo}>Shop</p>
			<nav className={styles.links}>
				<NavLink className={styles.link} to='/'>
					Home
				</NavLink>
				<NavLink className={styles.link} to='/catalog'>
					Catalog
				</NavLink>
				<NavLink className={styles.link} to='/about'>
					About
				</NavLink>
			</nav>
		</div>
	)
}
