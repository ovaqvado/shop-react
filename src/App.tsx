import styles from './App.module.scss'
import Header from './components/Header/Header'
import Routers from './router'

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<Routers />
		</div>
	)
}

export default App
