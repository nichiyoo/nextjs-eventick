'use server';

import { EventFormData } from '@/components/event-form';

export const submitEvent = async (data: EventFormData) => {
	console.log(data);
};
