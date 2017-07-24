import { connect as reduxConnect, MapDispatchToPropsParam, MapStateToPropsParam, MapDispatchToPropsObject, MapDispatchToPropsFunction, ComponentDecorator } from "react-redux";
import { RouteComponentProps } from "react-router";

/**
 * Accepts mapStateToProps function and mapDispatchToProps object and reveals a
 * React.StatelessComponent builder function with appropriately typed props.
 */
export function connect<TStateProps, TDispatchProps extends MapDispatchToPropsObject, TOwnProps>(s: MapStateToPropsParam<TStateProps, TOwnProps>, d: TDispatchProps)
: ComponentDecorator<TOwnProps, TStateProps & TDispatchProps & TOwnProps>;

export function connect<TStateProps, TDispatchProps, TOwnProps>(s: MapStateToPropsParam<TStateProps, TOwnProps>, d: MapDispatchToPropsFunction<TDispatchProps, TOwnProps>)
: ComponentDecorator<TOwnProps, TStateProps & TDispatchProps & TOwnProps>;

export function connect<TStateProps, TDispatchProps, TOwnProps>(s: MapStateToPropsParam<TStateProps, TOwnProps>, d: MapDispatchToPropsParam<TDispatchProps, TOwnProps>) {
  return reduxConnect<TStateProps, TDispatchProps, TOwnProps>(s, d);
}

