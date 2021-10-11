import { getOwner } from '@ember/application';
import Service from '@ember/service';

export default class RootUrlService extends Service {
  build(relativeURL) {
    let ENV = getOwner(this).resolveRegistration('config:environment');
    return `${ENV.rootURL}${relativeURL.replace(/^\//, '')}`;
  }
}
