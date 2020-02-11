import React from 'react';

const Progress = ({done, handleSetShirt}) => {
	const [style, setStyle] = React.useState({});
	const [progress=false, setProgress] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 1000);

	setTimeout(() => {
		if (done === 100) {
		const newProgress = {
			done: true
		}
		
		setProgress(newProgress)};
	}, 2000);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}/>
			   {progress.done ? 
                  <button className='btn' onClick={handleSetShirt}>Поставить рубашку</button> : null
               }
		</div>
	);
};

export default Progress;