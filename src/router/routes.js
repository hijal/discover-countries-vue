import Home from '../pages/Home.vue';
import CountryDetails from '../pages/CountryDetails.vue';

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/:country', name: 'country-details', component: CountryDetails },
];

export default routes;
