<#-- Modern, centered login page without template.ftl -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MyApp Login</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <img src="${url.resourcesPath}/img/logo.png" alt="MyApp Logo" class="login-logo">
            <h2>Welcome Back</h2>
            <p>Sign in to your account</p>

            <form id="kc-form-login" action="${url.loginAction}" method="post">
                <div class="input-group">
                    <label for="username">Username</label>
                    <input id="username" name="username" type="text" value="${login.username!''}" autofocus autocomplete="username">
                </div>

                <div class="input-group">
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" autocomplete="current-password">
                </div>

                <#if message?has_content>
                    <div class="error-message">${message}</div>
                </#if>

                <button type="submit" class="btn-login">Sign In</button>
            </form>

            <p class="footer-text">© 2025 MyApp. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
