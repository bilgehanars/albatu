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
use Flarum\Foundation\Application;
use Flarum\Extend\Routes;


return [
    
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    new Extend\Locales(__DIR__ . '/resources/locale'),
    
    (new Extend\Routes('api'))
        ->post('/AlbatuKomut', 'Albatu.Komut' , AlbatuKomut::class),
];

