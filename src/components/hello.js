import React, { Component } from 'react';
import '../App.css';
import Cmp2 from '../components/cmp2';
import Cmp3 from '../components/cmp3';
class Hello extends Component {
  render() {
    return (
      <div className="row">
        <Cmp2 />
        <Cmp2 />
        <Cmp3 />
      </div>
    );
  }
}

export default Hello;
