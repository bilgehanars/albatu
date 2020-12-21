import app from 'flarum/app';
import BasicsPage from 'flarum/components/BasicsPage';
import AlbatuSayfa from './AlbatuSayfa';
import { extend } from 'flarum/extend';


app.initializers.add('bilgehanars-albatu', (app) => {
  app.extensionData.for('bilgehanars-albatu').registerPage(AlbatuSayfa);
  extend(BasicsPage.prototype, 'homePageItems', items => {
    items.add('AlbatuSayfa', {
      path: '/AlbatuSayfa',
      label: 'Albatu'
    });
  });
});