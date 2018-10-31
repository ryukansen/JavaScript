Template com PHP
==========

Autor
----------
Eric Neves  
Instagram: https://www.instagram.com/eric_nevesr/

Com este conceito, poderemos manipular os templates de um determinado sistema, assim como o famoso framework Laravel.

O primeiro passo é criar um arquivo `index.php`, logo em seguida, você deverá instanciar o `autoload`, e a classe `Render`, como mostra o  exemplo abaixo.

```php
<?php 
require 'vendor/autoload.php';
$render = new \Render\Render('template.phtml');
```

Dentro da Classe `Render` passamos como parâmetro o arquivo visual do site, neste caso o arquivo `template.phtml`.

Após isso, no mesmo arquivo, deverá ser criado um `array`, que irá ser passado como parâmetro no método `render()`. 
