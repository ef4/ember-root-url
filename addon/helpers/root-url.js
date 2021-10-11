import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class RootUrl extends Helper {
  @service rootUrl;

  compute([relativeURL]) {
    return this.rootUrl.build(relativeURL);
  }
}
