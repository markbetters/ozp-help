// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var { Route, RouteHandler, Link } = Router;
module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },
	
render: function(){
return ( 
<div>

<h1>Edit or Delete a Dashboard</h1>

<p>After creating a dashboard it is still possible to change the dashboard name or view format (grid or desktop). However, if you change its view format, you will lose the current state of the listings on that dashboard and any unsaved information entered into those listings. Therefore when the dashboard resets you will lose any data loaded in that dashboard.</p>

<p>To edit a dashboard:</p>

<ol>
	<li>Click the <i className="icon-caret-up"></i> at the bottom-left side of Webtop's lower toolbar.</li>
	<li>Click the edit icon beside the dashboard that you want to change:<br />
	<img alt="Edit the dashboard" src="Doc_images/dashboard-edit-icon.png"  title="Edit the dashboard" /></li>
	<li>The edit window opens. Change the Name or View.<br />
	<i>Note: If you change the view, you will lose the state of the listings on the dashboard.</i></li>
	<li>Click Save Dashboard.</li>
</ol>

<h2>Delete a Dashboard</h2>
<p>To delete a dashboard:</p>

<ol>
	<li>Click the <i className="icon-caret-up"></i> at the bottom-left side of Webtop's lower toolbar.</li>
	<li>Click the trashcan icon beside the dashboard that you want to delete.</li>
	<li>A warning appears, click OK to confirm that you want to delete the dashboard.</li>
	<li>The dashboard will be removed.</li>
</ol>


	</div>
	);
	}
});
