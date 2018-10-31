Template com PHP
==========

Autor
----------
Eric Neves  
Instagram: https://www.instagram.com/eric_nevesr/

Com este conceito, poderemos manipular os templates de um determinado sistema, assim como o famoso framework Laravel.

Deverão ser manipulados os arquivos: `index.php` e `template.phtml`. 

No `index.php`, a Classe `Render` será responsável por redenizar dados do arquivo visual do sistema, neste caso `template.phtml`.

Dados do `index.php`:

```php
<?php 
require 'vendor/autoload.php';

$render = new \Render\Render('template.phtml');

$args = [
    "name" => "Eric Neves",
    "email" => "ericneves@gmail.com"
];

echo $render->render($args);

```
Na Classe `Render`, é passado como parâmetro o arquivo visual do sistema (`template.phtml`), e o `array $args` será passado como parâmetro no método `render()`, as `keys` do `array $args` serão chamadas no arquivo `template.phtml` dentro de chaves `{name}` e `{email}`, e assim serão substituídas pelos valos passados no `array`.
