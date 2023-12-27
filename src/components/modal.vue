<template>
	<Teleport to="body">
		<dialog ref="playerEditModal" class="modal">
			<button @click="$emit('closed')">Close</button>
			<slot/>
		</dialog>
	</Teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue'
import type { PropType } from 'vue';

export default defineComponent({
	props: {
		open: {
			type: Boolean,
			required: true,
		},
		playerIndex: {
			type: Number as PropType<Number | null> ,
			required: true
		}
	},
	emits: ["closed"],
	setup(props) {
		const open = ref(false);
		const playerEditModal = ref<HTMLDialogElement | null>(null)

		watch(() => props.open, (newValue, oldValue) => {
			console.log("Entered with: ", newValue)
			if (newValue) {
					if (playerEditModal.value) {
						console.log("HALLO?!!?")
						playerEditModal.value?.showModal();
					}
			}
			if (!newValue) {
				watchEffect(() => {
					if (playerEditModal.value) {
						console.log("HALLO?!!?")
						playerEditModal.value?.close();
					}
				})
			}
		})

		return { open, props, playerEditModal }
	}
})
</script>

<style scoped>
.modal {
	margin: auto;
	width: max(20vw, 400px);
	height: max(30vw, 400px);
	background: var(--site-background);
	border: 2px solid var(--primary-accent-color);
	border-radius: 1rem;
}
</style>