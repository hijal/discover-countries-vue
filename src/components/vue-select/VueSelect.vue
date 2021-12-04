<template>
	<div class="select-dropdown" :class="{ 'select-dropdown-dark': isDark }">
		<select class="form-select" aria-label="Filter by Region" v-model="region">
			<option selected>Filter by Region</option>
			<option v-for="option in options" :key="option" :value="option">
				{{ option }}
			</option>
		</select>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'VueSelect',
	props: {
		options: Array,
	},
	data() {
		return {
			region: 'All',
		};
	},
	computed: {
		...mapState(['isDark']),
	},
	methods: {
		...mapActions(['filterRegion']),
	},
	watch: {
		region(newRegion) {
			this.filterRegion({ region: newRegion });
		},
	},
};
</script>

<style scoped>
.select-dropdown-dark {
	background-color: #2b3945;
	color: #ffffff;
}
.form-select:focus {
	box-shadow: none;
	outline: none;
}
</style>
