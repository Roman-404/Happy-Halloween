import React, {Component} from 'react';
import Tasks from './tasks';
import react_loading from './graphics/react-loading.png';
import axios from 'axios';
import Timer from './Timer';

export default class PageInfo extends Component {
    state = {
        loading: true,
        tasks: [],
        date: null
    }

    componentDidMount() {
        this.loadTasks()
        setInterval(() => {
            this.setState({
            })
        }, 1000);
    }

    loadTasks = () => {
        axios.get('http://sol-tst.herokuapp.com/api/v1/tasks/')
        .then(response => {
            return response.data
        })
        .then(data => {
            this.setState({
                tasks: data.tasks,
                date: data.endsAt,
                loading: false
            })
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() {
        const {loading, tasks, date} = this.state;
        return(
            <div>
                <img className='page-info' src={require('./graphics/header.png')} alt=''/>
                  <div className='background'>
                      <h1 className='timer'><Timer date={date}/></h1>
                      {loading ? <img src={react_loading} className='react-loading' alt='' />
                      :
                     <Tasks tasks={tasks}
                            handleSetShirt={this.props.handleSetShirt}
                        />}
                  </div>
            </div>
        )
    }
}