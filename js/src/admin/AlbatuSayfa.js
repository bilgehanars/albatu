import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/components/Button';
import Component from 'flarum/Component';
import FieldSet from 'flarum/components/FieldSet';


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
                <FieldSet label="Composer Command - Require/Update/Remove"><input className="FormControl" value={this.komut} oninput={e => this.komut = e.target.value}></input></FieldSet>
                <FieldSet label="Package Name. (Example: bilgehanars/albatu)"><input className="FormControl" value={this.packadi} oninput={e => this.packadi = e.target.value}></input></FieldSet>
            <Button type="submit">Execute</Button>
            </form>
            <div id='Komut'></div>
            </div>
            )
        }

  onsubmit(e) {
       app.request({
            method: 'post',
            url: app.forum.attribute('apiUrl') + '/AlbatuKomut',
            timeout: 300,
            data: {
                komut : this.komut,
                packadi : this.packadi
            }
    }).then(function(val) {
                Konsol = 'Output',
                Konsol += val,
                document.getElementById('Komut').innerHTML = Konsol

    })   
  } 
}

