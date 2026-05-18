<?php
    include './conexao.php';

    $email = $_REQUEST['email'];
    $senha = $_REQUEST['senha'];

    $sql = "SELECT * FROM usuario WHERE email='$email' AND senha='$senha' ";

    $resultado = mysqli_query($conexao, $sql);

    $colunas = mysqli_fetch_assoc($resultado);

    echo $colunas['nome'];

    if(mysqli_num_rows($resultado) > 0){
        session_start();

        $_SESSION['usuario'] = $colunas['nome'];
        $_SESSION['email'] = $colunas['email'];
        $_SESSION['senha'] = $colunas['senha'];

        header('location:../principal.php');
    }else{
        header('location:../login.php');
    }
?>