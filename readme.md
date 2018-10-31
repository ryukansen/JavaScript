Template com PHP
==========

Autor
----------
Eric Neves  
Instagram: https://www.instagram.com/eric_nevesr/

Com este conceito, poderemos manipular os templates de um determinado sistema, assim como o famoso framework Laravel.

O primeiro passo é criar um arquivo `index.php`, logo em seguida, você deverá instanciar o `autoload`, e a classe `Render`.

```php
<?php 
require 'vendor/autoload.php';
$render = new \Render\Render('template.phtml');
```

Dentro da Classe `Render` passamos como parâmetro o arquivo visual do site, neste caso o arquivo `template.phtml`.

Após isso, no mesmo arquivo, deverá ser criado um `array`, que irá ser passado como parâmetro no método `render()`. 

```php
<?php 
require 'vendor/autoload.php';
$render = new \Render\Render('template.phtml');

//Array
$args = [
    "name" => "Eric Neves",
    "email" => "ericneves@gmail.com"
];

echo $render->render($args);

```

As chaves do `array` `$args`, serão introduzidas no arquivo `template.phtml`, e a Classe `Render` irá substituir as chaves do `array` por seus respectivos valores.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Template</title>
    <style>body{font-family: sans-serif;color: #444;}</style>
</head>
<body>

    <!-- Exemplo -->
    <h1>{name}</h1>
    <h1>{email}</h1>
    
</body>
</html>
```

Agora as chaves do `array` `$args` deverão ser colocadas no arquivo `template.phtml`, 
