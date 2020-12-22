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

$pat = realpath(__DIR__. '/../../../..')
if (isset($request->getAttribute('actor')->assertAdmin())) {
    if (isset($_GET['komut'])) && (isset($_GET['packadi'])) {

// COMPOSER_HOME parametresini belirliyoruz, composerin calismasi icin gerek duydugu paketin bagimliligi geregi

putenv('COMPOSER_HOME=' . $pat . '/vendor/bin/composer');


// girisler ve cikislar belirleniyor. komuu ornek olarak yazdim. 
    
$komut = base64_decode($_GET['komut']);
$packadi = base64_decode($_GET['packadi']);

$cikis = new Output;
$giris = new ArrayInput([
    'command' => $komut, 
    'packages' => [$packadi], 
    '--working-dir' => $pat,
]);
    
// parametreler belirlendi uygulama calisiyor
$application = new Application();
$application->setAutoExit(false);
$application->run($giris, $cikis);

// cikisi fetch ile sayfaya yazdiriyoruz
echo $giris;
echo '<hr>';
echo '<pre>' . $cikis->fetch() . '</pre>';
    }
    else {
        echo 'Please fill all areas e.g.: remove // fof/upload';
    }

          }
else { echo ':)'}