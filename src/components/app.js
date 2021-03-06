import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Reise from './components/reise';

export default class App extends Component {
  componentWillmount() {
      this.props.fetchUsers();
  }


  renderUser({id, name, email}) {
    return (
      <div>
<li className="list-group-item" key={id}>
<span className="label label-default label-pill pull-xs-right">
<a href={email}>{email}</a>
</span>
{name}
</li>
      </div>
    );
  }
render() {
  return (
    <div>
      <h4>Hi</h4>
      <Reise/>
      <h1>Blogpost</h1>

<ul className="list-group">
  {this.props.users.map(this.renderUser)}
</ul>
</div>
  )
}

}
