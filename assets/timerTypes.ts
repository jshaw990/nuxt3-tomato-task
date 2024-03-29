import { TimerOption } from '../models/Timer'

export const timerOptions = [
    {
        index: 0,
        name: 'Long Break',
        time: 900,
        icon: 'ph:coffee-bold'
    },
    {
        index: 1,
        name: 'Pomodoro',
        time: 1500,
        icon: 'mdi-briefcase'
    },
    {
        index: 2,
        name: 'Short Break',
        time: 300,
        icon: 'ph:coffee-bold'
    },
    // {
    //     index: 3,
    //     name: 'Test (60)',
    //     time: 60,
    //     icon: 'ph:coffee-bold'
    // }
] as Array<TimerOption>