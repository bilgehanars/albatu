
import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';


export default class AlbatuSayfa extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    // A regular redraw won't work here, because sortable has mucked around
    // with the DOM which will confuse Mithril's diffing algorithm. Instead
    // we force a full reconstruction of the DOM by changing the key, which
    // makes mithril completely re-render the component on redraw.
    this.forcedRefreshKey = 0;
  }

  view() {
    return (
      <div className="AlbatuSayfa">
        <div className="AlbatuSayfa-header">
          <div className="container">
            <p>
              {app.translator.trans('albatu.aciklama')}
            </p>
          </div>
        </div>
        <div className="TagsPage-list">
          <div className="container" key={this.forcedRefreshKey} oncreate={this.onListOnCreate.bind(this)}>
              <form action="../vendor/bilgehanars/albatu/js/src/admin/api/komutcu.php" target="_komutcu">
              <fieldset>
                <legend>{app.translator.trans('albatu.islemsec')}</legend>

                <label for="yukle">{app.translator.trans('albatu.yukle')}</label>
                    <input type="radio" name="radio-1" id="yukle">
                        
                <label for="guncelle">{app.translator.trans('albatu.guncelle')}</label>
                    <input type="radio" name="radio-1" id="guncelle">
                        
                <label for="radio-3">{app.translator.trans('albatu.kaldir')}</label>
                    <input type="radio" name="radio-1" id="Kaldir">
                         
                <label for="packadi">{app.translator.trans('albatu.packadi')}</label>
      <input type="text" id="radio-1" value="">
            </fieldset>
            </form>
<iframe src="" style="border:0px #ffffff none; display: fixed; bottom: 0;" name="_komutcu" scrolling="yes" frameborder="0" marginheight="0px" marginwidth="0px" height="50%" width="100%" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}
