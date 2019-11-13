import React, { PureComponent } from "react";

export default class Table extends PureComponent {
  render() {
    console.log("Render");
    return (
      <div>
        <div>
          <h2>COUNTER</h2>
          <button onClick={() => this.props.increment("increament payload")}>
            INCREMENT
          </button>
          <button onClick={() => this.props.decrement("decrement payload")}>
            DECREMENT
          </button>
          <button onClick={() => this.props.reset("reset payload 1")}>
            RESET 1
          </button>
          <button onClick={() => this.props.reset("reset payload 2")}>
            RESET 2
          </button>
          <div>{this.props.counter.counter}</div>
        </div>
        <div>
          <h2>USERS</h2>
          <button onClick={() => this.props.add("add payload")}>ADD</button>
          <button onClick={() => this.props.remove("remove payload")}>
            REMOVE
          </button>
          {this.props.user.users.map(user => (
            <div>{user._id}</div>
          ))}
        </div>
      </div>
    );
  }
}
