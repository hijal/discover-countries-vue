<template>
	<div class="details-country">
		<button
			class="details-country-button"
			:class="{ 'details-country-button-dark': isDark }"
			@click="goBack"
		>
			<back-icon></back-icon>
			<span class="details-country-button-text">Go Back</span>
		</button>
		<country-details-card :country="countryData" />
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BackIcon from '../components/icons/BackIcon.vue';
import CountryDetailsCard from '../components/country-details-card/CountryDetailsItem.vue';

export default {
	name: 'CountryDetails',
	components: {
		BackIcon,
		CountryDetailsCard,
	},
	computed: {
		...mapState(['isDark', 'countries']),
		countryData() {
			return this.countries.find(
				(country) => country.name === this.$route.params.country
			);
		},
	},
	methods: {
		...mapActions(['getAllCountries']),
		goBack() {
			this.$router.push({ name: 'home' });
		},
	},
	mounted() {
		this.getAllCountries();
	},
};
</script>

<style scoped>
.details-country {
	margin: 50px;
}
.details-country-button {
	display: flex;
	align-items: center;
	border: none;
	padding: 7px 15px;
	border-radius: 3px;
	cursor: pointer;
	box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.45);
	background-color: #fff;
	margin: 50px 0;
}
.details-country-button-dark {
	background-color: #2b3945;
	color: #fff;
}
.details-country-button:hover {
	background-color: #d1d1d1;
}
.details-country-button-dark:hover {
	background-color: #202c37;
}
.details-country-button-text {
	margin-left: 5px;
}
.back-icon {
	width: 16px;
	height: 16px;
}
</style>
