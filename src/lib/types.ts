export type Event = {
	id: number;
	image?: string;
	name: string;
	description: string;
	datetime: string;
	category: string;
	place: string;
	price: number;
	seats: number;
};

export type EventInput = Omit<Event, 'id'>;

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

export type Checkout = {
	id: number;
	name: string;
	email: string;
	seats: number;
};

export type CheckoutInput = Omit<Checkout, 'id'>;

export type Promo = {
	id: number;
	type: 'percentege' | 'fixed';
	code: string;
	description: string;
	amount: number;
	expiry: string;
	available: number;
};

export type PromoInput = Omit<Promo, 'id'>;
