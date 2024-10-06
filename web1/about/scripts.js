document.addEventListener('DOMContentLoaded', function() {
    const members = document.querySelectorAll('.team-member');
    
    members.forEach(member => {
        member.addEventListener('click', () => {
            member.classList.add('clicked');
            alert(member.querySelector('h3').textContent + ' 被點擊了!');
        });
    });
});
