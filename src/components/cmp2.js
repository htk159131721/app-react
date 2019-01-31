import React, { Component } from 'react';
import '../App.css';

class Cmp2 extends Component {
  render() {
    return (
		<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
			<div className="card">
				<div className="card-block">
					<h4 className="card-title">Componet2</h4>
						<ul className="list-group">
							<li className="list-group-item">Item 1</li>
							<li className="list-group-item">Item 2</li>
							<li className="list-group-item">Item 3</li>
						</ul>
					<a href="#" className="btn btn-primary">Button</a>
				</div>
			</div>
		</div>
    );
  }
}

export default Cmp2;
