<template>
	<div class="custom-input">
		<div
			class="custom-input_search-icon"
			:class="{ 'custom-input_search-icon-dark': isDark }"
		>
			<search-icon></search-icon>
		</div>
		<input
			:type="type"
			:value="keyword"
			class="custom-input_field"
			:class="{ 'custom-input_field-dark': isDark }"
			v-model="keyword"
			:placeholder="placeholder"
		/>
		<div
			class="custom-input_close-icon"
			:class="{ 'custom-input_close-icon-dark': isDark }"
		>
			<close-icon></close-icon>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SearchIcon from '../icons/SearchIcon.vue';
import CloseIcon from '../icons/CloseIcon.vue';

export default {
	name: 'CustomInput',
	components: {
		SearchIcon,
		CloseIcon,
	},
	props: ['type', 'placeholder'],
	computed: {
		...mapState(['isDark']),
	},
	data() {
		return {
			keyword: '',
			timeoutQuery: null,
		};
	},
	methods: {
		...mapActions(['searchCountries', 'getAllCountries']),
		clearSearch() {
			this.keyword = '';
		},
	},
	watch: {
		keyword(query) {
			if (this.timeoutQuery) {
				clearTimeout(this.timeoutQuery);
			}
			if (query) {
				this.timeoutQuery = setTimeout(() => this.searchCountries(query), 300);
			} else {
				this.timeoutQuery = setTimeout(() => this.getAllCountries(), 100);
			}
		},
	},
	mounted() {
		console.log(this.type);
	},
};
</script>

<style scoped>
.custom-input {
	width: 100%;
	position: relative;
	box-sizing: border-box;
	margin: 0;
}
.custom-input-dark input {
	background-color: #2b3945;
}
.custom-input_search-icon {
	position: absolute;
	display: flex;
	align-items: center;
	bottom: 8px;
	left: 12px;
}
.custom-input_search-icon-dark svg {
	stroke: #fff !important;
}
.custom-input_close-icon {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
	bottom: 8px;
	right: 3px;
	cursor: pointer;
	background-color: #fff;
}
.custom-input_close-icon-dark svg {
	background-color: #2b3945;
	stroke: #fff !important;
}
.custom-input_field {
	box-sizing: border-box;
	width: 100%;
	line-height: 1.9;
	padding-left: 40px;
	border: 1px solid rgba(60, 60, 60, 0.26);
	border-radius: 4px;
}
.custom-input_field-dark {
	background-color: #2b3945;
	color: #fff;
}
.custom-input_field-dark::placeholder {
	color: #fff;
}
.custom-input_field:focus {
	outline: none;
}
.search-icon {
	width: 20px;
	height: 20px;
	stroke: rgba(60, 60, 60, 0.66) !important;
}
.close-icon {
	width: 20px;
	height: 20px;
	stroke: rgba(60, 60, 60, 0.66) !important;
}
</style>
