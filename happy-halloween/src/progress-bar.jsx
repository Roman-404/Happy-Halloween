import React from 'react';

const Progress = ({progress, handleSetShirt}) => {
	const [style, setStyle] = React.useState({});
	const [done, setProgress] = React.useState(false);
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${progress}%`
		}
		
		setStyle(newStyle);
	}, 1000);

	setTimeout(() => {
		if (progress === 100) {
		setProgress(true)};
	}, 2000);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}/>
			   {done ? 
                  <button className='btn' onClick={handleSetShirt}>Поставить рубашку</button> : null
               }
		</div>
	);
};

export default Progress;