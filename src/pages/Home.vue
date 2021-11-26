<template>
	<div class="home">
		<filter-section></filter-section>
		<grid-container v-if="filteredCountries.length > 0">
			<country-card
				v-for="country in filteredCountries"
				:key="country.name"
				:name="country.name"
				:capital="country.capital"
				:population="country.population"
				:region="country.region"
				:flag="country.flag"
			></country-card>
		</grid-container>
		<loading v-else></loading>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import FilterSection from '../components/filter-section/FilterSection.vue';
import Loading from '../components/loading/Loading.vue';
import GridContainer from '../components/grid-container/GridContainer.vue';
import CountryCard from '../components/country-card/CountryCard.vue';

export default {
	name: 'Home',
	components: {
		FilterSection,
		GridContainer,
		CountryCard,
		Loading,
	},
	computed: {
		...mapState(['countries', 'region']),
		filteredCountries() {
			if (this.region === 'All' || this.region === null) {
				return this.countries;
			} else {
				return this.countries.filter(
					(country) => country.region === this.region
				);
			}
		},
	},
	methods: {
		...mapActions(['getAllCountries', 'filterRegion']),
	},
	mounted() {
		this.getAllCountries();
	},
};
</script>

<style scoped>
.home {
	padding: 20px 40px;
}
</style>
