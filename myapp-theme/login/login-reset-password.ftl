<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Reset Password - MyApp</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <img src="${url.resourcesPath}/img/logo.png" alt="MyApp Logo" class="login-logo">

            <h2>Forgot Password?</h2>
            <p>Enter your username or email to receive a reset link.</p>

            <form id="kc-reset-password-form" action="${url.loginAction}" method="post">
                <input type="hidden" name="execution" value="${execution}">

                <div class="input-group">
                    <label for="username">Username or Email</label>
                    <input id="username" name="username" type="text" 
                           value="${login.username!''}" autofocus required>
                </div>

                <#if message?has_content>
                    <div class="error-message">${message}</div>
                </#if>

                <button type="submit" class="btn-login">Send Reset Link</button>
            </form>

            <p class="footer-text">
                <a href="${url.loginUrl}" class="link">← Back to Sign In</a>
            </p>

            <p class="footer-text">© 2025 MyApp. All rights reserved.</p>
        </div>
    </div>

    <script src="${url.resourcesPath}/js/script.js"></script>
</body>
</html>
