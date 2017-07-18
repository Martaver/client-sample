import { palette, spacing } from "../styles";
import * as React from "react";

import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "react-redux";
import { connect } from "../tools/react-redux-typescript";

import * as logo from "./logo.svg";

import { style } from "typestyle";
import { url, quote, px, percent } from "csx";
import { Action } from "redux";
import { flexRoot, content, flex } from "csstips/lib";

const styles = {

};

interface FooterProps { }

interface StateProps { }

interface DispatchProps { }

class FooterComponent extends React.Component<FooterProps & StateProps & DispatchProps, RootState> {
  render() {
    return (

    );
  }
}

const mapStateToProps = (s: RootState, p: FooterProps) => ({ });

const mapDispatchToProps = (d: Dispatch<RootState>) => ({ });

export const Footer = connect<StateProps, DispatchProps, FooterProps>(mapStateToProps, mapDispatchToProps)(FooterComponent);
