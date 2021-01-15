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
use Flarum\User\AssertPermissionTrait;


class AlbatuKomut implements RequestHandlerInterface {
        protected $view;
        public $packadi;
        public $SiteAnaSayfa;
        public $komut;
        public $output;
        public $input;
            
        public function handle(Request $request): Response
        {

                $this->$packadi = Arr::post($request->getQueryParams(), 'packadi');
                $this->$komut = Arr::post($request->getQueryParams(), 'komut');
                $this->yap();
                $this->$SiteAnaSayfa = app(Paths::class)['base'];
                
                $request->getAttribute('actor')->assertAdmin();    
                ini_set('memory_limit', '1G');
                set_time_limit(300);
                    
                putenv('COMPOSER_HOME=' . $this->$SiteAnaSayfa . '/vendor/bin/composer');
    
                $this->$output = new Output;
                $this->$input = new ArrayInput([
                        'command' => $this->$komut, 
                        'packages' => [$this->$packadi], 
                        '--working-dir' => $this->$SiteAnaSayfa,
                ]);
    
                $application = new Application();
                $application->setAutoExit(false);
                $application->run($this->$input, $this->$output);
                $this->$output = '<hr>';
                $this->$output .= '<pre>' . $output->fetch() . '</pre>';
                $response = new Response();
                $response->setStatusCode(Response::STATUS_CODE_200);
                $response->setContent($this->$output);
                return $response;
    
        }
 
        

}   

