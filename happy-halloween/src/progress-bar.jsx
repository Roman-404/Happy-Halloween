import React from 'react';

const Progress = ({done, handleSetShirt}) => {
	const [style, setStyle] = React.useState({});
	const [progress, setProgress] = React.useState(false);
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 1000);

	setTimeout(() => {
		if (done === 100) {
		setProgress(true)};
	}, 2000);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}/>
			   {progress ? 
                  <button className='btn' onClick={handleSetShirt}>Поставить рубашку</button> : null
               }
		</div>
	);
};

export default Progress;