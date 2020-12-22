<?

require '../../autoload.php';

// asiri yuklenmeyi engelleyen sinirlayici kod
ini_set('memory_limit', '1G');
set_time_limit(300); // 5 minutes execution

// bagimliliklar
use Composer\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput as Output;
use Symfony\Component\Console\Output\OutputInterface;
use Flarum\Users;

if (isset($request->getAttribute('actor')->assertAdmin())) {

// COMPOSER_HOME parametresini belirliyoruz, composerin calismasi icin gerek duydugu paketin bagimliligi geregi

putenv('COMPOSER_HOME=' . __DIR__ . '/vendor/bin/composer');


// girisler ve cikislar belirleniyor. komut array icinde olmali fof/gamificationu ornek olarak yazdim. kanli canli ornek olsun diye. remove yerine require yazarsan yukleme yapar

$cikis = new Output;
$giris = new ArrayInput([
    'command' => $_POST['komut'], 
    'packages' => [$_POST['packadi']], 
    '--working-dir' => getcwd(),
]);
// parametreler belirlendi uygulama calisiyor
$application = new Application();
$application->setAutoExit(false);
$application->run($giris, $cikis);

// cikisi fetch ile sayfaya yazdiriyoruz
echo $input;
echo '<hr>';
echo '<pre>' . $cikis->fetch() . '</pre>';


          }

