

export function useLocalStorage(key: string): [string | null, (value: string) => void] {

	const saveToLocalStorage = (value: string): void => {
		window.localStorage.setItem(key, value);
	};

	return [window.localStorage.getItem(key), saveToLocalStorage];
}
