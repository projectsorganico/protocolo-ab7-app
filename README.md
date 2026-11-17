# Protocolo AB7 / Halitus AB7 — app

- `/` → app em espanhol (Protocolo AB7, Mundpay/PerfectPay)
- `/pt/` → app em português (Halitus AB7, Kirvano)

Site estático publicado na Vercel em `app.purehealth.world`. Login, conteúdo e liberação por compra ficam no Supabase (projeto `tabkinnfkzpefxmfnjry`).

`email-templates/reset-password.html`: modelo do e-mail "Reset password" do Supabase (código de acesso, ES/PT pelo RedirectTo). Assunto: `Código AB7: {{ .Token }}`. Não é publicado na Vercel (.vercelignore).
