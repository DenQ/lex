import urlManager from 'common/utils/url-manager';

export type TBreadCrumb = {
	to?: string;
	title: string;
};

export const buildBreadCrumbs = ():Array<TBreadCrumb> => [
	{
		to: urlManager.home(),
		title: 'Home',
	},
	{
		to: undefined,
		title: 'Settings',
	},
];
