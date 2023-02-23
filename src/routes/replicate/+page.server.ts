import replicate, { type Model } from '$lib/server/replicate-api/replicate';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// const data =
	// const response = await fetch('https://api.replicate.com/v1/collections/diffusion-models', {
	// 	headers: {
	// 		Authorization: `Token ${REPLICATE_API_TOKEN}`,
	// 		'Content-Type': 'application/json'
	// 	}
	// });

	// if (response.status !== 200) {
	// 	const error = await response.json();

	// 	console.log('error', error);
	// 	return new Response(JSON.stringify({ error: error.detail }), { status: 500 });
	// }

	try {
		const models: Model[] = await replicate.getModels('diffusion-models');

		console.log('what', models);
		return {
			models
		};
	} catch (error) {
		console.log('error', error);
	}
};
