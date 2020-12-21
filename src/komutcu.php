<?
$SiteAnaSayfa = realpath(__FILE__. '/../../../..');

namespace bilgehanars\albatu

use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\HtmlResponse;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Composer\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput as Output;
use Symfony\Component\Console\Output\OutputInterface;

class BilgehanAlbatu implements RequestHandlerInterface {
    
        private $komut;  
        private $packadi;
        
        if isset(Arr::post($request->getQueryParams(), 'komut')) && isset(Arr::post($request->getQueryParams(), 'packadi')) 
        { 
            $komut = Arr::post($request->getQueryParams(), 'komut');
            $packadi = Arr::post($request->getQueryParams(), 'packadi');
            $this->yap();
        
        } 
    
            
        public function belirle($komut, $packadi) {
            $this->komut = $komut;
            $this->packadi = $packadi;
        }
        public function yap() {


            if ($this->komut != $null)  && ($this->packadi) != $null) {

                ini_set('memory_limit', '1G');
                set_time_limit(300); // 5 minutes execution
                
                putenv('COMPOSER_HOME=' . $SiteAnaSayfa . '/vendor/bin/composer');

                $output = new Output;
                $input = new ArrayInput([
                    'command' => $komut, 
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
            else { echo "Nice Try"; }
        }
}   

