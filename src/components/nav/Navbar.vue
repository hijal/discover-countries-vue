<template>
	<nav class="navbar" :class="{ 'navbar-dark': isDark }">
		<a href="/" class="navbar-logo">Where in the world?</a>
		<div v-if="isDark" class="navbar-theme" @click="changeTheme">
			<moon-icon></moon-icon>
			<span>Dark Mode</span>
		</div>
		<div v-else class="navbar-theme" @click="changeTheme">
			<sun-icon></sun-icon>
			<span>Light Mode</span>
		</div>
	</nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SunIcon from '../icons/SunIcon.vue';
import MoonIcon from '../icons/MoonIcon.vue';

export default {
	name: 'Navbar',
	components: {
		SunIcon,
		MoonIcon,
	},
	computed: {
		...mapState(['isDark']),
	},
	methods: {
		...mapActions(['switchTheme']),
		changeTheme() {
			if (this.isDark) {
				document.body.style.backgroundColor = 'hsl(0, 0%, 100%)';
			} else {
				document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
			}
			this.switchTheme();
		},
	},
};
</script>

<style scoped>
.navbar {
	padding: 20px 40px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ebebeb;
	background-color: #ffffff;
}

.navbar-dark {
	border-bottom: 1px solid #2b3945;
	background-color: #202c37;
}
.navbar-logo {
	font-weight: 600;
	text-decoration: none;
	color: inherit;
}

.navbar-theme {
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
}

.navbar span {
	margin-left: 5px;
	font-weight: 600;
}

.sun-icon {
	width: 14px;
	height: 14px;
}

.moon-icon {
	width: 14px;
	height: 14px;
	fill: #ffffff;
}
</style>
