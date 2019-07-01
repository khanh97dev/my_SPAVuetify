const helper = {
	isStringJson: string => {
		try { JSON.stringify(string) }
		catch(e) {
			return false
		}
		return true;
	}
}

export const state = {
	data: '',
	baseURL: '/api/excel/data'
}

export const getters = {
	data: state => state.data 
}

export const mutations = {
	setData( state, payload){
		state.data = JSON.parse(payload)
	}
}

export const actions = {
	async updateAndFetchData({state, commit}, payload){
		let json = helper.isStringJson(payload.json) ? JSON.stringify(payload.json) : ''
		let id = payload.id
		let check_update = payload.check_update ? 1 : 0
		let data = {
			json, id, check_update
		}
		await axios.post(state.baseURL, data).then( response => {
			commit('setData', response.data.json)
		})
	},
	async fetchData({state, commit}, id){
		let data = {
			id
		}
		await axios.post(state.baseURL, data).then( response => {
			commit('setData', response.data.json)
		})
	}
}

