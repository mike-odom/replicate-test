<script lang="ts">
	import { construct_svelte_component } from 'svelte/internal';
	import type { PageData } from './$types';
	import ModelGenerator from './model-generator.svelte';

	export let data: PageData;

	const { models } = data;

	let prompt: string;
	let seed: string;

	console.log('models', data.models);
</script>

<!-- <form on:submit|preventDefault={generateClick}> -->
Prompt: <input bind:value={prompt} type="text" name="prompt" />
Seed: <input bind:value={seed} type="text" name="seed" />

{#if models}
	{#each models as model}
		<ModelGenerator {model} {prompt} {seed} />
	{/each}
{/if}

<!-- </form> -->

<!-- <button on:click={updateClick}>Update</button> -->
