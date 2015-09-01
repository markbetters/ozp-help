// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var { Route, RouteHandler, Link } = Router;
module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },
	
render: function(){return ( 
<div>

<h1>Manage Stewards</h1>

<p>Stewards oversee listings in Center. They are the gatekeepers that approve, enable and moderate listings. There are two kinds of stewards: <b>org stewards</b> who oversee specific organizations and <b>center stewards</b> who oversee all listings and specific settings in the Center. At log-in, your system will determine your role as a user, org steward or center steward. When someone signs in as a steward, their name is added to the list of stewards in the Center Settings page:</p>

<p><img alt="Add new steward" src="Doc_images/AddNewSteward.png"  title="Add new steward" /></p>

<p>Center stewards cannot add or delete stewards listed on the Stewards tab. However, they can edit the organizations assigned to each steward.</p>

<h3>Access the steward settings:</h3>

<ol>
	<li>Click <img alt="Main Menu" src="Doc_images/Main_menu_icon.png"  /> on the right-side of the Global Toolbar.</li>
	<li>Select Center Settings<br />
	<img alt="Center Settings Link on Main Menu" src="Doc_images/centerSettingsLink_MainMenu.png"  title="Center Settings Link on Main Menu" /></li>
	<li>The Center Settings page will open to the Categories tab, click the stewards tab.</li>
</ol>


<h2>Edit</h2>
<p>To <b>edit </b>a steward's assigned organization(s):</p>

<ol>
	<li>From the Stewards tab on the Center Settings page, click the Display Name that you want to edit.</li>
	<li>The Edit button in the table header will become active, click it.</li>
	<li>The Edit Steward window will open:
	<ul>
		<li>To remove an organization, click Remove beside the Stewarded organizations drop-down field.</li>
		<li>To add an organization, click Add and select the new organization from the drop-down list.</li>
	</ul>
	</li>
	<li>Click Save, the change will appear on the list of Stewards on the Center Settings page.</li>
</ol>


	</div>
	);
	}
});
