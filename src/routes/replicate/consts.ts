export interface Model {
	title: string;
	subTitle: string;
	modelName: string;
}

export const models: Model[] = [
	{
		title: 'Stable Diffusion v1.5',
		subTitle: 'Base model excellent for art',
		modelName: 'runwayml/stable-diffusion-v1-5'
	},
	{
		title: 'Stable Diffusion v2.1',
		subTitle: 'Base model excellent for photorealism',
		modelName: 'stabilityai/stable-diffusion-2-1-base'
	},
	{
		title: 'Analog',
		subTitle: 'Finetuned model on high quality analog photographs using Dreambooth',
		modelName: 'wavymulder/Analog-Diffusion'
	},
	{
		title: 'Anything v3.0',
		subTitle: 'Finetuned model excellent for anime',
		modelName: 'Linaqruf/anything-v3.0'
	},
	{
		title: 'Arcane',
		subTitle: 'Finetuned model on the Arcane 3D style using Dreambooth',
		modelName: 'nitrosocke/Nitro-Diffusion'
	},
	{
		title: 'Archer',
		subTitle: 'Finetuned model on the Archer 3D style using Dreambooth',
		modelName: 'nitrosocke/Nitro-Diffusion'
	},
	{
		title: 'Deliberate',
		subTitle: 'Finetuned model made for the masters',
		modelName: '&lt;private&gt;/deliberate'
	},
	{
		title: 'Disney Pixar',
		subTitle: 'Finetuned model on the Disney Pixar 3D style using Dreambooth',
		modelName: 'nitrosocke/Nitro-Diffusion'
	},
	{
		title: 'Double Exposure by Joachim',
		subTitle: 'Finetuned model excellent for double exposure images using Dreambooth',
		modelName: 'joachimsallstrom/Double-Exposure-Diffusion'
	},
	{
		title: 'DreamShaper',
		subTitle: 'Finetuned model that produces high-quality art',
		modelName: '&lt;private&gt;/dreamshaper'
	},
	{
		title: 'DucHaitenAIArt',
		subTitle: 'Finetuned model excellent for 3D art',
		modelName: 'DucHaiten/DucHaitenAIart'
	},
	{
		title: 'DucHaitenClassicAnime',
		subTitle: 'Finetuned model excellent for classic anime',
		modelName: 'DucHaiten/DH_ClassicAnime'
	},
	{
		title: 'DucHaitenDreamWorld',
		subTitle: 'Finetuned model excellent for Disney Pixar styles',
		modelName: 'DucHaiten/DucHaitenDreamWorld'
	},
	{
		title: 'DucHaitenSuperCute',
		subTitle: 'Finetuned model excellent for all things cute',
		modelName: 'DucHaiten/DucHaitenSuperCute_test'
	},
	{
		title: 'Eimis',
		subTitle: 'Finetuned model excellent for anime',
		modelName: 'eimiss/EimisAnimeDiffusion_1.0v'
	},
	{
		title: 'F222',
		subTitle: 'Finetuned model excellent for photorealism',
		modelName: '&lt;private&gt;/stable-diffusion-f222'
	},
	{
		title: 'Grapefruit',
		subTitle: 'Finetuned model excellent for Hentai',
		modelName: '&lt;private&gt;/grapefruit'
	},
	{
		title: 'Hassan',
		subTitle: 'Finetuned model excellent for photorealism',
		modelName: 'hassanblend/HassanBlend1.5.1.2'
	},
	{
		title: 'Liberty',
		subTitle: 'Finetuned model designed for freedom &amp; versatility',
		modelName: '&lt;private&gt;/liberty'
	},
	{
		title: 'NeverEnding Dream',
		subTitle: 'Finetuned model designed for realism &amp; anime',
		modelName: 'Lykon/NeverEnding-Dream'
	},
	{
		title: 'Openjourney',
		subTitle: 'Finetuned model on Midjourney high-quality art using Dreambooth',
		modelName: 'prompthero/openjourney'
	},
	{
		title: 'PFG',
		subTitle: 'Finetuned model excellent for anime',
		modelName: '&lt;private&gt;/stable-diffusion-pfg'
	},
	{
		title: 'Pixel Scenery',
		subTitle: 'Finetuned model on pixel art scenery using Dreambooth',
		modelName: 'PublicPrompts/All-In-One-Pixel-Model'
	},
	{
		title: 'Pixel Characters',
		subTitle: 'Finetuned model on pixel art characters using Dreambooth',
		modelName: 'PublicPrompts/All-In-One-Pixel-Model'
	},
	{
		title: 'Portrait Plus',
		subTitle: 'Finetuned model designed for capturing incredible portraits',
		modelName: 'wavymulder/portraitplus'
	},
	{
		title: 'PPP',
		subTitle: 'Finetuned model excellent for photorealism',
		modelName: '&lt;private&gt;/stable-diffusion-ppp'
	},
	{
		title: 'Realistic Vision',
		subTitle: 'Finetuned model excellent for photorealism',
		modelName: '&lt;private&gt;/stable-diffusion-real-vision'
	},
	{
		title: 'Redshift',
		subTitle: 'Finetuned model on high resolution 3D artworks using Dreambooth',
		modelName: 'nitrosocke/redshift-diffusion'
	},
	{
		title: 'RPG',
		subTitle: 'Finetuned model designed for RPG portraits and assets',
		modelName: 'Anashel/rpg'
	},
	{
		title: 'SynthwavePunk',
		subTitle: 'Finetuned model on the Synthwave and Inpunk styles using Dreambooth',
		modelName: '&lt;private&gt;/synthwave-punk'
	},
	{
		title: 'Vector Art',
		subTitle: 'Finetuned model on vector art',
		modelName: '&lt;private&gt;/vector-art'
	},
	{
		title: 'Waifu',
		subTitle: 'Finetuned model excellent for anime',
		modelName: 'hakurei/waifu-diffusion'
	}
];
