import app from 'flarum/app';
import { extend } from 'flarum/extend';
import DashboardPage from 'flarum/components/DashboardPage';
import Sayfalandir from "./sayfalandir";

app.initializers.add('bilgehanars/albatu', () => {
    Sayfalandir();

});