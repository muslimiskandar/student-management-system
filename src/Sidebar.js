import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
  state = {
    menuOpen: false,
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/timetable"
          activeClassName="is-active"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Timetable
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/attendance"
          activeClassName="is-active"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Attendance
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/resources"
          activeClassName="is-active"
        >
          Resources
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/exam-results"
          activeClassName="is-active"
        >
          Exam results
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/online-applies"
          activeClassName="is-active"
        >
          Online applies
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/personal-information"
          activeClassName="is-active"
        >
          Personal information
        </Link>
      </Menu>
    );
  }
}
