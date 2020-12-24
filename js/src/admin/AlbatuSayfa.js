import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/components/Button';
import Component from 'flarum/Component';
import FieldSet from 'flarum/components/FieldSet';
import withAttr from 'flarum/utils/withAttr';


export default class AlbatuGiris extends ExtensionPage {
    content() {
    return (
        <div className={"container"}>
        <form onsubmit={this.onsubmit.bind(this)}>
        <FieldSet label="Composer Command - Require/Update/Remove">
          <input className="FormControl" value={this.komut} oninput={e => this.komut = e.target.value}>
       </input>
        </FieldSet>
        <FieldSet label="Package Name. (Example: Bilgehanars/Albatu)">
          <input className="FormControl" value={this.packadi} oninput={e => this.packadi = e.target.value}>
       </input>
        </FieldSet>
        <Button type="submit">Execute</Button>
      </form>
        <div className={"cevap"}></div>
    </div>
    

    )
  }

  onsubmit() {
        if (this.komut = 'remove') {komutsayfasi = '/AlbatuKaldir';}
        if (this.komut = 'require') {komutsayfasi = '/AlbatuYukle';}
        if (this.komut = 'update') {komutsayfasi = '/AlbatuGuncelle';}
          app.request({
            method: 'POST',
            url: app.forum.attribute('apiUrl') + komutsayfasi,
            timeout: 0,
            data: {
                packadi: this.packadi
            }
        }).then(response => {
            return m.render('div.cevap', response)
        })
    }   
  } 
  

