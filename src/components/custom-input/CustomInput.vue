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
			class="custom-input-field"
			:class="{ 'custom-input_field-dark': isDark }"
			v-model="keyword"
			:placeholder="placeholder"
		/>
		<div
			class="custom-input_close-icon"
			:class="{ 'custom-input_close-icon-dark': isDark }"
		>
			<close-icon><close-icon/>
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
};
</script>

<style scoped></style>
