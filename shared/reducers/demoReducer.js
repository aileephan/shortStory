const defaultState = []
export default function demoReducer(state=defaultState, action) {
	switch(action.type) {
		case 'GET_DATA': 
		return action.res.data
		default: return state
	}
}