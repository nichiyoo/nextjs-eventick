'use server';

import { EventInput } from '@/lib/types';

export const submitEvent = async (data: EventInput) => {
	console.log(data);
};
