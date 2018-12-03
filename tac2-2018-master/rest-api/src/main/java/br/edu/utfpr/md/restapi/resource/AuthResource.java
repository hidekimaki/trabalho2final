package br.edu.utfpr.md.restapi.resource;

import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;
import br.edu.utfpr.md.restapi.dao.PessoaDAO;
import br.edu.utfpr.md.restapi.security.JWTUtil;
import javax.inject.Inject;

@Controller
public class AuthResource {

    @Inject
    private Result result;
    
    @Inject
    PessoaDAO pessoadao;
    
    @Post("/login")
    @Consumes("application/json")
    public void login(String email, String senha) {
        // Verificando se as credenciais são válidas
         
        if(pessoadao.finduser(email, senha)!=null) {
            String token = JWTUtil.createToken( 1L );
            
            result.use(Results.status()).header("Content-type", "text/plain");
            result.use(Results.status()).ok();
            result.use(Results.http()).body(token);
        }
        else {
            result.use(Results.status()).notFound();
            result.use(Results.http()).body("");
        }
    }
}
