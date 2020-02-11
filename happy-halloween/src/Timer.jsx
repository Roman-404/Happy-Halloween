import React from 'react';
import moment from 'moment';

const Timer = ({date}) => {
const diff = moment(date).diff(moment().format())
    return moment(diff).format('DDD:hh:mm:ss')
}

export default Timer;