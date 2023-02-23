<script lang="ts">
	import type { Model } from '$lib/server/replicate-api/replicate';

	export let model: Model;
	export let prompt: string;
	export let seed: string;

	let timerId: any;

	const generateClick = async () => {
		// 'prompt': "redshift style magical princess with golden hair",

		// # Width of output image. Maximum size is 1024x768 or 768x1024 because
		// # of memory limits
		// 'width': 512,

		// # Height of output image. Maximum size is 1024x768 or 768x1024 because
		// # of memory limits
		// 'height': 512,

		// # Number of images to output
		// 'num_outputs': 1,

		// # Number of denoising steps
		// # Range: 1 to 500
		// 'num_inference_steps': 50,

		// # Scale for classifier-free guidance
		// # Range: 1 to 20
		// 'guidance_scale': 7.5,

		// # Random seed. Leave blank to randomize the seed
		// # 'seed': ...,
		const response = await fetch('/replicate/image-generation/predictions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				prompt,
				modelVersion: model.version,
				width: 512,
				height: 512,
				seed
			})
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
		SUCCEEDED = 'succeeded',
		FAILED = 'failed'
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

		if (data.status == Status.FAILED) {
			clearInterval(timerId);
			imageSrc = null;
		}

		console.log('predictions response', data);
	};

	let predictionId: string;

	let imageSrc: string | null;

	let predictionResponse: PredictionResponse;
</script>

{model.path} - {model.description}<button on:click={generateClick}>Generate</button>

{#if predictionResponse}
	Status: {predictionResponse.status}
	{#if imageSrc}
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={imageSrc} alt="generated image" />
	{:else}
		<textarea bind:value={predictionResponse.logs} rows={20} />
	{/if}
{/if}
<br />
<br />
<br />

<style>
	button {
		width: 200px;
	}

	img {
		width: 450px;
		height: 450px;
	}
</style>
