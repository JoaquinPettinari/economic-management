const passport = require('passport');
const passportLocal = require('passport-local');

passport.use(
    'login',
    new passportLocal.Strategy(
      {
        usernameField: 'dni',
        passwordField: 'contrasenia',
        passReqToCallback: true,
      },
      async (req, dni, contrasenia, done) => {
        try {
          /*const usuario = await Usuario.create(req.body);
          const token = generarJWT(usuario.id, dni);
          const carreras = await inscripcionesPara(usuario.dni);
  
          if (carreras != null) {
            await InscripcionCarrera.bulkCreate(
              carreras.map(({ id, nombre }) => ({
                usuarioId: usuario.id,
                idCarrera: id,
                nombreCarrera: nombre,
              }))
            );
  
            await usuario.update({ fechaSincronizacionGuarani: new Date() });
          }
  
          await sendMail({
            destinatario: usuario.email,
            asunto: asuntoRegistro,
            template: 'templateRegistro',
            parametros: {
              nombreUsuario: usuario.nombre,
              urlLogin: concat(host, '/login'),
            },
          });*/
  
          return done(null, { saludos:'hola' });
        } catch (e) {
          return done(e);
        }
      }
    )
);