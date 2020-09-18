<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
					transition="scale-transition"
					width="40"
				/>

				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
					width="100"
				/>
			</div>

			<v-spacer></v-spacer>

			<v-btn text>
				<span class="mr-2">Settings</span>
				<v-icon>mdi-cog</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld"

export default {
	name: "App",

	components: {
		HelloWorld,
	},

	data: () => ({
		//
	}),
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config.scss";
#app {
	// background-color: var(--v-background-base);
}
</style>