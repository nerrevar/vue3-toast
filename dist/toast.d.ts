interface IToastState {
    isShown: boolean;
    state: 'success' | 'warning' | 'error';
    message: string;
    timeout: number;
}
declare const _default: import("vue").DefineComponent<{}, {
    state: IToastState;
    messageText: import("vue").ComputedRef<string>;
    hide: () => boolean;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}> & ({} | {}), {}>;
export default _default;
