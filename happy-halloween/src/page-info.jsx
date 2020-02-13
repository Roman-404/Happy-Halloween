import React, {Component} from 'react';
import Tasks from './tasks';
import react_loading from './graphics/react-loading.png';
import axios from 'axios';
import moment from 'moment';

export default class PageInfo extends Component {
    state = {
        loading: true,
        tasks: [],
        date_to: null,
        timer: null,
        enum_dates: ['дней', 'часов', 'минут', 'секунд']
    }

    componentDidMount() {
        this.loadTasks()
        this.timer = setInterval(() => {
            this.setState({
                timer: this.getTimer(this.state.date_to)
            })
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timer)
    };

    loadTasks = () => {
        axios.get('http://sol-tst.herokuapp.com/api/v1/tasks/')
        .then(response => {
            return response.data
        })
        .then(data => {
            this.setState({
                tasks: data.tasks,
                date_to: data.endsAt,
                loading: false
            })
        })
        .catch(error => {
            console.log(error)
        });
    };

    getTimer = date => {
        const diff = moment(date).diff(moment().format())
        const timer = moment(diff).format('DDD:hh:mm:ss').split(':')
    return timer
    };


    render() {
        const {loading, tasks, timer, enum_dates} = this.state;
        return(
            <div>
                <img className='page-info' src={require('./graphics/header.png')} alt=''/>
                  <div className='background'>
                      <h1 className='timer'>{timer ? timer.map((e,k) => <span key={k} className='font-title'>
                          {e + (timer.length-1 === k ? '' : ':')}
                            <div className='font-subtitle'>{enum_dates.find((i,key) => k===key)}</div></span>) : null}</h1>
                      {loading ? <img src={react_loading} className='react-loading' alt='' />
                      :
                     <Tasks tasks={tasks}
                            handleSetShirt={this.props.handleSetShirt}
                        />}
                  </div>
            </div>
        );
    };
};