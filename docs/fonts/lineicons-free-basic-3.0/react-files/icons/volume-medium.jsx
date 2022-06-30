import React from 'react';

function VolumeMedium(props) {
	const title = props.title || "volume medium";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.6 16.5c-.7-.7-1.8-.7-2.5-.1-.7.7-.7 1.8-.1 2.5 6.9 7.2 6.9 19 0 26.2-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5 8.2-8.6 8.2-22.6 0-31.1z"/>
		<path d="M46 24.1c-.7.7-.7 1.8-.1 2.5 2.9 3 2.9 7.9 0 10.9-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5 4.2-4.4 4.2-11.4 0-15.8-.7-.8-1.8-.8-2.5-.1z"/>
		<path d="M34.8 12.2c-1.4-.8-3.1-.7-4.5.1l-11 6.9c-.1.1-.3.1-.5.1H5.7c-2.5 0-4.4 2-4.4 4.5V40c0 2.5 2 4.5 4.4 4.5h13.1c.2 0 .3 0 .5.1l11 6.9c.7.5 1.5.7 2.4.7.7 0 1.5-.2 2.2-.6 1.4-.8 2.3-2.3 2.3-3.9V16.1c-.1-1.6-1-3.1-2.4-3.9zm-1.2 35.7c0 .5-.3.8-.5.8-.1.1-.5.2-1 0l-11-6.9c-.7-.4-1.5-.7-2.4-.7h-13c-.5 0-.9-.4-.9-1V23.9c0-.5.4-1 .9-1h13.1c.8 0 1.7-.2 2.4-.7l11-6.9c.4-.3.8-.1 1 0 .1.1.5.3.5.8v31.8z"/>
	</g>
</svg>
	);
};

export default VolumeMedium;