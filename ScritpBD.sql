SELECT * FROM usuario;

DESCRIBE usuario;

INSERT INTO usuario (nombre, apellidos, email, usuario, contraseña)
VALUES('Johan Alexis', 'Chavarria Bustos', 'alexischavarria@hotmail.com', 'VexAlexis', 'Alexis123');

DELETE FROM usuario WHERE id >2;

SELECT * FROM usuario WHERE email = 'danielchavarria@hotmail.com' and contraseña = 'daniel12'

SELECT * FROM usuario WHERE correo = 'danielchavarria@hotmail.com';