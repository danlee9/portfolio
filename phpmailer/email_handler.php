<?php
require_once('email_constants.php');
require('PHPMailer/PHPMailerAutoload.php');

$name = strip_tags($_POST["name"]);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
// $subject = $_POST['subject'];
// $body = $_POST['body'];
$message = strip_tags($_POST["message"]);

$mail = new PHPMailer;
// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication


$mail->Username = EMAIL_USER;                 // SMTP username
$mail->Password = EMAIL_PASS;                 // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = $email;//your email sending account
$mail->FromName = $name;//your email sending account name
$mail->addAddress(/*your email address, or the email the sender if you are sending confirmation*/ /*'kylemarx86mailservice@gmail.com' */ 'dan.dh.lee@gmail.com', /*email address user name*/'Daniel Lee');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo(/*email address of the person sending the message, so you can reply*/$email);
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Portfolio Message';
// $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
$mail->Body    = $message;
$mail->AltBody = $message;

$res = ['success' => true];

if(!$mail->send()) {
		$res['success'] = false;
		$res['error'] = 'Mailer Error: ' . $mail->ErrorInfo;
}

print(json_encode($res));

?>
