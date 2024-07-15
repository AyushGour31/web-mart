
switch (window.location.pathname) {
    case '/developer/signup':
    case '/developer/signin':
        document.cookie = 'iam=developler';
        break;
    case '/user/signup':
    case '/user/signin':
        document.cookie = 'iam=user';
        break;
    default:
        console.log('def');
        break;
}
