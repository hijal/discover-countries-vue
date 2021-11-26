<template>
	<div class="grid-container">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'GridContainer',
};
</script>

<style scoped>
.grid-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-column-gap: 24px;
	grid-row-gap: 24px;
	row-gap: 24px;
    column-gap: 24px;
}
</style>
