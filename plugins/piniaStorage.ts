// plugins/myPiniaPlugin.ts
import { PiniaPluginContext } from 'pinia'
import { useTomatoStore } from '@/store/tomatoStore'


function MyPiniaPlugin({ store }: PiniaPluginContext) {
    const { getTimerState } = useTomatoStore()
    store.$subscribe((mutation) => {
        console.log(store)
        // react to store changes
        console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`)
        localStore().writeToLocalStorage('tomatoStore', JSON.stringify(getTimerState))
    })

    // Note this has to be typed if you are using TS
    return { creationTime: new Date() }
}

export default defineNuxtPlugin(({ $pinia }) => {
    $pinia.use(MyPiniaPlugin)
})