import axios from 'axios'

const data = axios
	.get('https://dummyjson.com/products')
	.then(function (response) {
		console.log(response)
	})
	.catch(function (error) {
		console.log(error)
	})

export default data
