import app from 'flarum/app';
import AlbatuSayfa from './AlbatuSayfa';

app.initializers.add('bilgehanars-albatu', (app) => {
  app.extensionData.for('bilgehanars-albatu').registerPage(AlbatuSayfa);
 
});