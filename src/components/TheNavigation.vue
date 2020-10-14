<template>
	<v-app-bar app color="primary" dark>
		<router-link to="/" class="d-flex align-center">
			<h2>My Task Board</h2>
		</router-link>

		<v-spacer></v-spacer>

		<router-link to="/add">
			<v-btn color="green darken-1" class="mr-2" rounded>
				<span class="mr-2 d-none d-md-block">Add</span>
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</router-link>

		<router-link to="/settings">
			<v-btn color="grey darken-2" rounded>
				<span class="mr-2 d-none d-md-block">Settings</span>
				<v-icon>mdi-cog</v-icon>
			</v-btn>
		</router-link>
	</v-app-bar>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/TheNavigation.scss";
</style>
