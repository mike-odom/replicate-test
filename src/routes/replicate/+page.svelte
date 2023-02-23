<script lang="ts">
	import { construct_svelte_component } from 'svelte/internal';

	let timerId: any;

	const generateClick = async () => {
		const response = await fetch('/replicate/image-generation/predictions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ prompt })
		});

		const data = await response.json();

		predictionId = data.id;
		predictionResponse = data;
		imageSrc = null;

		console.log('predictions response', data);

		timerId = setInterval(() => {
			updateClick();
		}, 2000);
	};

	enum Status {
		SUCCEEDED = 'succeeded'
	}
	interface PredictionResponse {
		logs: string;
		status: Status;
		output: string[];
	}

	const updateClick = async () => {
		const response = await fetch(`/replicate/image-generation/predictions/${predictionId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ prompt })
		});

		const data: PredictionResponse = await response.json();

		predictionResponse = data;

		if (data.status == Status.SUCCEEDED) {
			clearInterval(timerId);
			imageSrc = data.output[0];
		}

		console.log('predictions response', data);
	};

	let prompt: string;

	let predictionId: string;

	let imageSrc: string | null;

	let predictionResponse: PredictionResponse;
</script>

<form on:submit|preventDefault={generateClick}>
	<input bind:value={prompt} type="text" name="prompt" />

	<button type="submit">Generate</button>
</form>

<!-- <button on:click={updateClick}>Update</button> -->
{#if predictionResponse}
	Status: {predictionResponse.status}
	{#if imageSrc}
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={imageSrc} alt="generated image" />
	{:else}
		<textarea bind:value={predictionResponse.logs} rows={20} />
	{/if}
{/if}
