'use client';

import { CalendarIcon } from 'lucide-react';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { submitPromo } from '@/app/admin/promotions/create/action';
import { PromoInput } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';

import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

interface PromoFormProps {
	//
}

const PromoForm: React.FC<PromoFormProps> = ({}) => {
	const {
		control,
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PromoInput>({
		defaultValues: {
			code: '',
			description: '',
			type: 'percentege',
			amount: 0,
			expiry: '',
			available: 0,
		},
	});

	const expiry = watch('expiry');
	const type = watch('type');

	const onSubmit = handleSubmit((data) => {
		React.startTransition(() => {
			submitPromo(data);
		});
	});

	return (
		<form className='flex flex-col' onSubmit={onSubmit}>
			<div className='mb-4'>
				<Label htmlFor='code'>Enter Promo Code</Label>
				<Input
					id='code'
					type='text'
					placeholder='Code'
					{...register('code', {
						required: true,
						minLength: 3,
						maxLength: 50,
					})}
				/>
				{errors.code && <div className='mt-1 text-xs text-red-500'>Code must be between 3-50 characters</div>}
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
					<div className='mt-1 text-xs text-red-500'>Description must be between 32-256 characters</div>
				)}
			</div>

			<div className='mb-4 grid grid-cols-2 gap-6'>
				<div>
					<Label htmlFor='type'>Type</Label>
					<Controller
						control={control}
						name='type'
						rules={{ required: true }}
						render={({ field }) => (
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select Type' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='percentege'>Percentege</SelectItem>
									<SelectItem value='fixed'>Fixed</SelectItem>
								</SelectContent>
							</Select>
						)}
					/>
					{errors.type && <div className='mt-1 text-xs text-red-500'>Type is required</div>}
				</div>

				<div>
					<Label htmlFor='amount'>Amount in {type === 'percentege' ? 'Percentage' : 'Rupiah'}</Label>
					<Input
						id='amount'
						type='number'
						placeholder='Amount'
						{...register('amount', {
							required: true,
							min: 1,
							max: type === 'percentege' ? 100 : Number.MAX_SAFE_INTEGER,
						})}
					/>
					{errors.amount && <div className='mt-1 text-xs text-red-500'>Amount must be between 1-100</div>}
				</div>
			</div>

			<div className='mb-4'>
				<Label htmlFor='expiry'>Promo Expiry</Label>
				<Controller
					name='expiry'
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
										!!expiry && 'text-left'
									)}>
									<CalendarIcon className='mr-2 h-4 w-4' />
									{expiry ? formatDate(expiry) : <span>Pick a date</span>}
								</button>
							</PopoverTrigger>
							<PopoverContent className='w-auto p-0' align='start'>
								<Calendar
									mode='single'
									selected={new Date(expiry)}
									onSelect={field.onChange}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					)}
				/>
				{errors.expiry && <div className='mt-1 text-xs text-red-500'>Date & Time is required</div>}
			</div>

			<div className='mb-6'>
				<Label htmlFor='available'>Available</Label>
				<Input
					id='available'
					type='number'
					placeholder='Available'
					{...register('available', {
						required: true,
						min: 1,
					})}
				/>
				{errors.available && <div className='mt-1 text-xs text-red-500'>Available must be greater than 0</div>}
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

export default PromoForm;
