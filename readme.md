Template com PHP
==========

Autor
----------
Eric Neves  
Instagram: https://www.instagram.com/eric_nevesr/

Com este conceito, poderemos manipular os templates de um determinado sistema, assim como o famoso framework Laravel.

O primeiro passo é criar um arquivo `index.php`, logo em seguida, você deverá instanciar o `autoload` e a classe `Render`, como no exemplo abaixo.

```php
<?php 
require 'vendor/autoload.php';
$render = new \Render\Render('template.phtml');
```


