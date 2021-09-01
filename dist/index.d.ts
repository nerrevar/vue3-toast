import { App } from 'vue';
export interface ToastController {
    success: (message: string) => void;
    error: (message: string) => void;
    warning: (message: string) => void;
}
declare const _default: {
    install: (app: App, _: unknown) => void;
};
export default _default;
