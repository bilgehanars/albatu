import app from 'flarum/app';
import Sayfalandir from './sayfalandir';


app.initializers.add('bilgehanars-albatu', (app) => {
  app.extensionData.for('bilgehanars-albatu').registerPage(AlbatuSayfa);
  sayfalandir();
});