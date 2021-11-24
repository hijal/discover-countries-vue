import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			isDark: false,
			countries: [],
			region: 'All',
		};
	},
	mutations: {
		SWITCH_THEME(state) {
			state.isDark = !state.isDark;
		},
		GET_ALL_COUNTRIES(state, payload) {
			state.countries = payload;
		},
		SEARCH_COUNTRIES(state, payload) {
			state.countries = payload;
		},
		FILTER_REGION(state, payload) {
			state.region = payload;
		},
	},
	actions: {
		switchTheme(context) {
			context.commit('SWITCH_THEME');
		},
		async getAllCountries(context) {
			const response = await axios.get('https://restcountries.com/v2/all');
			context.commit('GET_ALL_COUNTRIES', response.data);
		},
		async searchCountries(context, payload) {
			const response = await axios.get(
				`https://restcountries.com/v2/name/${payload.country}`
			);
			if (response.data.status === 404) {
				context.commit('SEARCH_COUNTRIES', []);
			} else {
				context.commit('SEARCH_COUNTRIES', response.data);
			}
		},
		filterRegion(context, payload) {
			context.commit('FILTER_REGION', payload.region);
		},
	},
});
