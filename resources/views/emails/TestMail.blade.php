<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Backend Email</title>
</head>
<body>
<h1>{{ $details['title'] }}</h1>
<p>{{ $details['body'] }}</p>
<p>Il codice da inserire è:</p>
<h2> {{ $details['verificationCode'] }}</h2>
<p></p>
</body>
</html></html>