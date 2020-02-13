import React from 'react';

const Progress = ({progress, handleSetShirt}) => {
	const [style, setStyle] = React.useState({});
	const [done, setProgress] = React.useState(false);
	
	React.useEffect(() => {
		const set = setTimeout(() => {
			const newStyle = {
				opacity: 1,
				width: `${progress}%`
			};
	
			setTimeout(() => {
				if (progress === 100) {
				setProgress(true)};
			}, 1000);
			
			setStyle(newStyle);
		}, 500);
		return () => {
			clearTimeout(set)
		}
	},[done, progress]);
	
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