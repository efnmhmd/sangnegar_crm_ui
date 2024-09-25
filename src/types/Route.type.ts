export type GuestRouteType = {
	path: string;
	element: JSX.Element;
}[];

export type AuthenticatedRouteType = {
	path: string;
	element: JSX.Element;
	children?: {
		path: string;
		element: JSX.Element;
		children?: { path: string; element: JSX.Element }[];
	}[];
}[];
