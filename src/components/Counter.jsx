import { useState } from 'react';

export default function Greeting() {
	const [counter, setCounter] = useState(0);

	return <button onClick={() => setCounter((r) => r + 1)}>Contador: {counter} </button>;
}
