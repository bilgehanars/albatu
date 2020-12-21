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
    this.booleanInput = false;
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
    <div> This is a beta software. Extension store will come here in soon </div>
    <div id="sonuc"><h1>Console</h1></div>
    </div>
    )
  }

  onsubmit() {
      app.request({
        method: "POST",
        url: app.forum.attribute('apiUrl') + "/AlbatuKomut",
        params: {komut: this.komut, packadi: this.packadi},
        deserialize: val => val,
        }).then(function(val) {
    document.getElementById('sonuc').innerHTML += val
      }) 
  }
}
