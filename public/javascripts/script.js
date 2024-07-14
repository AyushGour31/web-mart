const asUser = document.querySelector('.as-user');
const asDeveloper = document.querySelector('.as-developer');

asUser.addEventListener('click', () => {
    document.cookie = "iam=user";
})
asDeveloper.addEventListener('click', () => {
    document.cookie = "iam=developer";
})
