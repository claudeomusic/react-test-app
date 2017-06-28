import React, { Component } from 'react';
import Table from 'rc-table';
import 'rc-table/assets/index.css';
import './CustomTable.css';

class CustomTable extends Component {
  render() 
  {
    // joining data between ads/metrics
    let ads_metrics = this.props.ads_metrics
    let ads = this.props.ads
    var DATA = ads_metrics["rows"].map(function(metric_item)
    {
      var result = metric_item
      ads["ads"].forEach(function(ad_item)
      {
        if(ad_item["remote_id"] === metric_item["remote_id"])
        {
          delete metric_item["remote_id"]
          result = Object.assign({name: ad_item["name"]}, metric_item,)
        }
      });
      return result;
    });

    // Formatting data to rc-table requirements
    var COLUMNS = Object.keys(DATA[0]).map(function(title)
    {
      if(title === "name")
      {  
        return {title: title, dataIndex: title, key: title, width: 50, fixed: 'left'}
      }
      else
      {
        return {title: title, dataIndex: title, key: title}
      }
    });

    return (
      <div style={{ width: this.props.width }}>
        <h2>React Tables</h2>
        <Table
          columns={COLUMNS}
          scroll={{ x: this.props.scroll }}
          data={DATA}
        />
      </div>
    );
  }
}

export default CustomTable;
