/* global _ */
import Ember from 'ember';

var out = _.template('${m}:${s}');
export function formatDuration(params/*, hash*/) {
    if(!params){
        return '0:00';
    }

  let d = parseInt(params)/60;

  let m = Math.floor(d);
  let s = _.pad(params%60, 2, '0');
  return out({s:s, m:m});

}

export default Ember.Helper.helper(formatDuration);
