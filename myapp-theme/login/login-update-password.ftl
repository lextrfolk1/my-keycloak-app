<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Set Your Password - MyApp</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/style.css">
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <img src="${url.resourcesPath}/img/logo.png" alt="MyApp Logo" class="login-logo">

            <h2>Set Your Password</h2>
            <p>Please create a new password to secure your account.</p>

            <form id="kc-passwd-update-form" action="${url.loginAction}" method="post">
                <input type="hidden" name="execution" value="${execution}">
                <input type="hidden" name="client_id" value="${client.clientId!''}">
                <input type="hidden" name="tab_id" value="${tabId!''}">

                <div class="input-group">
                    <label for="password-new">New Password</label>
                    <input id="password-new" name="password-new" type="password" required autocomplete="new-password">
                </div>

                <div class="input-group">
                    <label for="password-confirm">Confirm Password</label>
                    <input id="password-confirm" name="password-confirm" type="password" required autocomplete="new-password">
                </div>

                <#if message?has_content>
                    <div class="error-message">${message}</div>
                </#if>

                <button type="submit" class="btn-login">Save Password</button>
            </form>

            <p class="footer-text">© 2025 MyApp. All rights reserved.</p>
        </div>
    </div>

    <script src="${url.resourcesPath}/js/script.js"></script>
    <script>
        // Optional: client-side validation for password match
        document.getElementById("kc-passwd-update-form")?.addEventListener("submit", function(e) {
            const pwd = document.getElementById("password-new").value;
            const confirm = document.getElementById("password-confirm").value;
            if (pwd !== confirm) {
                e.preventDefault();
                alert("Passwords do not match. Please try again.");
            }
        });
    </script>
</body>
</html>
