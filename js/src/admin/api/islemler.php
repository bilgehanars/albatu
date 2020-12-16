
<?php

require $siteAnaSayfa. '/vendor/autoload.php';


ini_set('memory_limit', '1G');
set_time_limit(300); // 5 minutes execution

use Composer\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput as Output;
use Symfony\Component\Console\Output\OutputInterface;


putenv('COMPOSER_HOME=' . $SiteAnaSayfa . '/vendor/bin/composer');

$packadi = 
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


