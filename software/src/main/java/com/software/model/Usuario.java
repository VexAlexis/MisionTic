package com.software.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="usuario")
public class Usuario {
    //ATRIBUTOS
    @Id
    private int id;
    private String nombre;
    private String apellidos;
    private String email;
    private String usuario;
    private String contraseña;

    //CONSTRUCTORES
    public Usuario(){

    }
    public Usuario(String nombre, String apellidos, String email, String usuario, String contraseña) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
    @Override
    public String toString(){
        String info = "\n--------------------------------------\n";
        info += "Id: "+id+"\n";
        info += "Nombre: "+nombre+"\n";
        info += "Apellido: "+apellidos+"\n";
        info += "Email: "+email+"\n";
        info += "Usuario: "+usuario+"\n";
        info += "contraseña: "+contraseña+"\n";
        return info;
    }

    //GETTERS & SETTERS
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellidos() {
        return apellidos;
    }
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsuario() {
        return usuario;
    }
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    public String getContraseña() {
        return contraseña;
    }
    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    
    //METODOS
    public void ingresar(){

    }
    
}
