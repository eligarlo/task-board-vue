<template>
	<div class="post-it">
		<img
			:src="require(`../assets/img/post_it_${note.color}.png`)"
			alt="post-it note"
		/>

		<nav class="pl-1" :class="{ date: note.date }">
			<h5 v-if="note.date !== null">{{ date }}</h5>
			<v-btn @click="editPostIt(note.id)" class="edit" icon color="indigo">
				<v-icon>mdi-pencil</v-icon>
			</v-btn>
			<v-btn @click="deletePostIt(note.id)" class="delete" icon color="red">
				<v-icon>mdi-trash-can-outline</v-icon>
			</v-btn>
		</nav>

		<article>
			<h3 class="px-2">{{ note.title }}</h3>
			<p class="px-2">{{ note.description }}</p>
		</article>
	</div>
</template>

<script>
import moment from "moment"

export default {
	name: "PostIt",
	props: {
		note: Object,
	},
	data: () => {
		return {
			collection: "postIts",
		}
	},
	methods: {
		deletePostIt(id) {
			this.$emit("delete-post-it", id)
		},
		editPostIt(id) {
			this.$router.push(`/edit/${id}`)
		},
	},
	computed: {
		date() {
			return moment(this.note.date).format("DD/MM/YYYY")
		},
	},
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/PostItNote.scss";
</style>
