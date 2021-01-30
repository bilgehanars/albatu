<?
namespace Bilgehanars\Albatu\Komut;

use Composer\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput as Output;
use Symfony\Component\Console\Output\OutputInterface;


final class Komut {

    public $packadi,$komut;
    private $cevap;
    
    public function yap($packadi, $komut) 
{
// asiri yuklenmeyi engelleyen sinirlayici kod
ini_set('memory_limit', '1G');
set_time_limit(300); // 5 minutes execution

// bagimliliklar


// COMPOSER_HOME parametresini belirliyoruz, composerin calismasi icin gerek duydugu paketin bagimliligi geregi

putenv('COMPOSER_HOME=' . app(Paths::class)['base'] . '/vendor/bin/composer');


$cikis = new Output;
$giris = new ArrayInput([
    'command' => $komut, 
    'packages' => [$packadi], 
    '--working-dir' => app(Paths::class)['base'],
]);
// parametreler belirlendi uygulama calisiyor
$application = new Application();
$application->setAutoExit(false);
$application->run($giris, $cikis);

// cikisi fetch ile sayfaya yazdiriyoruz
 $this->$cevap = '<hr>';
 $this->$cevap .= '<pre>' . $cikis->fetch() . '</pre>';

    return [ 
     'cevap' => $this->$cevap
    ];


}
}