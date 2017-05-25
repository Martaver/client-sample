import * as React from "react";

import { RootState } from "../../store/index";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

interface ToolbarProps {
  Something: string
}

const mapStateToProps = (s: RootState, o: ToolbarProps) => ({

});

const mapDispatchToProps = (d: Dispatch<RootState>) => ({

});

export const Toolbar = connect(mapStateToProps, mapDispatchToProps)(p => (
  <div>Testing: {p.Something}</div>
))
