import { connect, MapDispatchToPropsParam } from "react-redux";
import { RouteComponentProps } from "react-router";

/**
 * Accepts mapStateToProps function and mapDispatchToProps object and reveals a
 * React.StatelessComponent builder function with appropriately typed props.
 */
export function stateless<RT, D extends MapDispatchToPropsParam<{}, RT & D>>(s: (...params: any[]) => RT, d: D) {
  return (component: React.StatelessComponent<RT & D & RouteComponentProps<any> & JSX.Element>) => {
    return connect<{}, {}, RT & D & RouteComponentProps<any> & JSX.Element>(s, d)(component);
  };
}
