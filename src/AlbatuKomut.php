<?

namespace Bilgehanars\Albatu;

use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\HtmlResponse;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Composer\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput as Output;
use Symfony\Component\Console\Output\OutputInterface;
use Flarum\Group\Permission;
use Flarum\Foundation;


class AlbatuKomut implements RequestHandlerInterface {
        protected $view;
        public $packadi;
        public $SiteAnaSayfa;
        public $komut;
    
        public function handle(Request $request): Response
        {

           if (Arr::post($request->getQueryParams(), 'packadi') != NULL && Arr::post($request->getQueryParams(), 'komut') != NULL)
            { 
                $this->$packadi = Arr::post($request->getQueryParams(), 'packadi');
                $this->$komut = Arr::post($request->getQueryParams(), 'komut');
                $this->yap();
                $SiteAnaSayfa = app(Paths::class)['base'];

                return new HtmlResponse($cikis);
        
            } 
    
        }
        public function yap() {
                if (null !== $request->getAttribute('actor')->assertAdmin()) {
                if (isset($this->packadi)) {

                ini_set('memory_limit', '1G');
                set_time_limit(300); // 5 minutes execution
                
                putenv('COMPOSER_HOME=' . $SiteAnaSayfa . '/vendor/bin/composer');

                $output = new Output;
                $input = new ArrayInput([
                    'command' => $this->$komut, 
                    'packages' => [$this->$packadi], 
                    '--working-dir' => $SiteAnaSayfa,
                ]);

                $application = new Application();
                $application->setAutoExit(false);
                $application->run($input, $output);
                $cikis = '<hr>';
                $cikis .= '<pre>' . $output->fetch() . '</pre>';
            }
        }
        }
}   

