import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/components/Button';
import Component from 'flarum/Component';
import FieldSet from 'flarum/components/FieldSet';
import withAttr from 'flarum/utils/withAttr';


export default class AlbatuGiris extends ExtensionPage {
     oninit(vnode) {
            super.oninit(vnode); 
            this.komut = "";
            this.packadi = "";
        }

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
        <div className={"cevap"}>Console</div>
    </div>
    

    )
  }

  onsubmit() {
      var cevap = app.request({
            method: 'post',
            url: app.forum.attribute('baseUrl') + '/AlbatuKomut',
            timeout: 0,
            data: {
                komut: this.komut,
                packadi: this.packadi
            }
        }).then(response => {
          m("div", {class: "cevap"}, response);
          m.redraw();
        })
    }   
  } 

