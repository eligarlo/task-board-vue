<template>
	<v-app>
		<TheNavigation />

		<v-main>
      <transition name="fade">
        <router-view :key="$route.path" />
      </transition>
		</v-main>
	</v-app>
</template>

<script>
import TheNavigation from "./components/TheNavigation"

export default {
	name: "App",
	components: {
		TheNavigation,
	},
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config.scss";
</style>