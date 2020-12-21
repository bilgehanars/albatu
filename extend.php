<?php

/*
 * This file is part of bilgehanars/Albatu.
 *
 * Copyright (c) 2020 Bilgehan ARSLAN.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Bilgehanars\Albatu;

use Flarum\Extend;


return [
    
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
        ->post('/AlbatuKomut', 'bilgehanalbatu', BilgehanAlbatu::class)
    new Extend\Locales(__DIR__ . '/resources/locale'),
    

];

