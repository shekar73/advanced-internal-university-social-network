define(["text!icons/icon-iOS.html",
        "text!icons/icon-android.html",
        "text!icons/icon-logo-main.html",
        "text!icons/icon-sidebar-collapse.html",
        "text!icons/icon-dashboard-big.html",
        "text!icons/icon-arrow-right.html",
        "text!icons/icon-two-bubbles.html",
        "text!icons/icon-explore.html",
        "text!icons/icon-search-thin.html",
        "text!icons/icon-settings-big.html",
        "text!icons/icon-add.html",
        "text!icons/icon-bubble.html",
        "text!icons/icon-user.html",
        "text!icons/icon-invite.html",
        "text!icons/icon-about.html",
        "text!icons/icon-support.html",
        "text!icons/icon-tutorial.html",
        "thorax"],
        function(
        	iOS,
        	android,
        	logoMain,
        	sidebarCollapse,
        	dashboardBig,
        	arrowRight,
        	twoBubbles,
        	explore,
        	searchThin,
        	settingsBig,
        	add,
        	bubble,
        	user,
        	invite,
        	about,
        	support,
        	tutorial
        	) {
                
				return {
					iconIOS: Handlebars.compile(iOS),
					iconAndroid: Handlebars.compile(android),
                                        iconLogoMain: Handlebars.compile(logoMain),
					iconSidebarCollapse: Handlebars.compile(sidebarCollapse),
					iconDashboardBig: Handlebars.compile(dashboardBig),
					iconArrowRight: Handlebars.compile(arrowRight),
					iconTwoBubbles: Handlebars.compile(twoBubbles),
					iconExplore: Handlebars.compile(explore),
					iconSearchThin: Handlebars.compile(searchThin),
					iconSettingsBig: Handlebars.compile(settingsBig),
					iconAdd: Handlebars.compile(add),
					iconBubble: Handlebars.compile(bubble),
                                        iconUser: Handlebars.compile(user),
					iconInvite: Handlebars.compile(invite),
					iconAbout: Handlebars.compile(about),
					iconSupport: Handlebars.compile(support),
					iconTutorial: Handlebars.compile(tutorial)
				}
			}
);