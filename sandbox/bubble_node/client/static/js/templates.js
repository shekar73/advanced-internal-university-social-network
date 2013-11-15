this["Templates"] = this["Templates"] || {};

this["Templates"]["./client/apps/bubbles/list/templates/bubble.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n";
  return buffer;
  });

this["Templates"]["./client/apps/bubbles/list/templates/bubbles.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"title clearfix\">\n  <h3>my bubbles </h3>\n  <a href=\"#\">\n    <span class=\"icon\">\n      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" enable-background=\"new 0 0 16 16\" xml:space=\"preserve\">\n        <circle fill-rule=\"evenodd\" clip-rule=\"evenodd\" cx=\"8\" cy=\"8\" r=\"8\"></circle>\n        <g>\n          <rect x=\"7\" y=\"4\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFFFFF\" width=\"2\" height=\"8\"></rect>\n          <rect x=\"4\" y=\"7\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFFFFF\" width=\"8\" height=\"2\"></rect>\n        </g>\n      </svg>\n    </span>new\n  </a>\n</div>\n\n<ul class=\"bubbles\"></ul>\n";
  });

this["Templates"]["./client/apps/bubbles/list/templates/list_layout.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"subpanel\" class=\"sidebar-menu-content menu-pull\"></div>\n\n<div id=\"show_region\"></div>\n";
  });

this["Templates"]["./client/apps/bubbles/show/templates/show.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1 style=\"position: absolute; top: 60px; left: 310px;\">\n  Bubble: ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</h1>";
  return buffer;
  });

this["Templates"]["./client/apps/dashboard/list/templates/dashboard.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 style=\"position: absolute; top: 60px; left: 100px;\">\n  Dashboard!\n</h1>";
  });

this["Templates"]["./client/apps/explores/list/templates/explores.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"title clearfix\">\n  <h3>Explores</h3>\n  <a href=\"#\">\n    <span class=\"icon\">\n      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" enable-background=\"new 0 0 16 16\" xml:space=\"preserve\">\n        <circle fill-rule=\"evenodd\" clip-rule=\"evenodd\" cx=\"8\" cy=\"8\" r=\"8\"></circle>\n        <g>\n          <rect x=\"7\" y=\"4\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFFFFF\" width=\"2\" height=\"8\"></rect>\n          <rect x=\"4\" y=\"7\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFFFFF\" width=\"8\" height=\"2\"></rect>\n        </g>\n      </svg>\n    </span>new\n  </a>\n</div>\n\n<ul class=\"explores\"></ul>\n";
  });

this["Templates"]["./client/apps/explores/list/templates/list_layout.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"subpanel\" class=\"sidebar-menu-content menu-pull\"></div>\n\n<div id=\"show_region\"></div>\n";
  });

this["Templates"]["./client/apps/explores/show/templates/explore.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n";
  return buffer;
  });

this["Templates"]["./client/apps/header/templates/header.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"top-bar\">\n	<a href=\"#\" class=\"side-activator\">\n		<span class=\"icon\">\n			<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"18.343px\" height=\"17.468px\" viewBox=\"0 0 18.343 17.468\" enable-background=\"new 0 0 18.343 17.468\" xml:space=\"preserve\">\n		  		<path d=\"M18.343,1.747c0-0.96-1.181-1.747-2.62-1.747H2.62C1.179,0,0,0.786,0,1.747c0,0.961,1.179,1.747,2.62,1.747h13.103\n		  			C17.162,3.494,18.343,2.708,18.343,1.747z\"></path>\n		  		<path d=\"M18.343,8.734c0-0.961-1.181-1.747-2.62-1.747H2.62C1.179,6.987,0,7.773,0,8.734s1.179,1.747,2.62,1.747h13.103\n		  			C17.162,10.481,18.343,9.695,18.343,8.734z\"></path>\n		  		<path d=\"M18.343,15.721c0-0.96-1.181-1.747-2.62-1.747H2.62c-1.441,0-2.62,0.787-2.62,1.747c0,0.962,1.179,1.747,2.62,1.747\n		  			h13.103C17.162,17.468,18.343,16.683,18.343,15.721z\"></path>\n		  </svg>\n		</span>\n	</a>\n	<a href=\"#\" class=\"logo-container\">\n		<span class=\"main-logo\">\n			<span class=\"logo\">\n				<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"33.588px\" height=\"34.25px\" viewBox=\"0 0 33.588 34.25\" enable-background=\"new 0 0 33.588 34.25\" xml:space=\"preserve\">\n					<path fill=\"#95AFBF\" d=\"M0.625,17.25c0-9.11,7.39-16.5,16.5-16.5c9.108,0,16.5,7.39,16.5,16.5c0,9.109-7.392,16.5-16.5,16.5C8.015,33.75,0.625,26.359,0.625,17.25z\"/>\n					<path fill=\"#011126\" d=\"M4.625,16.95c0,6.729,5.46,12.19,12.2,12.19c1.908,0,3.72-0.44,5.34-1.23c1.79,1.52,7.46,1.84,7.46,1.84c-2.82-1.439-3.892-3.2-4.271-4.09c2.261-2.221,3.66-5.301,3.66-8.71c0-6.74-5.461-12.2-12.189-12.2C10.085,4.75,4.625,10.21,4.625,16.95z\"/>\n					<path fill=\"#F7F8F8\" d=\"M6.425,16.84c0,2.51,0.9,4.811,2.4,6.6c-0.011-1.299,2.569-15.688,16.578-12.108c-1.828-2.87-5.038-4.78-8.688-4.78C11.035,6.55,6.425,11.15,6.425,16.84z\"/>\n				</svg>\n			</span>\n			<span class=\"type\">\n				<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n					 width=\"101.625px\" height=\"10.542px\" viewBox=\"0 0 101.625 10.542\" enable-background=\"new 0 0 101.625 10.542\"\n					 xml:space=\"preserve\">\n					<path fill=\"#F7F8F8\" d=\"M0.257,0.669c0-0.14,0.111-0.266,0.266-0.266h5.799c0.154,0,0.267,0.126,0.267,0.266v1.527\n						c0,0.14-0.112,0.266-0.267,0.266h-3.88V4.2h3.194c0.14,0,0.266,0.126,0.266,0.266v1.527c0,0.153-0.126,0.266-0.266,0.266H2.442\n						V8.15h3.88c0.154,0,0.267,0.125,0.267,0.266v1.527c0,0.14-0.112,0.266-0.267,0.266H0.523c-0.154,0-0.266-0.126-0.266-0.266V0.669z\"\n						/>\n					<path fill=\"#F7F8F8\" d=\"M9.918,0.487c0.014-0.126,0.14-0.224,0.252-0.224h0.224c0.07,0,0.196,0.056,0.238,0.14l3.25,6.051h0.027\n						l3.25-6.051c0.042-0.084,0.168-0.14,0.238-0.14h0.225c0.111,0,0.237,0.098,0.252,0.224L19.458,9.9\n						c0.027,0.183-0.099,0.309-0.267,0.309h-1.653c-0.126,0-0.252-0.111-0.266-0.225l-0.63-4.327h-0.028l-2.353,4.538\n						c-0.042,0.084-0.168,0.154-0.238,0.154h-0.252c-0.084,0-0.196-0.07-0.238-0.154l-2.366-4.538h-0.028l-0.616,4.327\n						c-0.014,0.113-0.126,0.225-0.266,0.225H8.603c-0.168,0-0.294-0.126-0.266-0.309L9.918,0.487z\"/>\n					<path fill=\"#F7F8F8\" d=\"M26.048,0.264c2.801,0,5.042,2.255,5.042,5.057c0,2.802-2.241,5.029-5.042,5.029\n						c-2.803,0-5.029-2.227-5.029-5.029C21.019,2.519,23.246,0.264,26.048,0.264z M26.048,8.107c1.541,0,2.801-1.26,2.801-2.788\n						c0-1.541-1.261-2.815-2.801-2.815c-1.527,0-2.788,1.274-2.788,2.815C23.26,6.847,24.521,8.107,26.048,8.107z\"/>\n					<path fill=\"#F7F8F8\" d=\"M33.269,0.669c0-0.14,0.112-0.266,0.266-0.266h4.188c1.681,0,3.054,1.358,3.054,3.025\n						c0,1.289-0.854,2.325-2.073,2.815l1.92,3.558c0.098,0.183,0,0.406-0.238,0.406h-1.863c-0.112,0-0.196-0.069-0.224-0.126\n						L36.435,6.37h-0.967v3.571c0,0.141-0.126,0.267-0.267,0.267h-1.667c-0.153,0-0.266-0.126-0.266-0.267V0.669z M37.542,4.591\n						c0.573,0,1.063-0.532,1.063-1.121c0-0.589-0.49-1.064-1.063-1.064h-2.073v2.185H37.542z\"/>\n					<path fill=\"#F7F8F8\" d=\"M44.946,5.487L41.85,0.81c-0.112-0.182,0-0.406,0.224-0.406h1.821c0.112,0,0.182,0.07,0.224,0.126\n						l1.947,2.872l1.947-2.872c0.042-0.056,0.098-0.126,0.224-0.126h1.821c0.224,0,0.336,0.224,0.224,0.406l-3.138,4.665v4.468\n						c0,0.14-0.126,0.266-0.266,0.266h-1.666c-0.154,0-0.267-0.126-0.267-0.266V5.487z\"/>\n					<path fill=\"#93ADBF\" d=\"M52.043,0.669c0-0.14,0.111-0.266,0.266-0.266h3.138c1.695,0,2.914,1.121,2.914,2.591\n						c0,1.079-0.798,1.849-1.457,2.227c0.743,0.308,1.751,0.995,1.751,2.283c0,1.569-1.289,2.704-3.054,2.704h-3.292\n						c-0.154,0-0.266-0.126-0.266-0.266V0.669z M55.587,8.919c0.854,0,1.513-0.659,1.513-1.527c0-0.854-0.813-1.471-1.723-1.471h-1.919\n						v2.998H55.587z M55.362,4.662c0.896,0,1.442-0.659,1.442-1.499c0-0.854-0.546-1.443-1.442-1.443h-1.891v2.942H55.362z\"/>\n					<path fill=\"#93ADBF\" d=\"M60.625,0.669c0-0.14,0.126-0.266,0.267-0.266h0.938c0.154,0,0.267,0.126,0.267,0.266v5.785\n						c0,1.4,0.896,2.493,2.325,2.493c1.442,0,2.353-1.079,2.353-2.466V0.669c0-0.14,0.112-0.266,0.267-0.266h0.938\n						c0.14,0,0.266,0.126,0.266,0.266v5.883c0,2.129-1.61,3.797-3.823,3.797c-2.199,0-3.796-1.668-3.796-3.797L60.625,0.669\n						L60.625,0.669z\"/>\n					<path fill=\"#93ADBF\" d=\"M70.831,0.669c0-0.14,0.111-0.266,0.267-0.266h3.138c1.694,0,2.913,1.121,2.913,2.591\n						c0,1.079-0.798,1.849-1.456,2.227c0.742,0.308,1.751,0.995,1.751,2.283c0,1.569-1.289,2.704-3.054,2.704h-3.292\n						c-0.154,0-0.267-0.126-0.267-0.266V0.669z M74.375,8.919c0.854,0,1.513-0.659,1.513-1.527c0-0.854-0.813-1.471-1.723-1.471h-1.92\n						v2.998H74.375z M74.151,4.662c0.896,0,1.442-0.659,1.442-1.499c0-0.854-0.546-1.443-1.442-1.443h-1.892v2.942H74.151z\"/>\n					<path fill=\"#93ADBF\" d=\"M79.538,0.669c0-0.14,0.112-0.266,0.268-0.266h3.138c1.694,0,2.913,1.121,2.913,2.591\n						c0,1.079-0.798,1.849-1.456,2.227c0.742,0.308,1.751,0.995,1.751,2.283c0,1.569-1.289,2.704-3.054,2.704h-3.292\n						c-0.154,0-0.267-0.126-0.267-0.266L79.538,0.669L79.538,0.669z M83.083,8.919c0.854,0,1.513-0.659,1.513-1.527\n						c0-0.854-0.813-1.471-1.723-1.471h-1.92v2.998H83.083z M82.859,4.662c0.896,0,1.442-0.659,1.442-1.499\n						c0-0.854-0.546-1.443-1.442-1.443h-1.892v2.942H82.859z\"/>\n					<path fill=\"#93ADBF\" d=\"M88.246,0.669c0-0.14,0.112-0.266,0.268-0.266h0.925c0.14,0,0.266,0.126,0.266,0.266v8.236H93.5\n						c0.153,0,0.267,0.126,0.267,0.266v0.771c0,0.14-0.112,0.266-0.267,0.266h-4.986c-0.154,0-0.267-0.126-0.267-0.266V0.669H88.246z\"/>\n					<path fill=\"#93ADBF\" d=\"M95.232,0.669c0-0.14,0.112-0.266,0.268-0.266h5.603c0.154,0,0.267,0.126,0.267,0.266v0.784\n						c0,0.14-0.111,0.266-0.267,0.266h-4.426v2.858h3.74c0.14,0,0.266,0.126,0.266,0.266v0.784c0,0.154-0.126,0.267-0.266,0.267h-3.74\n						v3.012h4.426c0.154,0,0.267,0.126,0.267,0.266v0.771c0,0.14-0.111,0.266-0.267,0.266H95.5c-0.154,0-0.268-0.126-0.268-0.266V0.669z\n						\"/>\n				</svg>\n			</span>\n		</span>\n	</a><!-- END LOGO ANCHOR TAG -->\n	<div class=\"main-menu\">\n		<ul class=\"user-menu\">\n			<li class=\"hasItems notif-holder\">\n				<a href=\"#\" class=\"activate r-notif\"><span class=\"updates-number\">35</span><span class=\"hide\">updates</span></a>\n				<ul class=\"drop notif\">\n					<li><a href=\"#\" class=\"parent-name\">This is a bubble name</a></li>\n					<li><a href=\"#\">This is a notification</a></li>\n					<li><a href=\"#\">Another one with a <span class=\"bold\">bold</span> word</a></li>\n					<li><a href=\"#\" class=\"parent-name\">This is an event name</a></li>\n					<li><a href=\"#\">This is a notifcation</a></li>\n					<li><a href=\"#\">This is a notifcation</a></li>\n					<li class=\"options\">\n						<a href=\"#\">see all</a><!--\n					 --><a href=\"#\">clear all</a><!--\n					 --><a href=\"#\">settings</a>\n					</li><!-- END OPTIONS BAR --> \n				</ul><!-- END NOTFICATION DROPDOWN --> \n			</li><!-- END NOTFICATION MENU\n		 --><li><a href=\"#\">Another menu</a></li><!-- \n		 --><li class=\"hasItems user-options\">\n				<a href=\"#\" class=\"activate\"><img src=\"img/spencer.jpg\" alt=\"user-image\" class=\"user-image\">SPENCER</a>\n				<ul class=\"drop\">\n					<li>\n						<a href=\"#\">\n					<span class=\"icon\">\n					<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16.007px\" height=\"16.003px\" viewBox=\"0 0 16.007 16.003\" enable-background=\"new 0 0 16.007 16.003\" xml:space=\"preserve\">\n					<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.007,12.002c0-1.438-1.334-2.699-3.334-3.406\n					c-0.616,1.416-2.026,2.406-3.666,2.406s-3.05-0.99-3.665-2.406c-2,0.707-3.335,1.967-3.335,3.406v0.5v0.5v2.001h14V12.002z\n					 M11.007,4.001c0-1.655-1.345-3.001-3-3.001s-3,1.346-3,3.001v3c0,0.125,0.02,0.239,0.035,0.359c0.076,0.601,0.32,1.146,0.695,1.581\n					l0.055,0.065c0.07,0.08,0.151,0.154,0.23,0.226c0.045,0.045,0.1,0.084,0.15,0.129c0.07,0.056,0.14,0.11,0.22,0.161\n					c0.125,0.085,0.26,0.155,0.399,0.219c0.05,0.021,0.111,0.04,0.161,0.062c0.119,0.044,0.234,0.079,0.359,0.108l0.161,0.036\n					c0.174,0.035,0.349,0.055,0.535,0.055s0.36-0.02,0.535-0.055l0.161-0.036c0.124-0.029,0.239-0.064,0.357-0.108\n					c0.052-0.022,0.112-0.041,0.161-0.062c0.141-0.064,0.275-0.134,0.4-0.219c0.079-0.05,0.149-0.105,0.22-0.161\n					c0.05-0.045,0.104-0.084,0.15-0.129c0.078-0.071,0.16-0.146,0.23-0.226l0.055-0.065c0.375-0.435,0.619-0.98,0.694-1.581\n					c0.016-0.12,0.035-0.234,0.035-0.359V4.001z M15.507,16.003h-15c-0.275,0-0.5-0.227-0.5-0.5v-2.501v-0.5v-0.5\n					c0-1.865,1.635-3.49,4.06-4.351c-0.035-0.21-0.06-0.425-0.06-0.65v-3c0-2.21,1.79-4.001,4-4.001c2.209,0,4,1.791,4,4.001v3\n					c0,0.225-0.025,0.439-0.062,0.65c2.427,0.861,4.062,2.486,4.062,4.351v3.501C16.007,15.776,15.781,16.003,15.507,16.003z\"></path>\n					</svg>\n						</span>Profile</a>\n					</li>\n					<li>\n						<a href=\"#\">\n						<span class=\"icon\">\n					<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16.007px\" height=\"16.003px\" viewBox=\"0 0 16.007 16.003\" enable-background=\"new 0 0 16.007 16.003\" xml:space=\"preserve\">\n					<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.007,12.002c0-1.438-1.334-2.699-3.334-3.406\n					c-0.616,1.416-2.026,2.406-3.666,2.406s-3.05-0.99-3.665-2.406c-2,0.707-3.335,1.967-3.335,3.406v0.5v0.5v2.001h14V12.002z\n					 M11.007,4.001c0-1.655-1.345-3.001-3-3.001s-3,1.346-3,3.001v3c0,0.125,0.02,0.239,0.035,0.359c0.076,0.601,0.32,1.146,0.695,1.581\n					l0.055,0.065c0.07,0.08,0.151,0.154,0.23,0.226c0.045,0.045,0.1,0.084,0.15,0.129c0.07,0.056,0.14,0.11,0.22,0.161\n					c0.125,0.085,0.26,0.155,0.399,0.219c0.05,0.021,0.111,0.04,0.161,0.062c0.119,0.044,0.234,0.079,0.359,0.108l0.161,0.036\n					c0.174,0.035,0.349,0.055,0.535,0.055s0.36-0.02,0.535-0.055l0.161-0.036c0.124-0.029,0.239-0.064,0.357-0.108\n					c0.052-0.022,0.112-0.041,0.161-0.062c0.141-0.064,0.275-0.134,0.4-0.219c0.079-0.05,0.149-0.105,0.22-0.161\n					c0.05-0.045,0.104-0.084,0.15-0.129c0.078-0.071,0.16-0.146,0.23-0.226l0.055-0.065c0.375-0.435,0.619-0.98,0.694-1.581\n					c0.016-0.12,0.035-0.234,0.035-0.359V4.001z M15.507,16.003h-15c-0.275,0-0.5-0.227-0.5-0.5v-2.501v-0.5v-0.5\n					c0-1.865,1.635-3.49,4.06-4.351c-0.035-0.21-0.06-0.425-0.06-0.65v-3c0-2.21,1.79-4.001,4-4.001c2.209,0,4,1.791,4,4.001v3\n					c0,0.225-0.025,0.439-0.062,0.65c2.427,0.861,4.062,2.486,4.062,4.351v3.501C16.007,15.776,15.781,16.003,15.507,16.003z\"></path>\n					</svg>\n						</span>Support</a>\n					</li>\n					<li>\n						<a href=\"#\">\n						<span class=\"icon\">\n						<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16.007px\" height=\"17px\" viewBox=\"0 0 16.007 17\" enable-background=\"new 0 0 16.007 17\" xml:space=\"preserve\">\n						  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.49,3.63c0,0.27,0,0.37-0.25,0.71c-0.18,0.21-0.42,0.31-0.6,0.48\n						  	C3.87,5.37,3.09,6.33,2.81,7.08C2.71,7.35,2.57,7.7,2.5,8.04C2.43,8.35,2.39,9.03,2.39,9.1c0,3.04,2.53,5.51,5.59,5.51\n						  	c3.17,0,5.629-2.57,5.629-5.51c0-0.51-0.109-1.2-0.319-1.68c-0.24-0.68-0.67-1.4-1.33-2.05c-0.39-0.41-0.88-0.65-1.229-1.03\n						  	c-0.291-0.3-0.221-0.44-0.221-0.71c0-0.76,0.53-1.17,1.2-1.17c0.39,0,0.56,0.07,1.09,0.45c1.931,1.43,2.851,3.32,3.091,4.99\n						  	C15.96,8.28,16,9.03,16,9.1c0,4.31-3.55,7.9-8.02,7.9c-2.92,0-6.61-1.78-7.7-5.71C0.14,10.77,0,9.82,0,9.75V8.48\n						  	c0.04-0.2,0.04-0.44,0.07-0.61c0.07-0.45,0.25-0.93,0.39-1.41c0.35-1.3,2.53-4,3.83-4C5.03,2.46,5.49,2.98,5.49,3.63z M9.21,1.06\n						  	v7.56C9,9.41,8.51,9.68,7.98,9.68c-0.49,0-1.19-0.41-1.19-1.03V1.06C6.86,0.31,7.49,0,7.98,0C8.471,0,9.21,0.44,9.21,1.06z\"></path>\n						  </svg>\n						</span>Sign Out</a>\n					</li>\n				</ul><!-- END DROP (This is a normal dropdown.) --> \n			</li><!-- END HAS ITEM\n	 --></ul><!-- END MENU-->\n	</div><!-- END USER MENU --> \n</div>";
  });

this["Templates"]["./client/apps/sidebar/templates/icons/bubbles.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Bubbles SVG ";
  });

this["Templates"]["./client/apps/sidebar/templates/icons/dashboard.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"30px\" height=\"20px\" viewBox=\"0 0 30 20\" enable-background=\"new 0 0 30 20\" xml:space=\"preserve\">\n  <defs>\n    <rect id=\"SVGID_1_\" y=\"0\" width=\"30\" height=\"20\"></rect>\n  </defs>\n  <clipPath id=\"SVGID_2_\">\n    <use xlink:href=\"#SVGID_1_\" overflow=\"visible\"></use>\n  </clipPath>\n  <path clip-path=\"url(#SVGID_2_)\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M29.981,17.02c0,0.851,0.3,2.979-1.51,2.979\n    c-0.85,0-1.45-0.67-1.45-1.459c0-0.121,0.12-1.641,0.06-2.73c-0.18-2.38-0.91-4.62-2.359-6.93l1.15-3.17\n    C29.011,9.48,29.981,13.25,29.981,17.02 M18.981,1.34c-0.66,0.79-1.33,1.64-2.05,2.49c-0.6-0.06-1.75-0.12-1.93-0.12\n    c-5.02,0-10.15,3.28-11.73,9.97c-0.42,1.64-0.3,2.25-0.3,3.71v1.46C2.671,19.64,2.131,20,1.522,20c-1.75,0-1.511-2.25-1.511-3.039\n    c0-8.45,5.741-15.62,13.841-16.17c0.96-0.12,1.27-0.06,2.35,0C16.991,0.91,18.142,1.03,18.981,1.34 M24.421,0.24\n    c-0.299,1.22-0.719,2.37-1.149,3.53c-1.75,4.68-3.62,9.54-5.86,14.351c-0.119,0.239-0.3,0.539-0.539,0.789\n    c-0.601,0.66-1.33,0.91-1.93,0.91c-1.391,0-3.21-1.34-3.21-2.92c0-1.76,2.6-4.62,3.689-6.08c1.09-1.58,2.36-3.16,3.621-4.68\n    c1.64-2.01,3.33-4.38,5.379-6.14V0.24z\"></path>\n</svg>\n";
  });

this["Templates"]["./client/apps/sidebar/templates/icons/explore.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"21px\" height=\"21px\" viewBox=\"0 0 21 21\" enable-background=\"new 0 0 21 21\" xml:space=\"preserve\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.811,5.91c0,0.57-0.65,1.31-0.65,1.31H9.84C8.91,7.98,9.19,8.51,9.19,9.19\n    c0,0.67-0.66,0.65-0.66,0.65C7.82,8.7,6.56,8.53,6.56,8.53V7.22c-0.77,0-0.65-0.66-0.65-0.66c3.41-3.41,7.22-1.31,7.22-1.31\n    C13.13,5.93,11.811,5.91,11.811,5.91z M12.471,16.41c0,0-0.66-0.15-0.66-0.66s-0.141-1.459-1.311-2.629V10.5\n    c0,0,0.15-0.66,0.66-0.66c0.51,0,1.14-0.16,3.279,1.971h0.65c0,0,0.66,0.069,0.66,0.66C15.75,13.051,13.82,16.41,12.471,16.41z\n     M10.5,1.31c-5.07,0-9.19,4.12-9.19,9.19c0,5.07,4.12,9.19,9.19,9.19c5.07,0,9.19-4.119,9.19-9.19C19.69,5.43,15.57,1.31,10.5,1.31z\n     M10.5,21C4.7,21,0,16.301,0,10.5C0,4.7,4.7,0,10.5,0S21,4.7,21,10.5C21,16.301,16.3,21,10.5,21z\"></path>\n</svg>\n";
  });

this["Templates"]["./client/apps/sidebar/templates/icons/search.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Search SVG";
  });

this["Templates"]["./client/apps/sidebar/templates/icons/settings.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Settings SVG";
  });

this["Templates"]["./client/apps/sidebar/templates/nav.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<button>\n  <span class=\"icon\">";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  <span class=\"name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</button>\n";
  return buffer;
  });

this["Templates"]["./client/apps/sidebar/templates/sidebar.html.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"sidebar-menu\">\n\n</ul>\n\n<ul class=\"mini-footer hide\">\n	<li><p>licensed by emory university</p></li>\n	<li class=\"info\">\n		<span class=\"icon\">\n			<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"33px\" height=\"33px\" viewBox=\"0 0 33 33\" enable-background=\"new 0 0 33 33\" xml:space=\"preserve\">\n			<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#95AFBF\" d=\"M0,16.5C0,7.39,7.39,0,16.5,0C25.609,0,33,7.39,33,16.5\n			C33,25.609,25.609,33,16.5,33C7.39,33,0,25.609,0,16.5z\"></path>\n			<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#011126\" d=\"M4,16.2c0,6.729,5.46,12.19,12.2,12.19\n			c1.909,0,3.72-0.44,5.34-1.23C23.33,28.68,29,29,29,29c-2.82-1.439-3.891-3.2-4.27-4.09c2.26-2.221,3.66-5.301,3.66-8.71\n			C28.391,9.46,22.93,4,16.2,4C9.46,4,4,9.46,4,16.2z\"></path>\n			<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#F7F8F8\" d=\"M5.8,16.09c0,2.51,0.9,4.811,2.4,6.6\n			C8.19,21.391,10.77,7,24.779,10.58C22.95,7.71,19.74,5.8,16.09,5.8C10.41,5.8,5.8,10.41,5.8,16.09z\"></path>\n			</svg>\n		</span>\n		<span class=\"name\">© 2013</span>\n	</li>\n</ul><!-- MINI FOOTER --> ";
  });