'use client';
import * as React from 'react';

export const useDebounce = <T extends unknown>(value: T, delay: number) => {
	const [debounceValue, setDebounceValue] = React.useState(value);

	React.useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debounceValue;
};
