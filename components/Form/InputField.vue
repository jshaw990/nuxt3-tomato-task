<script setup lang="ts">
const emit = defineEmits(['fieldBlurred', 'iconClicked'])
const props = defineProps({
    fieldKey: {
        type: String,
        required: true
    },
    appendIcon: {
        type: String,
        required: false,
        default: ''
    },
    fieldPlaceholder: {
        type: String,
        required: false,
        default: ''
    },
    fieldType: {
        type: String,
        required: false,
        default: 'text'
    },
    isFieldDisabled: {
        type: Boolean,
        required: false,
        default: false
    },
    prependIcon: {
        type: String,
        required: false,
        default: ''
    },
    validationType: {
        type: String,
        required: false,
        default: ''
    }
})

const state = reactive({
    errorMessages: [] as Array<string>,
    fieldData: '',
    isShowingPassword: false
})

const handleFieldInputBlurred = (value: string) => {
    state.errorMessages = []
    if (props.validationType.length > 0) {
        const validationErrorList = useFormValidation(value, props.validationType, props.fieldKey)
        state.errorMessages.push(...validationErrorList)
    }
    emit('fieldBlurred', props.fieldKey, value, state.errorMessages.length)
}

const handleIconClicked = () => {
    emit('iconClicked', props.fieldKey, state.fieldData)
}

const inputType = computed(() => {
    if (props.fieldType.toLowerCase() !== 'password') {
        return props.fieldType
    }

    if (state.isShowingPassword) {
        return 'text'
    }

    return 'password'
})
</script>

<template>
    <div class="flex flex-col gap-2 w-full max-w-xs">
        <div
            class="flex flex-row max-w-xs h-[68px] w-full justify-between items-center p-4 gap-4 border-2 border-neutral-800 rounded-lg">
            <Icon :name="props.fieldType.toLowerCase() === 'password' ? 'mdi:key-chain-variant' : props.prependIcon"
                size="32px" />
            <input v-model="state.fieldData" class="w-full h-full focus:ring-0 focus:outline-none bg-transparent p-1"
                :disabled="props.isFieldDisabled" :placeholder="props.fieldPlaceholder" :type="inputType"
                @blur="handleFieldInputBlurred($event.target.value)" />
            <template v-if="props.fieldType.toLowerCase() === 'password'">
                <Icon :name="(state.isShowingPassword ? 'mdi:eye-off' : 'mdi:eye')" size="32px"
                    class="cursor-pointer hover:text-tt-red-1"
                    @click="state.isShowingPassword = !state.isShowingPassword" />
            </template>
            <template v-else-if="props.appendIcon.length > 0">
                <Icon :name="props.appendIcon" size="32px" class="cursor-pointer hover:text-tt-red-1"
                    @click="handleIconClicked" />
            </template>
        </div>
        <template v-for="error in state.errorMessages" :key="error">
            <FormErrorMessage :errorText="error" />
        </template>
    </div>
</template>