package com.software.services;

import java.util.ArrayList;
import java.util.List;

import com.software.model.Usuario;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class UsuarioServices {
    //ATRIBUTOS
    private SessionFactory factory;

    //CONSTRUCTOR
    public UsuarioServices(){
        factory = new Configuration()
        .configure("cfg.xml")
        .addAnnotatedClass(Usuario.class)
        .buildSessionFactory();
    }

    public List<Usuario> obtenerUsuarios(){
        List<Usuario> usuarios = new ArrayList<>();
        Session session = factory.openSession();
        session.beginTransaction();
        try {
            usuarios = session.createQuery("from Usuario", Usuario.class).list();
        } catch (Exception e) {
            e.printStackTrace();
        }
        session.close();
        return usuarios;
    }

    public String crearPersona(Usuario usuario){
        String message = "";
        Session session = factory.openSession();
        session.beginTransaction();
        try {
            session.persist(usuario);
            session.getTransaction().commit();
            message = usuario.getNombre() +" registrado exitosamente";
        } catch (Exception e) {
            e.printStackTrace();
            message = e.getMessage();
        }
        session.close();
        return message;
    }

    public String iniciar(Usuario usuario){
        String message = "";
        Usuario usuarioEncontrado = new Usuario() ;
        Session session = factory.openSession();
        session.beginTransaction();
        try {
            usuarioEncontrado = session.createQuery("from Usuario u WHERE u.email = ?1 and u.contraseña = ?2 ", Usuario.class).setParameter(1, usuario.getEmail()).setParameter(2, usuario.getContraseña()).getSingleResult();
            message =  "EXITOSO de "+usuarioEncontrado.getNombre();
        } catch (Exception e) {
            e.printStackTrace();
            message = "Credenciales incorrectas "+e.getMessage();
        }
        session.close();
        return message;
    }


    public Usuario encontrarXCorreo(String correo){
        Usuario usuarioEncontrado = new Usuario();
        Session session = factory.openSession();
        session.beginTransaction();
        try {
            usuarioEncontrado = session.createQuery("from Usuario u WHERE u.email = ?1", Usuario.class).setParameter(1, correo)
            .getSingleResult();
            session.close();
            return usuarioEncontrado;
        } catch (Exception e) {
            e.printStackTrace();
            session.close();
        }        
        return null;
    }

}
