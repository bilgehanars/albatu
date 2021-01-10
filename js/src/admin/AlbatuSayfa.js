import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/components/Button';
import Component from 'flarum/Component';
import FieldSet from 'flarum/components/FieldSet';


export default class AlbatuGiris extends ExtensionPage {
     oninit(vnode) {
            super.oninit(vnode); 
            this.komut = "";
            this.packadi = "";
            var RUN = "RUN";
        }

        content() {
        return (
            <div className={"container"}>
            <form onsubmit={this.onsubmit.bind(this)}>
                <FieldSet label="Composer Command - Require/Update/Remove"><input className="FormControl" value={this.komut} oninput={e => this.komut = e.target.value}></input></FieldSet>
                <FieldSet label="Package Name. (Example: Bilgehanars/Albatu)"><input className="FormControl" value={this.packadi} oninput={e => this.packadi = e.target.value}></input></FieldSet>
        <Button type="submit">Execute</Button>
        {Button.component({
            className: 'Button Button--primary',
            icon: 'fas fa-plus',
            onclick: () => yolla,
        }, RUN)}
      </form>
        {
            Konsol = 'CONSOLE';
            var konsolx = {
                view: function() { return m("div.cevap", onclick , Konsol); } 
            }
            m.mount(document.body, konsolx);
        }
    </div>
    

    )
  }

  yolla() {
       app.request({
            method: 'post',
            url: app.forum.attribute('baseUrl') + '/AlbatuKomut',
            timeout: 300,
            data: {
                'komut' : this.komut,
                'packadi' : this.packadi
            }
            deserialize: function(value) {
                Konsol += value,
                m.redraw()
        })
    }   
  } 
}

