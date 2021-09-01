export interface ToastController {
  success: (message: string) => void,
  error: (message: string) => void,
  warning: (message: string) => void,
}

export const $toastState: ToastController

export interface IToastState {
  isShown: boolean,
  state: 'success' | 'warning' | 'error',
  message: string,
  timeout: number,
}

export const state: IToastState
