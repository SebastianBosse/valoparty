<template>
	<Teleport to="body">
		<dialog ref="playerEditModal" class="modal">
			<button class="close_button" @click="$emit('closed')"><close /></button>
			<slot/>
		</dialog>
	</Teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue'

import close from '@/components/icons/close.vue';

export default defineComponent({
	components: {
		close
	},
	props: {
		open: {
			type: Boolean,
			required: true,
		},
	},
	emits: ["closed"],
	setup(props) {
		const open = ref(false);
		const playerEditModal = ref<HTMLDialogElement | null>(null)

		watch(() => props.open, (newValue, oldValue) => {
			console.log("Entered with: ", newValue)
			if (newValue) {
					if (playerEditModal.value) {
						playerEditModal.value?.showModal();
					}
			}
			if (!newValue) {
				watchEffect(() => {
					if (playerEditModal.value) {
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
	width: max(50vw, 400px);
	height: max(30vw, 400px);
	background: var(--site-background);
	border: 2px solid var(--primary-accent-color);
	border-radius: 1rem;
}

.close_button {
	background: none;
	border: none;
	position: absolute;
  right: 1rem;
	cursor: pointer;
	scale: 1.5;
	transition: rotate .3s ease-in-out;
}

.close_button:hover {
	rotate: 180deg;
}
</style>