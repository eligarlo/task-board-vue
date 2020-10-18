<template>
	<transition-group name="delete-post-it" tag="div" class="home">
		<PostItNote
			v-for="note in notes"
			:key="note.id"
			:note="note"
			@delete-post-it="deletePostIt"
		/>
	</transition-group>
</template>

<script>
// @ is an alias to /src
import PostItNote from "@/components/PostItNote.vue"
import Store from "@/utils/Store.js"

export default {
	name: "Home",
	components: {
		PostItNote,
	},
	data() {
		return {
			notes: Store.get("postIts"),
		}
	},
	methods: {
		deletePostIt(id) {
			Store.delete({ id, collection: "postIts" })
			this.notes = Store.get("postIts")
		},
	},
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/views/Home.scss";
</style>
