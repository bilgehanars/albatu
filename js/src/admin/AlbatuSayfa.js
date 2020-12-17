
import Page from 'flarum/components/Page';
import Link from 'flarum/components/Link';
import Header from "../components/Header";

export default class Sitemap extends Page {
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
        <div className="komutInput">
          <div className="container">
              <fieldset>
                <legend>{app.translator.trans('albatu.islemsec')}</legend>
                <label for="komut">{app.translator.trans('albatu.komut')}</label>
                    <input type="text" id="komut" value="">                

                <label for="packadi">{app.translator.trans('albatu.packadi')}</label>
                    <input type="text" id="packadi" value="">
          {Button.component({
              className: 'Button Button--primary',
              icon: 'fas fa-plus',
              onclick: () => {Konsol}
            }, app.translator.trans('flarum-tags.admin.tags.create_tag_button'))}
            </fieldset>
            <div id="komutsatiri" style="display: fixed; bottom: 0; height:40%;" >AlbatuCMD <hr></div>
          </div>
        </div>
      </div>
    );
  }
}

function socketac(komut,packadi,adres) {
  return (
            {

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
            echo "<script> var x = document.getElementById(komutsatiri).innerHTML; ";
            while (!feof($fp)) echo "x += ".fgets($fp, 1024);.";"
            echo "document.getElementById("komutsatiri").innerHTML = x"
            echo "</script>"
            }
  );
}