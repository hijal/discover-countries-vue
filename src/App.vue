<template>
	<div id="app" class="app-wrapper" :class="{ 'app-wrapper-dark': isDark }">
		<Navbar />
		<router-view />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from './components/nav/Navbar.vue';
export default {
	name: 'App',
	components: {
		Navbar,
	},
	computed: {
		...mapState(['isDark']),
	},
};
</script>

<style>
body {
	font-family: 'Nunito Sans';
	margin: 0;
	padding: 0;
	min-height: 100vh;
	width: 100vw;
	box-sizing: border-box;
}

input {
	font-size: 16px;
}

.app-wrapper-dark {
	background-color: hsl(207, 26%, 17%);
	color: hsl(0, 0%, 100%);
}

.boldish {
	font-weight: 600;
}
</style>
