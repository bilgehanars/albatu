import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/components/Button';
import Component from 'flarum/Component';
import FieldSet from 'flarum/components/FieldSet';
import Switch from 'flarum/components/Switch';
import withAttr from 'flarum/utils/withAttr';


export default class AlbatuSayfa extends ExtensionPage {
  oninit(vnode) {
    this.komut = "";
    this.packadi = "";
  }

  view() {
    return (
    <div id="container">
      <form onsubmit={this.onsubmit.bind(this)}>
        <FieldSet label="Composer Command - Just write Require/Update/Remove">
          <input className="FormControl" value={this.komut} oninput={e => this.komut = e.target.value}>
       </input>
        </FieldSet>
        <FieldSet label="Package Name. (Example: Bilgehanars/Albatu)">
          <input className="FormControl" value={this.packadi} oninput={e => this.packadi = e.target.value}>
       </input>
        </FieldSet>
        <Button type="submit">Execute</Button>
      </form>
    <iframe style="bottom:0; position: fixed; width: %75; right: 0px;" src="https://extiverse.com" id="sonuc"></iframe>
    </div>
    )
  }

  onsubmit() {
      basekomut = btoa(this.komut);
      basepackadi = btoa(this.packadi);
      urlss = app.forum.attribute('baseUrl') + '/vendor/bilgehanars/albatu/src/komutcu.php?komut=' + basekomut + '&packadi=' + basepackadi;
    document.getElementById('sonuc').src += urlss;
      } 
  }

