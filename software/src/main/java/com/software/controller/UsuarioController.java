package com.software.controller;

import java.util.List;

import com.software.model.Usuario;
import com.software.services.UsuarioServices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    //ATRIBUTOS
    private UsuarioServices uServices;

    //CONSTRUCTOR
    public UsuarioController(){
        uServices = new UsuarioServices();
    }
    
    @GetMapping
    public List<Usuario> obteneUsuarios(){
        return uServices.obtenerUsuarios();
    }





}














// @GetMapping
    // public boolean Login(String email, String contraseña){

    //     Session session = factory.openSession();
    //     Usuario usuario = new Usuario();
    //     session.beginTransaction();
    //     try {
    //         usuario = session.find(Usuario.class, email);
    //         if(usuario != null){
    //             if(usuario.getContraseña().equals(contraseña)){
    //                 JOptionPane.showMessageDialog(null, "Bienvenido"+usuario.getUsuario());
    //                 return true;
    //             }else{
    //                 JOptionPane.showMessageDialog(null, "Contraseña Erronea!");
    //                 return false;
    //             }
    //         }else{
    //             JOptionPane.showMessageDialog(null, "El usuario no existe!");
    //             return false;
    //         }
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //     }

    //     return false;
    // }
