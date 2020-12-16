app.initializers.add('bilgehanars/albatu', () => {
    app.routes.tags = {path: '/AlbatuSayfa', component: AlbatuSayfa};
    ekle();
});


import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import AlbatuSayfa from './AlbatuSayfa';

function ekle() {
 

  extend(AdminNav.prototype, 'items', items => {
    items.add('albatu', AdminLinkButton.component({
      href: app.route('albatusayfa'),
      icon: 'fas fa-meteor',
      description: app.translator.trans('albatu.navAciklama')
    }, app.translator.trans('albatu.nav')));
  });
}
