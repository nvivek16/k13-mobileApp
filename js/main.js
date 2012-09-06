require.config({
	paths: {
	jquery: 'libs/jquery/jquery-min',
	underscore: 'libs/underscore/underscore-min',
	backbone: 'libs/backbone/backbone-optamd3-min',
	text: 'libs/require/text',
	tooltip: 'libs/bootstrap/bootstrap-tooltip',
	collapse: 'libs/bootstrap/bootstrap-collapse',
	popover: 'libs/bootstrap/bootstrap-popover',
	tab: 'libs/bootstrap/bootstrap-tab',
	dropdown: 'libs/bootstrap/bootstrap-dropdown',
	bootTransition: 'libs/bootstrap/bootstrap-transition',
	bootAlert: 'libs/bootstrap/bootstrap-alert',
	bootScrollspy: 'libs/bootstrap/bootstrap-scrollspy',
	modal: 'libs/bootstrap/bootstrap-modal',
	bootButton: 'libs/bootstrap/bootstrap-button',
	templates: '../templates'
	}
});

require(['app'],function(App){
	App.initialize();
});
