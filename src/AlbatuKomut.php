<?

namespace Bilgehanars\Albatu;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\AssertPermissionTrait;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Bilgehanars\Albatu\Komut;



class AlbatuKomut implements AbstractCreateController
 {
        protected $view;
        public $packadi;
        public $SiteAnaSayfa;
        public $komutcomp;
  
            
        public function handle(Request $request): Response
        {

                $this->$packadi = array_get($request->getParsedBody(), 'packadi');
                $this->$komutcomp = array_get($request->getParsedBody(), 'komut');
                
                $request->getAttribute('actor')->assertAdmin();    
                $Komut = new Komut();
                $cevap = $komut->yap($this->$packadi, $this->$Komutcomp);
                return $cevap;
    
        }
 
        

}   

