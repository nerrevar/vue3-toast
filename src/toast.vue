<template>
  <div
    v-if="state.isShown"
    class="toast"
    :class="{
      success: state.state === 'success',
      error: state.state === 'error',
      warning: state.state === 'warning',
    }"
    @click="hide"
  >
    {{ messageText }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, inject } from 'vue'

import { IToastState } from './index'

export default defineComponent({
  name: 'Toast',
  setup () {
    const state: IToastState = inject('$toastState') as IToastState

    const messageText = computed(() => {
      switch (state.state) {
        case 'success': return state.message ? state.message + '!' : 'Successful request!'
        case 'warning': return `Warning: ${state.message}`
        case 'error': return `Error: ${state.message ? state.message : 'request error'}!`
        default: return 'Invalid state!'
      }
    })

    const hide = () => state.isShown = false

    watch(
      () => state.isShown,
      () => setTimeout(hide, state.timeout)
    )

    return {
      state,
      messageText,
      hide,
    }
  },
})
</script>

<style lang="sass">
.toast
  position: fixed
  right: 50px
  bottom: 30px
  min-width: 100px
  min-height: 30px
  z-index: 10000
  padding: 0.7em
  text-align: center
  color: white

.success
  background-color: #00E676

.error
  background-color: #FF5252

.warning
  background-color: #FFB74D
</style>
