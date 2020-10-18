<template>
	<v-card flat>
		<v-form ref="form" v-model="valid">
			<v-container>
				<v-row>
					<!-- Title Field -->
					<v-col cols="12">
						<v-text-field
							v-model="title.title"
							:rules="title.titleRules"
							label="Title"
							required
							counter
							clearable
						>
						</v-text-field>
					</v-col>

					<!-- Description Field -->
					<v-col cols="12">
						<v-textarea
							v-model="description.description"
							:rules="description.descriptionRules"
							label="Description"
							required
						>
						</v-textarea>
					</v-col>

					<!-- Date Picker Field -->
					<v-col cols="7" md="4">
						<v-dialog
							ref="dialog"
							v-model="date.modal"
							:return-value.sync="date.dueDate"
							persistent
							width="290px"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-text-field
									v-model="date.dueDate"
									label="Due Date"
									prepend-icon="mdi-calendar"
									:disabled="!date.dateSelected"
									:required="date.dateSelected"
									readonly
									v-bind="attrs"
									v-on="on"
								></v-text-field>
							</template>
							<v-date-picker
								v-model="date.dueDate"
								scrollable
								:min="date.todayDate"
							>
								<v-spacer></v-spacer>
								<v-btn text color="primary" @click="date.modal = false">
									Cancel
								</v-btn>
								<v-btn
									text
									color="primary"
									@click="$refs.dialog.save(date.dueDate)"
								>
									OK
								</v-btn>
							</v-date-picker>
						</v-dialog>

						<!-- Alert if not picked a date and switch is on -->
						<v-alert
							v-if="date.dateSelected && date.dueDate === null"
							class="mb-0"
							type="error"
							color="red lighten-1"
							border="left"
							colored-border
							elevation="2"
						>
							Please, select a date.
						</v-alert>
					</v-col>

					<!-- Due date switch -->
					<v-switch
						v-model="date.dateSelected"
						label="Due Date"
						color="success"
						class="pt-3 ml-md-3"
					></v-switch>

					<v-col cols="12">
						<v-row>
							<v-col cols="12" md="4" class="color-select">
								<v-select
									v-model="color.selected"
									:items="color.options"
									label="Post-it Color"
								></v-select>
							</v-col>
						</v-row>
					</v-col>

					<v-col cols="12">
						<v-btn
							class="mr-4"
							@click="submit"
							:disabled="!valid"
							color="success"
						>
							Add Note
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-form>
	</v-card>
</template>

<script>
import { v4 as uuidv4 } from "uuid"
import Store from "@/utils/Store"
import PostIt from "@/utils/PostIt"

export default {
	data() {
		return {
			collection: "postIts",
			valid: true,
			id: 0,
			title: {
				title: "No title",
				titleRules: [
					(v) => (v && v.trim() !== "") || "Title is required",
					(v) =>
						(v && v.trim().length <= 25) ||
						"Title must be less than 25 characters",
				],
			},
			description: {
				description: "No description",
				descriptionRules: [
					(v) => (v && v.trim() !== "") || "Description is required",
				],
			},
			date: {
				dateSelected: false,
				dueDate: null,
				todayDate: new Date().toISOString().substr(0, 10),
				modal: false,
			},
			color: {
				selected: "blue",
				options: ["Blue", "Pink", "Yellow"],
			},
		}
	},
	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				// validate the date picker
				if (this.date.dateSelected && this.date.dueDate === null) return
				if (!this.date.dateSelected) this.date.dueDate = null

				// create local post-it
				const postIt = new PostIt({
					id: this.id === 0 ? uuidv4() : this.id,
					title: this.title.title,
					description: this.description.description,
					color: this.color.selected.toLowerCase(),
					date: this.date.dueDate,
				})

				if (this.$route.params.id === undefined) {
					// add post-it
					Store.post({ dataToSave: postIt, collection: this.collection })
				} else {
					// edit post-it
					Store.edit({ dataToSave: postIt, collection: this.collection })
				}

				// redirect to homepage
				this.$router.push("/")
			}
		},
		saveDate(dueDate) {
			this.$refs.menu.save(dueDate)
		},
		capitalize(s) {
			if (typeof s !== "string") return ""
			return s.charAt(0).toUpperCase() + s.slice(1)
		},
	},
	beforeMount() {
		if (this.$route.params.id === undefined) return

		const editPostIt = Store.getById({
			id: this.$route.params.id,
			collection: this.collection,
		})

		if (editPostIt !== undefined) {
			this.id = editPostIt.id
			this.title.title = editPostIt.title
			this.description.description = editPostIt.description
			this.color.selected = this.capitalize(editPostIt.color)

			if (editPostIt.date !== null) {
				this.date.dueDate = editPostIt.date
				this.date.dateSelected = true
			}
		}
	},
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/views/PostItAddEdit.scss";
</style>
