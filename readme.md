Template com PHP
==========

Autor
----------
Eric Neves  
Instagram: https://www.instagram.com/eric_nevesr/

Com este conceito, poderemos manipular os templates de um determinado sistema, assim como o famoso framework Laravel.

Deverão ser manipulados os arquivos: `index.php` e `template.phtml`. 

No `index.php`, a Classe `Render` será responsável por renderizar dados do arquivo visual do sistema, neste caso `template.phtml`.

Dados do arquivo `index.php`:

```php
<?php 
require 'vendor/autoload.php';

$render = new \Render\Render('template.phtml');

$args = [
    "name" => "Eric Neves",
    "instagram" => "https://www.instagram.com/eric_nevesr/"
];

echo $render->render($args);

```
Na Classe `Render`, é passado como parâmetro o arquivo visual do sistema (`template.phtml`), e o `array $args` será passado como parâmetro no método `render()`, as `keys` do `array $args`, serão chamadas no arquivo `template.phtml`, dentro de chaves, neste caso, `{name}` e `{email}`, e assim serão substituídas pelos valores passados no `array`.

Dados do arquivo `template.phtml`:

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
    <h1>{instagram}</h1>
    
</body>
</html>
```

**Retorno**

```
Eric Neves
https://www.instagram.com/eric_nevesr/
```

