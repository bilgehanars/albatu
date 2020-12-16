
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
          <div className="container">
              <fieldset>
                <legend>{app.translator.trans('albatu.islemsec')}</legend>
                <label for="komut">{app.translator.trans('albatu.kaldir')}</label>
                    <input type="text" id="komut" value="">                

                <label for="packadi">{app.translator.trans('albatu.packadi')}</label>
                    <input type="text" id="packadi" value="">
          {Button.component({
              className: 'Button Button--primary',
              icon: 'fas fa-plus',
              onclick: () => socketac(document.getElementById("packadi").innerText, document.getElementById("").innerText, window.location.href + /../../vendor/bilgehanars/albatu/api/komutcu.php)
            }, app.translator.trans('flarum-tags.admin.tags.create_tag_button'))}
            </fieldset>
<iframe src="" style="border:0px #ffffff none; display: fixed; bottom: 0;" name="_komutcu" scrolling="yes" frameborder="0" marginheight="0px" marginwidth="0px" height="50%" width="100%" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}
function socketac(komut,packadi,adres) {
  return (
            <?php

            $fp = fsockopen('{adres}', 80);

            $vars = array(
            'komut' => '{komut}'
            'packadi' => '{packadi}'    
            );
            $content = http_build_query($vars);

            fwrite($fp, "POST / HTTP/1.1\r\n");
            fwrite($fp, "Host: example.com\r\n");
            fwrite($fp, "Content-Type: application/x-www-form-urlencoded\r\n");
            fwrite($fp, "Content-Length: ".strlen($content)."\r\n");
            fwrite($fp, "Connection: close\r\n");
            fwrite($fp, "\r\n");

            fwrite($fp, $content);

            header('Content-type: text/plain');
            while (!feof($fp)) echo fgets($fp, 1024);
            
            ?>
  );
}