<template>
	<div
		class="country-card"
		:class="{ 'country-card-dark': isDark }"
		@click="goToCountryDetails"
	>
		<div class="country-card_image-box">
			<img :src="flag" class="country-card-image" alt="" />
		</div>
		<div class="country-card-body">
			<h3 class="country-card-title">{{ name }}</h3>
			<li class="country-card-list-item">
				<span class="boldish">Population: </span>
				<span>{{ population }}</span>
			</li>
			<li class="country-card-list-item">
				<span class="boldish">Region: </span>
				<span>{{ region }}</span>
			</li>
			<li class="country-card-list-item">
				<span class="boldish">Capital: </span>
				<span>{{ capital }}</span>
			</li>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'CountryCard',
	props: {
		name: String,
		population: Number,
		region: String,
		capital: String,
		flag: String,
	},
	computed: {
		...mapState(['isDark']),
	},
	methods: {
		goToCountryDetails() {
			this.$router.push({
				name: 'country-details',
				params: {
					country: this.name,
				},
			});
		},
	},
};
</script>

<style scoped>
.country-card {
	background-color: #fff;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	cursor: pointer;
}

.country-card-dark {
	background-color: #2b3945;
}

.country-card--dark span:nth-child(2) {
	color: #d1d1d1;
}
.country-card_image-box {
	height: 50%;
}
.country-card-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.country-card-body {
	padding: 20px;
}
.country-card-list-item {
	list-style: none;
	line-height: 2;
}
</style>
