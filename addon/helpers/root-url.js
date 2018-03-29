import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';

export default Helper.extend({
  compute([relativeURL]) {
    let ENV = getOwner(this).resolveRegistration('config:environment');
    return `${ENV.rootURL}${relativeURL.replace(/^\//,'')}`;
  }
});
