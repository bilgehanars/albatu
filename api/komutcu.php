<?
var $SiteAnaSayfa = '../../../../../../..'

require $siteAnaSayfa. '/vendor/autoload.php';
use Composer\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput as Output;
use Symfony\Component\Console\Output\OutputInterface;
use Flarum\User

ini_set('memory_limit', '1G');
set_time_limit(300); // 5 minutes execution

putenv('COMPOSER_HOME=' . $SiteAnaSayfa . '/vendor/bin/composer');


    $output = new Output;
$input = new ArrayInput([
    'command' => $post['komut'], 
    'packages' => [$packadi], 
    '--working-dir' => $SiteAnaSayfa,
]);

$application = new Application();
$application->setAutoExit(false);
$application->run($input, $output);

echo $input;
echo '<hr>';
echo '<pre>' . $output->fetch() . '</pre>';


