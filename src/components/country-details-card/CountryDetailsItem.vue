<template>
	<div class="country-details" v-if="country">
		<div class="country-details-image-box">
			<img
				:src="country.flag"
				class="country-details-img"
				:alt="'country-flag-' + country.name"
			/>
		</div>
		<div class="country-details-card">
			<div class="country-details-title">{{ country.name }}</div>
			<div
				class="country-details-grid-container"
				:class="{ 'country-details-grid-container-dark': isDark }"
			>
				<div class="country-details-left-grid">
					<li class="country-details-list-item">
						<span class="boldish">Native Name: </span>
						<span>{{ country.nativeName }}</span>
					</li>
					<li class="country-details-list-item">
						<span class="boldish">Population: </span>
						<span>{{ country.population }}</span>
					</li>
					<li class="country-details-list-item">
						<span class="boldish">Region: </span>
						<span>{{ country.region }}</span>
					</li>
					<li class="country-details-list-item">
						<span class="boldish">Sub Region: </span>
						<span>{{ country.subregion }}</span>
					</li>
					<li class="country-details-list-item">
						<span class="boldish">Capital: </span>
						<span>{{ country.capital }}</span>
					</li>
				</div>
				<div class="country-details-right-grid">
					<li class="country-details-list-item">
						<span class="boldish">Top Level Domain: </span>
						<span>{{ country.topLevelDomain[0] }}</span>
					</li>
					<li class="country-details-list-item">
						<span class="boldish">Currencies: </span>
						<span>{{ currencies }}</span>
					</li>
					<li class="country-details-list-item">
						<span class="boldish">Languages: </span>
						<span>{{ languages }}</span>
					</li>
				</div>
			</div>
			<div class="country-details-footer">
				<div class="boldish">Border Countries:</div>
				<div class="country-details-border-countries">
					<div
						class="country-details-border-country"
						v-for="(bc, i) in borderCountries"
						:key="i"
					>
						{{ bc }}
					</div>
				</div>
			</div>
		</div>
	</div>
	<Loading v-else />
</template>

<script>
import { mapState } from 'vuex';
import Loading from '../loading/Loading.vue';

export default {
	name: 'CountryDetails',
	components: {
		Loading,
	},
	props: {
		country: {
			type: Object,
		},
	},
	computed: {
		...mapState(['isDark', 'countries']),
		currencies() {
			return this.country.currencies
				.map((currency) => currency.name)
				.join(', ');
		},
		languages() {
			return this.country.languages.map((language) => language.name).join(', ');
		},
		borderCountries() {
			const neighbors = [];
			this.country.borders?.forEach((countryCode) => {
				const newNeighbor = this.countries.find(
					(country) => country.alpha3Code === countryCode
				);
				if (newNeighbor) neighbors.push(newNeighbor.name);
			});
			return neighbors;
		},
	},
};
</script>

<style scoped>
.country-details {
	display: grid;
	column-gap: 30px;
	grid-template-columns: 4fr 5fr;
}
.country-details-image-box {
	width: 100%;
}
.country-details-img {
	width: 100%;
}
.country-details-card {
	display: grid;
	align-items: center;
}
.country-details-title {
	font-size: 30px;
	font-weight: 900;
}
.country-details-grid-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	-moz-column-gap: 20px;
	column-gap: 20px;
	margin-bottom: 10px;
}
.country-details-grid-container-dark span:nth-child(2) {
	color: #d1d1d1;
}
.country-details-list-item {
	list-style: none;
	line-height: 1.8;
}
.country-details-footer {
	display: grid;
	grid-template-columns: 1fr 1fr;
}
.country-details-border-countries {
	margin-left: 15px;
	display: inline;
}
.country-details-border-country {
	margin-bottom: 10px;
	margin-right: 7px;
	display: inline-block;
	padding: 5px 25px;
	border-radius: 3px;
	box-shadow: 0 0 12px -5px rgb(0 0 0 / 45%);
}

@media (max-width: 768px) {
	.country-details {
		display: block;
	}
}
</style>
