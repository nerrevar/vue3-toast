import { reactive } from 'vue';
import Toast from './toast';
const $toastState = reactive({
    timeout: 10000,
    isShown: false,
    state: 'success',
    message: '',
});
export default {
    install: (app, _) => {
        app.component('vue-toast', Toast);
        app.provide('$toastState', $toastState);
        app.provide('$toast', {
            success: (message = '') => {
                $toastState.state = 'success';
                $toastState.message = message;
                $toastState.isShown = true;
            },
            error: (message = '') => {
                $toastState.state = 'error';
                $toastState.message = message;
                $toastState.isShown = true;
            },
            warning: (message = '') => {
                $toastState.state = 'warning';
                $toastState.message = message;
                $toastState.isShown = true;
            }
        });
    }
};
