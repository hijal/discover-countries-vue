<template>
	<div class="filters-container">
		<div class="filters-container__searchbox">
			<custom-input placeholder="Search for a country ..." type="text" />
		</div>
		<div class="filters-container__dropdown">
			<vue-select
				:options="['All', 'Asia', 'Africa', 'Europe', 'Americas', 'Oceania']"
			/>
		</div>
	</div>
</template>

<script>
import CustomInput from '../custom-input/CustomInput.vue';
import VueSelect from '../vue-select/VueSelect.vue';
export default {
	name: 'filtersection',
	components: {
		CustomInput,
		VueSelect,
	},
};
</script>

<style scoped>
.filters-container {
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
}
.filters-container__searchbox {
	width: 30%;
}
.filters-container__dropdown {
	width: 30%;
}
@media (max-width: 768px) {
	.filters-container {
		display: block;
	}
	.filters-container__searchbox {
		width: 100%;
	}
	.filters-container__dropdown {
		margin-top: 30px;
		width: 100%;
	}
}
</style>
