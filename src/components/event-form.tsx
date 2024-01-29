'use client';

import { ChevronRight, Minus, Plus } from 'lucide-react';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { submitEvent } from '@/app/events/[id]/action';
import { Event } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

import { Button } from './ui/button';

interface EventFormProps {
	event: Event;
}

export interface EventFormData {
	name: string;
	email: string;
	seats: number;
}

const EventForm: React.FC<EventFormProps> = ({ event }) => {
	const {
		control,
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EventFormData>({
		defaultValues: {
			name: '',
			email: '',
			seats: 1,
		},
	});

	const seats = watch('seats');
	const onSubmit = handleSubmit((data) => {
		React.startTransition(() => {
			submitEvent(data);
		});
	});

	return (
		<form className='flex flex-col' onSubmit={onSubmit}>
			<div className='mb-4'>
				<label htmlFor='name' className='mb-2 text-sm font-medium'>
					Name
				</label>
				<input
					type='text'
					id='name'
					placeholder='Name'
					className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm'
					{...register('name', {
						required: true,
						minLength: 3,
						maxLength: 50,
					})}
				/>
				{errors.name && <div className='mt-1 text-xs text-red-500'>Name must be between 3-50 characters</div>}
			</div>

			<div className='mb-4'>
				<label htmlFor='email' className='mb-2 text-sm font-medium'>
					Email
				</label>
				<input
					type='email'
					id='email'
					placeholder='Email'
					className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm'
					{...register('email', {
						required: true,
						minLength: 3,
						maxLength: 50,
					})}
				/>
				{errors.email && <div className='mt-1 text-xs text-red-500'>Enter a valid email address</div>}
			</div>

			<div className='mb-4'>
				<label htmlFor='seats' className='mb-2 text-sm font-medium'>
					Seats
				</label>
				<Controller
					name='seats'
					control={control}
					rules={{
						required: true,
						min: 1,
						max: event.seats,
					}}
					render={({ field }) => (
						<div className='flex items-center justify-between'>
							<Button
								className='text-indigo-950'
								variant='outline'
								size='icon'
								onClick={() => {
									if (field.value > 1) field.onChange(Number(field.value) - 1);
								}}>
								<Minus className='h-4 w-4' />
							</Button>
							<input
								type='number'
								id='seats'
								placeholder='Seats'
								className='w-30 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm'
								{...field}
							/>
							<Button
								className='text-indigo-950'
								variant='outline'
								size='icon'
								onClick={() => {
									if (field.value < event.seats) field.onChange(Number(field.value) + 1);
								}}>
								<Plus className='h-4 w-4' />
							</Button>
						</div>
					)}
				/>
				{errors.seats && <div className='mt-1 text-xs text-red-500'>Seats must be between 1-{event.seats}</div>}
			</div>

			<div className='mb-6'>
				<label htmlFor='price' className='mb-2 text-sm font-medium'>
					Price
				</label>
				<input
					type='text'
					id='price'
					placeholder='Price'
					className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm'
					value={formatCurrency(event.price * seats)}
					disabled
				/>
			</div>

			<Button type='submit'>Buy Ticket</Button>
		</form>
	);
};

export default EventForm;
