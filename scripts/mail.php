<?php
$mail = "Avtoservis-pioner.ru@yandex.ru";
$headers = 'From: Avtoservis-pioner.ru';
if ($_POST) {
    if ($_POST['footer_form']) {
        $message = "\nИмя: " . $_POST['zayavka_name'] . "\nТелефон: " . $_POST['zayavka_phone'] . "\nEmail: " . $_POST['zayavka_mail'];
        mail($mail, 'Новая заявка с сайта', $message, $headers);
    }
}
header('location: /');