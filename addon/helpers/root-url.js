import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({
  rootUrl: service(),

  compute([relativeURL]) {
    return this.get('rootUrl').build(relativeURL);
  }
});
