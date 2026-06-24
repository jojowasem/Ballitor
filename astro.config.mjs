// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jojowasem.github.io',
	base: '/Ballitor',
	integrations: [
		starlight({
			title: 'Ballis Campaign Wiki',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Sobre o mundo',
					items: [{ autogenerate: { directory: 'mundo' } }],
				},
				{
					label: 'Personagens & NPCs',
					items: [{ autogenerate: { directory: 'personagens' } }],
				},
				{
					label: 'Casas, Tribos e Povos',
					items: [{ autogenerate: { directory: 'casas' } }],
				},
				{
					label: 'Províncias',
					items: [{ autogenerate: { directory: 'provincias' } }],
				},
			],
		}),
	],
});
