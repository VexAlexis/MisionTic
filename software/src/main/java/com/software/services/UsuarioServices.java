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
        return usuarios;
    }



}
