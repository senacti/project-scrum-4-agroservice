$(document).ready(function(){
    var login =$('#login');
    var register =$('#register');
    var conteinerForm=$('.container-form');
    
    login.on('click',function(){
      $(this).addClass('active');  
      register.removeClass('active');
      conteinerForm.empty();
      var formulario ='<form action=""><p>Correo:</p><div class="control"><i class="fa fa fa-envelope-o"></i><input type="text" placeholder="correo"/></div><p>password:</p><div class="control"><i class="fa fa-key"></i><input type="password" placeholder="Password"/></div><input type="submit" value="Iniciar"/></form>';
      conteinerForm.html(formulario);
    });
    
      register.on('click',function(){
      $(this).addClass('active');  
      login.removeClass('active');
      conteinerForm.empty();
      var formulario ='<form action=""><div class="control-group"><div class="control-linear"><p>Nombre:</p><div class="control"><i class="fa fa-user-circle-o"></i><input type="text" placeholder="Nombre"/></div></div><div class="control-linear"><p>Apellido:</p><div class="control"><i class="fa fa-user-circle-o"></i><input type="text" placeholder="Apellido"/></div></div></div><p>Correo:</p><div class="control"><i class="fa fa fa-envelope-o"></i><input type="text" placeholder="correo"/></div><p>password:</p><div class="control"><i class="fa fa-key"></i><input type="password" placeholder="Password"/></div><div class="control-group"><div class="control-linear"><p>Compañia:</p><div class="control"><i class="fa fa-building-o"></i><input type="text" placeholder="Compañia"/></div></div><div class="control-linear"><p>telefono:</p><div class="control"><i class="fa fa-phone"></i><input type="text" placeholder="+503 6760083"/></div></div></div><input type="submit" value="Crear cuenta"/></form>';
  conteinerForm.html(formulario);
      
          
    });
    
  });