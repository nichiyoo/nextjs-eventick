'use client';

import { CalendarIcon } from 'lucide-react';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { submitEvent } from '@/app/admin/events/create/action';
import { EventInput } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';

import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

interface EventFormProps {
	//
}

const EventForm: React.FC<EventFormProps> = ({}) => {
	const {
		control,
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EventInput>({
		defaultValues: {
			image: '',
			name: '',
			description: '',
			datetime: '',
			category: '',
			place: '',
			price: 0,
			seats: 0,
		},
	});

	const date = watch('datetime');
	const onSubmit = handleSubmit((data) => {
		React.startTransition(() => {
			submitEvent(data);
		});
	});

	return (
		<form className='flex flex-col' onSubmit={onSubmit}>
			<div className='mb-4'>
				<Label htmlFor='name'>Enter Event Name</Label>
				<Input
					id='name'
					type='text'
					placeholder='Name'
					{...register('name', {
						required: true,
						minLength: 3,
						maxLength: 50,
					})}
				/>
				{errors.name && <div className='mt-1 text-xs text-red-500'>Name must be between 3-50 characters</div>}
			</div>

			<div className='mb-4'>
				<Label htmlFor='description'>Description</Label>
				<Textarea
					rows={5}
					id='description'
					placeholder='Description'
					{...register('description', {
						required: true,
						minLength: 32,
						maxLength: 256,
					})}
				/>
				{errors.description && (
					<div className='mt-1 text-xs text-red-500'>Description must be between 3-50 characters</div>
				)}
			</div>

			<div className='mb-4'>
				<Label htmlFor='datetime'>Date & Time</Label>
				<Controller
					name='datetime'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field }) => (
						<Popover>
							<PopoverTrigger asChild>
								<button
									role='button'
									className={cn(
										'flex w-full items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm',
										!!date && 'text-left'
									)}>
									<CalendarIcon className='mr-2 h-4 w-4' />
									{date ? formatDate(date) : <span>Pick a date</span>}
								</button>
							</PopoverTrigger>
							<PopoverContent className='w-auto p-0' align='start'>
								<Calendar
									mode='single'
									selected={new Date(date)}
									onSelect={field.onChange}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					)}
				/>
				{errors.datetime && <div className='mt-1 text-xs text-red-500'>Date & Time is required</div>}
			</div>

			<div className='mb-4 grid grid-cols-2 gap-6'>
				<div>
					<Label htmlFor='category'>Category</Label>
					<Controller
						name='category'
						control={control}
						rules={{
							required: true,
						}}
						render={({ field }) => (
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select Category' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='concert'>Concert</SelectItem>
									<SelectItem value='conference'>Conference</SelectItem>
									<SelectItem value='exhibition'>Exhibition</SelectItem>
									<SelectItem value='festival'>Festival</SelectItem>
								</SelectContent>
							</Select>
						)}
					/>
					{errors.category && (
						<div className='mt-1 text-xs text-red-500'>Category must be between 3-50 characters</div>
					)}
				</div>

				<div>
					<Label htmlFor='image'>Image</Label>
					<Input
						id='image'
						type='file'
						placeholder='Image'
						{...register('image', {
							required: false,
						})}
					/>
					{errors.image && <div className='mt-1 text-xs text-red-500'>Error uploading image</div>}
				</div>
			</div>

			<div className='mb-4'>
				<Label htmlFor='place'>Place</Label>
				<Input
					id='place'
					type='text'
					placeholder='Place'
					{...register('place', {
						required: true,
						minLength: 3,
						maxLength: 50,
					})}
				/>
				{errors.place && <div className='mt-1 text-xs text-red-500'>Place must be between 3-50 characters</div>}
			</div>

			<div className='mb-6 grid grid-cols-2 gap-6'>
				<div>
					<Label htmlFor='price'>Price</Label>
					<Input
						id='price'
						type='number'
						placeholder='Price'
						{...register('price', {
							required: true,
							min: 0,
						})}
					/>
					{errors.price && <div className='mt-1 text-xs text-red-500'>Price must be greater than 0</div>}
				</div>

				<div>
					<Label htmlFor='seats'>Seats</Label>
					<Input
						id='seats'
						type='number'
						placeholder='Seats'
						{...register('seats', {
							required: true,
							min: 0,
						})}
					/>
					{errors.seats && <div className='mt-1 text-xs text-red-500'>Seats must be greater than 0</div>}
				</div>
			</div>

			<div className='flex space-x-2'>
				<Button type='submit' size='lg' variant='default'>
					Submit
				</Button>
				<Button type='reset' size='lg' variant='secondary'>
					Reset
				</Button>
			</div>
		</form>
	);
};

export default EventForm;
