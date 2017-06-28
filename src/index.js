import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Table from 'rc-table';
import registerServiceWorker from './registerServiceWorker';
import 'rc-table/assets/index.css';

const ads = {
  "ads": [
    {
      "id": 1,
      "remote_id": "123",
      "name": "123",
      "status": "ACTIVE",
    },
    {
      "id": 2,
      "remote_id": "456",
      "name": "456",
      "status": "ACTIVE",
    },
    {
      "id": 3,
      "remote_id": "789",
      "name": "789",
      "status": "ACTIVE",
    },
    {
      "id": 4,
      "remote_id": "901",
      "name": "901",
      "status": "ACTIVE",
    },
  ]
}

const ads_metrics = {
 "column_names": [
      "impressions",
      "reach",
      "frequency",
      "cpm",
      "spend",
      "ctr",
      "cost_per_inline_link_click",
      "actions:goal",
      "actions:link_click",
      "cost_per_action_type:cost_per_goal",
      "actions:offsite_conversion"
    ],
 "rows": [
       {
        "remote_id": "456",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 456
      },
      {
        "remote_id": "123",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 123
      },
      {
        "remote_id": "789",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 789
      },
      {
        "remote_id": "901",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 901
      }
    ]

}

var columns = ads_metrics["column_names"].map(function(title){
	return {title: title[0].toUpperCase() + title.substring(1,title.length-1), dataIndex: title.toLowerCase(), key: title.toLowerCase()}
});
columns[0] = Object.assign(columns[0], {width: 100, fixed: 'left'})

var data = ads_metrics["rows"]


var mountNode = document.getElementById('root');

ReactDOM.render(  
	<div style={{ width: 800 }}>
    <h2>HYFN Frontend Challenge</h2>
    <Table
      columns={columns}
      scroll={{ x: 1200 }}
      data={data}
    />
  </div>,document.getElementById('root'));

registerServiceWorker();
