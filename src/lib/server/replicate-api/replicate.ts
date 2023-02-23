// There is this library, in alpha
// https://github.com/replicate/replicate-js/
// but YOLO I haven't written an API library in a minute

import { REPLICATE_API_TOKEN } from '$env/static/private';

export interface Model {
	path: string;
	description: string;
	version: string;
}

export interface ReplicateModel {
	description: string;
	github_url: string;
	latest_version: ReplicateModelVersion;
	name: string;
	license_url: string;
	owner: string;
	paper_url: string;
	url: string;
	visibility: string;
}

export interface ReplicateModelVersion {
	id: string;
	created_at: string; // "2022-04-26T19:29:04.418669Z",
	cog_version: string; //"0.3.0",
	// "openapi_schema": {...}
}

// interface ReplicateRequestResponse {}

interface CollectionsResponse {
	models: ReplicateModel[];
}

class Replicate {
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		console.log('apiKey', apiKey);
	}

	private apiKey: string;

	async getModels(collection: string) {
		const response: CollectionsResponse = await this.request(`/v1/collections/${collection}`);

		const { models } = response;

		console.log('models', models);

		return models.map((replicateModel) => {
			const model: Model = {
				path: `${replicateModel.owner}/${replicateModel.name}`,
				description: replicateModel.description,
				version: replicateModel.latest_version.id
			};
			return model;
		});
	}

	async request(path: string) {
		console.log('request with api key', this.apiKey);
		const response = await fetch(`https://api.replicate.com/${path}`, {
			headers: {
				Authorization: `Token ${this.apiKey}`,
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			const error = await response.json();

			console.error('replicate request error', error);

			return Promise.reject(error);
		}

		return response.json();
	}
}

const replicate = new Replicate(REPLICATE_API_TOKEN);

export default replicate;
