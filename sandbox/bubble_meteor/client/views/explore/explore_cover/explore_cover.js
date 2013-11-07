Template.exploreCover.helpers({
  onExploreHome: function(){
    if(window.location.pathname.split("/")[3] == 'home')
    {
      return true;
    }
    else
    {
      return false;
    }
  },

  getExploreIcon: function(exploreObject){
    if (!exploreObject)
      return;

    // TODO: Use switch
    var iconName = exploreObject.exploreIcon;
    if(iconName == 'announcements'){
      return Template['icon-official']();
    }
    else if(iconName == 'campus events'){
      return Template['icon-events']();
    }
    else if(iconName == 'classifieds'){
      return Template['icon-classifieds']();
    }
    else if(iconName == 'professor reviews'){
      return Template['icon-professorreviews']();
    }
    else if(iconName == 'controversial topics'){
      return Template['icon-controversial']();
    }
    else if(iconName == 'student deals'){
      return Template['icon-deals']();
    }
    else if(iconName == 'nightlife'){
      return Template['icon-nightlife']();
    }
  },

  getExploreIconName: function(exploreObject){
    if (!exploreObject)
      return;

      var iconName = exploreObject.exploreIcon;
      if(iconName == 'announcements'){
        return 'icon-official';
      }
      else if(iconName == 'campus events'){
        return 'icon-events';
      }
      else if(iconName == 'classifieds'){
        return 'icon-classifieds';
      }
      else if(iconName == 'professor reviews'){
        return 'icon-professorreviews';
      }
      else if(iconName == 'controversial topics'){
        return 'icon-controversial';
      }
      else if(iconName == 'student deals'){
        return 'icon-deals';
      }
      else if(iconName == 'nightlife'){
        return 'icon-nightlife';
      }
  },

  isExploreType: function(exploretype) {
    //exploreDep.depend();
    console.log("Explore Cover: ", this);
    if(this.exploreType == exploretype){
      console.log(exploretype, this.exploreType == exploretype);
      return true;
    }
    else{
      console.log(exploretype, this.exploreType == exploretype)
      return false;
    }
  }

});


Template.exploreCover.rendered = function(){
  // Handles the cancel button for forms
    $('.visible-toggle-parent').click(function() {
      if ($(this).hasClass('toggle-hide')) {
        $(this).removeClass('toggle-hide');
        $(this).addClass('toggle-show');
      } else {
        $(this).removeClass('toggle-show');
        $(this).addClass('toggle-hide');
      }
    });
}
