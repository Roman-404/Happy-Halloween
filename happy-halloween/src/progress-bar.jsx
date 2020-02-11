import React from 'react';

const Progress = ({done, handleSetShirt}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}/>
			   {done === 100 ? 
                  <button className='btn' onClick={handleSetShirt}>Поставить рубашку</button> : null
               }
		</div>
	);
};

export default Progress;