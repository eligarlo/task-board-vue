<template>
  <transition-group name="delete-post-it" tag="div" class="home">
    <PostItNote v-for="note in notes" :key="note.id" :note="note" @delete-post-it="deletePostIt" />
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
			notes: Store.getPostIts()
		}
  },
  methods: {
    deletePostIt(id) {
      Store.deletePostIt(id)
      this.notes = Store.getPostIts()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/views/Home.scss";
</style>
