const jwt = require('jsonwebtoken');
const config = require('../../config/config');

module.exports = {

    autenticar: (request, response, next) => {
        if(request.headers.authorization)
        {
            var auth = request.headers.authorization.split(" ");
            if(auth.length===2)
            {
                var key = auth[0];
                var val = auth[1];
                if(/^Bearer$/i.test(key))
                {
                    var token = val.replace(/"/g, ""); //remplaza las comillas dobles por nada !
                    jwt.verify(token, config.TOKEN_SECRET, (error, decoded) =>
                    {
                        if(error)
                        {
                            response.status(401).json('Token Invalido');
                        }
                        else
                        {
                            next();
                        }
                    });
                }
                else
                {
                    response.status(401).json('Cabecera Invalida [Bearer]');       
                }
            }
            else
            {
                response.status(401).json('Cabecera Invalida [Length]');           
            }   
        }
        else
        {
            response.status(401).json('Tu Peticion No Tiene Cabecera');
        }
    },

    getToken: (username) => {
        return jwt.sign({data : username}, config.TOKEN_SECRET, { expiresIn: 120});
    }
}