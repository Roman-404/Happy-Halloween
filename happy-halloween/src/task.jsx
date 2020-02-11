import React, { Component } from 'react';
import kings_image from './graphics/task-kings.png';
import time_image from './graphics/task-time.png';
import tournaments_image from './graphics/task-tournaments.png';
import Progress from './progress-bar';


export default class Task extends Component {
    state = {
        init_tasks: [{
            type: 'kings',
            img: kings_image,
            description: 'Выиграть три игры, разложив всех королей'
        },{
            type: 'time',
            img: time_image,
            description: 'Выиграть три игры, каждую менее чем за 3 минуты'
        },{
            type: 'tournaments',
            img: tournaments_image,
            description: 'Выиграть пять турниров подряд'
        }],
        task: {}
    }

    componentDidMount() {
        this.setState({
            task:  this.createTask(this.props.task)
        });
    };
    
    createTask = value => {
        const task = this.state.init_tasks.find(e => e.type === value.type)
        return {
            ...task,
            progress: value.progress
        }
    }

    render() {
        const {task} = this.state;
        return (
            <div className='task'>
                <img src={task.img} alt='' className='img'/>
                <div className='font'>
                   {task.description}
                </div>
                <Progress done={task.progress}
                          handleSetShirt={this.props.handleSetShirt}
                    />
            </div>
        )
    };
};