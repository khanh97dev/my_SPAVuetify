// import
import axios from 'axios'
import { api } from '~/config'
import * as types from '../mutation-types'
import * as Cookies from "js-cookie";
window.Cookies = Cookies

const name_token = 'access_token'
/**
 * Initial state
 */
export const state = {
  user: null,
  token: Cookies.get( name_token ) || null,
}

/**
 * Mutations
 */
export const mutations = {
  [types.SET_USER](state, { user }) {
    state.user = user
  },

  [types.LOGOUT](state) {
    state.user = null
    state.token = null
    window.localStorage.removeItem('token')
    Cookies.remove( name_token)
  },

  [types.FETCH_USER_FAILURE](state) {
    state.user = null
    window.localStorage.removeItem('token')
    Cookies.remove( name_token)
  },

  [types.SET_TOKEN](state, { token }) {
    state.token = token
    window.localStorage.setItem('token', token)
    Cookies.set( name_token, token)
  }
}

/**
 * Actions
 */
export const actions = {
  saveToken({ commit }, payload) {
    commit(types.SET_TOKEN, payload)
  },

  async fetchUser({ commit }) {
    try {
      const { data } = await axios.get(api.path('me'))
      commit(types.SET_USER, data)
    } catch (e) {
      commit(types.FETCH_USER_FAILURE)
    }
  },

  setUser({ commit }, payload) {
    commit(types.SET_USER, payload)
  },

  async logout({ commit }) {
    await axios.post(api.path('logout'))
    commit(types.LOGOUT)
  },

  destroy({ commit }) {
    commit(types.LOGOUT)
  }
}

/**
 * Getters
 */
export const getters = {
  user: state => state.user,
  check: state => state.user !== null,
  token: state => state.token
}
