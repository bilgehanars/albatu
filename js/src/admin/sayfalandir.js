import { extend } from 'flarum/extend';
import BasicsPage from 'flarum/components/BasicsPage';
import AlbatuSayfa from './AlbatuSayfa';

export default function() {
  extend(BasicsPage.prototype, 'homePageItems', items => {
    items.add('AlbatuSayfa', {
      path: '/AlbatuSayfa',
      label: 'Albatu'
    });
  });
}
