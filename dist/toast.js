import { defineComponent, computed, watch, inject } from 'vue';
export default defineComponent({
    name: 'Toast',
    template: `<div
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
  </div>`,
    setup() {
        const state = inject('$toastState');
        const messageText = computed(() => {
            switch (state.state) {
                case 'success': return state.message ? state.message + '!' : 'Successful request!';
                case 'warning': return `Warning: ${state.message}`;
                case 'error': return `Error: ${state.message ? state.message : 'request error'}!`;
                default: return 'Invalid state!';
            }
        });
        const hide = () => state.isShown = false;
        watch(() => state.isShown, () => setTimeout(hide, state.timeout));
        return {
            state,
            messageText,
            hide,
        };
    },
});
