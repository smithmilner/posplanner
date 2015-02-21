var React = require('react');
var PosPlanner = require('./posplanner');

React.render(
  <div className="container">
    <PosPlanner />
  </div>
, document.getElementById('app'));

/* Example export data model
{
  "tower": "Amarr Control Tower",
  "enabled_modules": [
    "x",
    "y",
    "z"
  ],
  "disabled_modules": [
    "x",
    "y",
    "z"
  ]
}
*/
