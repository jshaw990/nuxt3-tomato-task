interface ITimerOption {
    icon: string
    index: number
    name: string
    time: number
}

export class TimerOption implements ITimerOption {
    icon: string = ''
    index: number = 0
    name: string = ''
    time: number = 0
}