import React, {Component} from 'react';
import './styles.css';
import PageInfo from './page-info';

export default class App extends Component {
    state = {
        shirt_set: false
    }
    
    handleSetShirt = () => {
        this.setState({
            shirt_set: true
        });
    };

    render() {
        const {shirt_set} = this.state;
        
        return (
            <div className='side-bg'>
                <div className='background-screen'>
                    {shirt_set ? null
                    :
                    <PageInfo shirt_set={shirt_set}
                              handleSetShirt={this.handleSetShirt}
                    />}
                </div>
            </div>
        )
    };
};