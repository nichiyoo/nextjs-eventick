export type Event = {
	id: number;
	image: string;
	name: string;
	description: string;
	datetime: string;
	category: string;
	place: string;
	price: number;
	seats: number;
};

export type Blog = {
	id: number;
	image: string;
	title: string;
	body: string;
	published: string;
	author: string;
};

export type Review = {
	id: number;
	name: string;
	image?: string;
	review: string;
};
