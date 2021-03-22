import Route from '@ember/routing/route';

export default class SectionRoute extends Route {
  model() {
    return this.store;
  }
}
