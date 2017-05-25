import { connect as reduxConnect, MapDispatchToPropsParam, MapStateToPropsParam, MapDispatchToPropsObject, MapDispatchToPropsFunction, ComponentDecorator } from "react-redux";

/**
 * Accepts mapStateToProps function and mapDispatchToProps object and reveals a
 * React.StatelessComponent builder function with appropriately typed props.
 */
export function connect<TStateProps, TDispatchProps extends MapDispatchToPropsObject, TOwnProps>(s: MapStateToPropsParam<TStateProps, TOwnProps>, d: TDispatchProps) : ComponentDecorator<TOwnProps, TStateProps & TDispatchProps & TOwnProps>;
export function connect<TStateProps, TDispatchProps, TOwnProps>(s: MapStateToPropsParam<TStateProps, TOwnProps>, d: MapDispatchToPropsFunction<TDispatchProps, TOwnProps>): ComponentDecorator<TOwnProps, TStateProps & TDispatchProps & TOwnProps>;
export function connect<TStateProps, TDispatchProps, TOwnProps>(s: MapStateToPropsParam<TStateProps, TOwnProps>, d: MapDispatchToPropsParam<TDispatchProps, TOwnProps>) {
  return reduxConnect<TStateProps, TDispatchProps, TOwnProps>(s, d);
}

export type EmptyActionCreator<T extends string> = {
  (): { type: T }, type?: T,
};

export type PayloadActionCreator<T extends string, S, M, P> = {
  (state: S, meta?: M): { type: T, payload: P }, type?: T,
};

export type PayloadSelector<S, M, P> = (state: S, meta?: M) => P;

export function actionCreator<T extends string, S, M, P>(
  type: T, payloadSelector: PayloadSelector<S, M, P>,
): PayloadActionCreator<T, S, M, P>;
export function actionCreator<T extends string>(
  type: T,
): EmptyActionCreator<T>;
export function actionCreator<T extends string, S, M, P>(
  type: T, payloadSelector?: PayloadSelector<S, M, P>,
): PayloadActionCreator<T, S, M, P> | EmptyActionCreator<T> {
  if (payloadSelector == null) {
    const actionCreator: EmptyActionCreator<T> =
      () => ({ type });
    actionCreator.type = type;

    return actionCreator;
  } else {
    const actionCreator: PayloadActionCreator<T, S, M, P> =
      (state: S, meta?: M) => ({ type, payload: payloadSelector(state, meta) });
    actionCreator.type = type;

    return actionCreator;
  }
}
