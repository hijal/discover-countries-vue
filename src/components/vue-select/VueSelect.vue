<template>
	<div class="select-dropdown" :class="{ 'select-dropdown-dark': isDark }">
		<select class="form-select" aria-label="Filter by Region">
			<option selected>Filter by Region</option>
			<option v-for="option in options" :key="option" :value="option">
				{{ option }}
			</option>
		</select>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'VueSelect',
	props: {
		options: Array,
	},
	data() {
		return {
			region: this.options[0],
		};
	},
	computed: {
		...mapState(['isDark']),
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
