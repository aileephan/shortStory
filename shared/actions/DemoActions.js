import request from 'axios'
const API_URL = 'http://localhost:4000/api/demo'
export function getData() {
	return {
		type: 'GET_DATA',
		promise: request.get(API_URL)
	}
}