import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';


export default function() {

    // Quick access settings from extensions tab
    app.extensionSettings['bilgehanars\albatu'] = () => m.route.set(app.route('Albatu'));

    extend(AdminNav.prototype, 'items', items => {
        items.add(
            'Albatu',
            AdminLinkButton.component({
                href: app.route('ALBATU/Ana'),
                icon: 'fas fa-meteor',
                description: 'Install/Remove/Update Packages')
        );
    });
}
