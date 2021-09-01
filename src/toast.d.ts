export interface IToastState {
  isShown: boolean,
  state: 'success' | 'warning' | 'error',
  message: string,
  timeout: number,
}

export const state: IToastState
