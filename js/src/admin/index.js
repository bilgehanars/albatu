app.initializers.add('bilgehanars/albatu', () => {
  ekle;
});


import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import TagsPage from './components/TagsPage';

function ekle() {
 

  extend(AdminNav.prototype, 'items', items => {
    items.add('tags', AdminLinkButton.component({
      href: app.route('tags'),
      icon: 'fas fa-meteor',
      description: app.translator.trans('albatu.navAciklama')
    }, app.translator.trans('albatu.navbar')));
  });
}
