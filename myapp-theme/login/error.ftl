<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Error - MyApp</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <img src="${url.resourcesPath}/img/logo.png" alt="MyApp Logo" class="login-logo">

            <h2>Oops! Something Went Wrong</h2>
            <p>${message! "An unexpected error occurred. Please try again."}</p>

            <p class="footer-text">
                <a href="${url.loginUrl}" class="btn-login">Back to Login</a>
            </p>

            <p class="footer-text">© 2025 MyApp. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
