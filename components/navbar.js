function createNavbar() {
    const navbarHtml = `
    <nav id="sidebar" class="sidebar">
        <div class="nav-top">
            <a class="nav-item" href="./../home/home.html">Home</a>
            <a class="nav-item" href="./../tags/tags.html">Tags</a>
            <a class="nav-item" href="./../search/search.html">Search</a>
            <a class="nav-item" href="./../posts/createPost.html">Create</a>
            <a class="nav-item" href="./../profile/profile.html">Profile</a>
        </div>
        <div class="nav-bottom">
            <a class="nav-item" href="#">More</a>
        </div>
    </nav>
    `;


    const header = `
    <header class="header">
        <div class="header-left">
            <a href="/home/home.html">Joseph's site</a>
        </div>
        <div class="header-mid"></div>
        <div class="header-right">
            <a href="./../auth/login.html">LogIn/SignUp</a>
        </div>
    </header>
    `;


    const body = document.body;
    body.insertAdjacentHTML('afterbegin', header);

    const gridContainer = document.getElementsByClassName('grid-container')[0];
    gridContainer.insertAdjacentHTML('afterbegin', navbarHtml);
}

document.addEventListener('DOMContentLoaded', createNavbar);