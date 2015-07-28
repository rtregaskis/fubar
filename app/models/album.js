import DS from 'ember-data';

//import albums from 'fubar/models/album-fixtures';

var Album =  DS.Model.extend({
  artist:DS.attr(),
  artwork:DS.attr(),
  name:DS.attr(),
  isExplicit:DS.attr(),
  songs:DS.attr()
});

/*
Album.reopenClass({
    FIXTURES:albums
});
*/
export default Album;
