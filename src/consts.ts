// Single source of truth for the site's content. Edit here, not in the pages.
export const SITE = {
	name: 'Omprakash Gautam',
	title: 'Omprakash Gautam · Lead Backend Engineer',
	description:
		'Lead backend engineer in Pune. Ten years building multi-tenant enterprise SaaS, search and event pipelines, and backends for AI agents. I also build and self-host my own apps.',
	email: 'omprakash201194@gmail.com',
	// Public Formspree endpoint. Replace YOUR_FORM_ID after creating the form at formspree.io.
	formAction: 'https://formspree.io/f/YOUR_FORM_ID',
	blogUrl: 'https://blogs.gautamlabs.io',
	wpApi: 'https://blogs.gautamlabs.io/wp-json/wp/v2/posts',
	links: {
		github: 'https://github.com/omprakash201194',
		linkedin: 'https://www.linkedin.com/in/omprakash-gautam-20',
		onelifestack: 'https://onelifestack.com',
	},
};

export const STATS = [
	{ value: '10', suffix: '+', label: 'Years in backend engineering' },
	{ value: '13', suffix: '', label: 'Engineers in the team I lead' },
	{ value: '3', suffix: '', label: 'Services taken from empty repo to production' },
	{ value: '14', suffix: '+', label: 'Releases led, from first demo to GA' },
];

export const SKILLS = ['Java', 'Spring Boot', 'Kafka', 'OpenSearch', 'Redis', 'Kubernetes', 'MCP & AI agents', 'Docker'];

export const EXPERIENCE = [
	{
		org: 'Qualys, Pune',
		role: 'Lead Full Stack Software Engineer',
		period: 'Sept 2019 – present',
		note: 'Grew from engineer to lead across three product areas. Now leading the middleware and API layer of an enterprise risk platform and building backends for AI agents.',
	},
	{
		org: 'Persistent Systems, Pune',
		role: 'Module Lead, Identity & Access Management',
		period: 'Sept 2016 – Sept 2019',
		note: 'Led a module of an identity product, from requirements to release.',
	},
];
