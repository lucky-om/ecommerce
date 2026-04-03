# Security Policy

## Supported Versions

The following versions of SoundLux are currently being supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| Main    | :white_check_mark: |
| < 1.0.0 | :x:                |

## Reporting a Vulnerability

We take the security of SoundLux seriously. If you discover a security vulnerability within this project, please follow the steps below to report it responsibly.

**Please do not report security vulnerabilities through public GitHub issues.**

### How to report
To report a vulnerability, please send an email to the project maintainers. While we do not have a dedicated security email yet, you can reach out via:
- **Primary Contact:** [Your Email/Contact Info]
- **GitHub:** Create a [Private Security Advisory](https://github.com/lucky-om/SoundLux/security/advisories/new) if you have the necessary permissions.

### Our Response Process
1. **Acknowledgement:** You will receive an acknowledgement of your report within 48-72 hours.
2. **Investigation:** We will investigate the issue and determine its impact.
3. **Resolution:** If a vulnerability is confirmed, we will work on a fix.
4. **Disclosure:** Once the fix is deployed, we will provide credit to the researcher (if desired) and may release a public advisory.

## Security Best Practices for SoundLux
As this platform integrates with **Supabase**, please ensure you:
- Never commit your `SUPABASE_SERVICE_ROLE_KEY` to the repository.
- Ensure Row Level Security (RLS) is enabled on all sensitive tables in your Supabase dashboard.
- Regularly update dependencies listed in `package.json` to avoid known vulnerabilities in third-party libraries.
