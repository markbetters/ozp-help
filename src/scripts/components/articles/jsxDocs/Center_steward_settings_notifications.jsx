// Automatically Generated Module
var React = require('react');
module.exports = React.createClass({
render: function(){
return ( 
<div>

<h1><a id="Notifications" name="Notifications">Notifications</a></h1>

<p>Only Center Stewards can alert users via the Notifications feature.</p>

<p>&nbsp;This section explains how to send and cancel notifications:</p>

<ol>
	<li>From the Center Settings page, click the Notifications tab.</li>
	<li>Schedule and write the notification:
	<ol >
		<li>In the Expires&nbsp;On field, enter the date when you want the Notification message to disappear from users&rsquo; drop-down notifications list on their Global Toolbars.<br />
		<b>By default, you enter the Expires At time in Zulu Time.</b> It appears as the local time zone time on each person&#39;s Notification&#39;s tab.</li>
		<li>Write the notification:<br />
		<img alt="Create Notifications window" src="Doc_images/CreateNotification.png"  title="Create notification window" /></li>
	</ol>
	</li>
	<li>Click Send, the Notification will appear two places in the system:<br />
	<img alt="Notifications example" src="Doc_images/Notification_example.png"  title="Notification example" />
	<ol >
		<li>The list of Active Notifications on the right-side of the screen (all <b>Center Stewards</b> will see it there).</li>
		<li>Under the Notifications icon on the Global Toolbar (all <b>users</b> will see it there). Users can click the X in the upper-right corner of the notification to dismiss the notification or wait for the notification to expire, at which point it will be removed from their list.</li>
	</ol>
	</li>
</ol>

<h2><a id="CancelNotification" name="CancelNotification">Cancel a Notification</a></h2>

<p>Any Center Steward can cancel a notification:</p>

<ol>
	<li>From the Notifications tab on the Center Settings window, click the remove icon beside the Active Notification:<br />
	<img alt="Dismiss notification" src="Doc_images/DismissNotification.png"  title="Dismiss notification" /></li>
	<li>The notification will be removed without a confirmation message. It will be removed from users&rsquo; Global Toolbars when they refresh their page.</li>
</ol>

<h2>Related Info</h2>
<ul >
	<li><a href="GlobalToolbar_notifications.html">How users see Notifications</a></li>
	<li><a href="Center_listings_create.html">Create a Listing</a></li>
	<li><a href="Center_steward_settings.html">Center Settings Home</a></li>
	<li><a href="Center_steward_settings_category.html">Category Settings</a></li>
	<li><a href="Center_steward_settings_contactType.html">Contact Type Settings</a></li>
	<li><a href="Center_steward_settings_intent.html">Intent Settings</a></li>
	<li><a href="Center_steward_settings_org.html">Organization Settings</a></li>
	</ul>


</div>
);
}
});