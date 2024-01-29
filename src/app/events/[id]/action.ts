'use server';

import { CheckoutInput } from '@/lib/types';

export const submitCheckout = async (data: CheckoutInput) => {
	console.log(data);
};
