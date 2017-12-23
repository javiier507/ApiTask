module.exports = {  
	port : 3000, 
	database : 'mongodb://localhost/ApiMongo',
	TOKEN_SECRET: process.env.TOKEN_SECRET || 'tokensecreto#tokensecreto#tokensecreto'
};