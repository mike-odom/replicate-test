import type { RequestHandler } from '@sveltejs/kit';
import { REPLICATE_API_TOKEN } from '$env/static/private';

interface RequestBody {
	prompt: string;
}

export const POST: RequestHandler = async ({ request }) => {
	const body: RequestBody = await request.json();

	const response = await fetch('https://api.replicate.com/v1/predictions', {
		method: 'POST',
		headers: {
			Authorization: `Token ${REPLICATE_API_TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			// Pinned to a specific version of Stable Diffusion
			// See https://replicate.com/stability-ai/stable-diffussion/versions
			version: '6359a0cab3ca6e4d3320c33d79096161208e9024d174b2311e5a21b6c7e1131c',

			// This is the text prompt that will be submitted by a form on the frontend
			input: { prompt: body?.prompt }
		})
	});

	if (response.status !== 201) {
		const error = await response.json();

		console.log('error', error);
		return new Response(JSON.stringify({ error: error.detail }), { status: 500 });
	}
	const data = await response.json();
	console.log('prediction response', data);

	return new Response(JSON.stringify(data));
};
