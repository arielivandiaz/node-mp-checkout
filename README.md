# Ejemplo Mercado Pago Node

Este ejemplo es solo backend en node.js y es independiente del frontend utilizado.

Para visitar este ejemplo: 

[Plumbus Market](http://lagunite.com/examples/plumbus/)

Para realizar pruebas utilizar estas tarjetas:

| Tarjeta	| Número | 	Código de seguridad	| Fecha de vencimiento |
| ------------- | ------------- | ------------- | ------------- |
| Mastercard	| 5031 7557 3453 0604	| 123	| 11/25 |
| Visa	| 4509 9535 6623 3704	| 123	| 11/25 |
 |American Express	| 3711 803032 57522	| 1234	| 11/25 |

[más info](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/test-integration/)


###  Tienda de prueba

![](https://github.com/arielivandiaz/node-mp-checkout/blob/master/doc/index.png?raw=true) 



### Pantalla de Checkout

![](https://github.com/arielivandiaz/node-mp-checkout/blob/master/doc/checkout.png?raw=true)

### Pantalla de al terminar el Checkout

![](https://github.com/arielivandiaz/node-mp-checkout/blob/master/doc/checkout_passed.png?raw=true)


## Configura tu aplicación node


Remplazar en los archivos de la carpeta config, los valores 77778888 y xxx%xxx por lo correspondiente.



## Configuración frontend

Es necesario incluir la libreria de javascript de seguridad de Mercadopago en el *<head>* de la web

```html
   <script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

Para proceder al checkout, debes enviar un formulario con el detalle de los items como figura en [config/mp.item.test.json](https://github.com/arielivandiaz/node-mp-checkout/blob/master/config/mp.item.test.json)

Para producción deberas proporcionar la información del usuario que realiza la compra, [/config/mp.user.test.json](https://github.com/arielivandiaz/node-mp-checkout/blob/master/config/mp.user.test.json)

Con la información de la compra y la configuración de [/config/mp.conf.json](https://github.com/arielivandiaz/node-mp-checkout/blob/master/config/mp.conf.json), se crea un objete "preference" y se llama la función *    mercadopago.preferences.create(preference)* la cual nos dará como resultado un **id** para redireccionar a la pagina de checkout correspondiente.

Realizado el checkout correspondiente la API de mercadopago nos da toda la información de la transacción en el query de la url.

Posteriormente mediante el **IPN** se obtiene el estado actualizado de la transacción, en la notification_url del objeto *preference*, detallamos en que url vamos a recibir el POST del IPN con las actualizaciones de las transacciones.



### Utilidades externas

[node-template](https://github.com/arielivandiaz/node-templates "node-template")

[Lagunite Frontned Framework](http://lagunite.com/ "Lagunite Frontned Framework ")

[Auto Commit Script](https://github.com/arielivandiaz/auto-commit "Auto Commit Script")
