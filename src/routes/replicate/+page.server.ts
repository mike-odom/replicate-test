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
		const allModels: Model[] = await replicate.getModels('diffusion-models');

		const blacklist = [
			'tommoore515/material_stable_diffusion',
			'deforum/deforum_stable_diffusion',
			'arielreplicate/stable_diffusion_infinite_zoom',
			'cjwbw/taiyi-stable-diffusion-1b-chinese-v0.1',
			'cjwbw/multilingual-stable-diffusion',
			'cjwbw/sd-textual-inversion',
			'cjwbw/stable-diffusion-img2img-v2.1'
		];

		const models = allModels.filter((model) => !blacklist.includes(model.path));

		console.log('what', models);
		return {
			models
		};
	} catch (error) {
		console.log('error', error);
	}
};
