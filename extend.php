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
use Composer\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput as Output;
use Symfony\Component\Console\Output\OutputInterface;

ini_set('memory_limit', '1G');
set_time_limit(300); // 5 minutes execution


putenv('COMPOSER_HOME=' . $SiteAnaSayfa . '/vendor/bin/composer');

public function kaldir($packadi){
    $output = new Output;
$input = new ArrayInput([
    'command' => 'remove', 
    'packages' => [$packadi], 
    '--working-dir' => $SiteAnaSayfa,
]);

$application = new Application();
$application->setAutoExit(false);
$application->run($input, $output);

echo $input;
echo '<hr>';
echo '<pre>' . $output->fetch() . '</pre>';

}

public function yukle($packadi){
    $output = new Output;
$input = new ArrayInput([
    'command' => 'require', 
    'packages' => [$packadi], 
    '--working-dir' => $SiteAnaSayfa,
]);

$application = new Application();
$application->setAutoExit(false);
$application->run($input, $output);

echo $input;
echo '<hr>';
echo '<pre>' . $output->fetch() . '</pre>';

}

public function guncellehepsini(){
    $output = new Output;
$input = new ArrayInput([
    'command' => 'require', 
    'packages' => [$packadi], 
    '--working-dir' => $SiteAnaSayfa,
]);

$application = new Application();
$application->setAutoExit(false);
$application->run($input, $output);

echo $input;
echo '<hr>';
echo '<pre>' . $output->fetch() . '</pre>';

}




return [
    
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale')
];

