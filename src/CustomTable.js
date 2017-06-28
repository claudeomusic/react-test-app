import React, { Component } from 'react';
import Table from 'rc-table';
import 'rc-table/assets/index.css';
import './CustomTable.css';

class CustomTable extends Component {
  render() {
    return (
      <div style={{ width: this.props.width }}>
        <h2>HYFN Frontend Challenge</h2>
        <Table
          columns={this.props.columns}
          scroll={{ x: this.props.scroll }}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default CustomTable;
