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
use Flarum\User;
use Flarum\Foundation;

$SiteAnaSayfa = app(Paths::class)['base'];

class AlbatuYukle implements RequestHandlerInterface {
        protected $view;
        public $packadi;
        public function __construct(Factory $view)
        {
            $this->view = $view;
        }
        public function handle(Request $request): Response
        {
            if isset(Arr::post($request->getQueryParams(), 'packadi')) 
        { 
            this->$packadi = Arr::post($request->getQueryParams(), 'packadi');
            $this->yap();
            return new HtmlResponse($view->render());
        
        } 
    
        }
        public function yap() {
                if isset($request->getAttribute('actor')->assertAdmin()) {
                ($this->packadi != $null) {

                ini_set('memory_limit', '1G');
                set_time_limit(300); // 5 minutes execution
                
                putenv('COMPOSER_HOME=' . $SiteAnaSayfa . '/vendor/bin/composer');

                $output = new Output;
                $input = new ArrayInput([
                    'command' => 'require', 
                    'packages' => [$packadi], 
                    '--working-dir' => $SiteAnaSayfa,
                ]);

                $application = new Application();
                $application->setAutoExit(false);
                $application->run($input, $output);
                $cikis = '<hr>';
                $cikis .= '<pre>' . $output->fetch() . '</pre>';
                $view = $this->view->make($cikis);
            }
        }
        }
}   

