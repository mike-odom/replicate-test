import { REPLICATE_API_TOKEN } from '$env/static/private';
import type { RequestHandler } from '../$types';

interface RouteParams {
	predictionId: string;
}

interface RequestBody {
	predictionId: string;
}

export const POST: RequestHandler = async ({ request, params }) => {
	console.log('params', params);
	const { predictionId } = params as RouteParams;

	const response = await fetch('https://api.replicate.com/v1/predictions/' + predictionId, {
		headers: {
			Authorization: `Token ${REPLICATE_API_TOKEN}`,
			'Content-Type': 'application/json'
		}
	});

	console.log('response', response);
	console.log('status', response.status);

	if (response.status !== 200) {
		const error = await response.json();

		console.log('error', error);
		return new Response(JSON.stringify({ error: error.detail }), { status: 500 });
	}
	const data = await response.json();
	console.log('prediction response', data);

	return new Response(JSON.stringify(data));
};
