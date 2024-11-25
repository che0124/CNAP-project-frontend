function createNavbar() {
    const dashboard = `
        <div class="extra-content">
            <div class="dashboard-content">
                <div class="user-info">
                    <div class="user">
                        <a href="./../profile/profile.html">
                            <div class="user-image">
                                <img src="./../assets/user.png" alt="User Image">
                            </div>
                        </a>
                        <div class="user-names">
                            <a href="./../profile/profile.html">
                                <span class="username">Username</span>
                            </a>
                            <span class="name">Name</span>
                        </div>
                    </div>
                    <a href="./../auth/login.html" class="user-action">Switch</a>
                </div>
                <div class="user-dashboard">
                    <div class="user-stats">
                        <p>Posts: 10</p>
                        <p>Followers: 200</p>
                        <p>Following: 180</p>
                    </div>
                    <div class="recent-activities">
                        <h3>Recent Activities</h3>
                        <ul>
                            <li>Posted a new photo</li>
                            <li>Commented on a post</li>
                            <li>Liked a photo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    const gridContainer = document.getElementsByClassName('grid-container')[0];
    gridContainer.insertAdjacentHTML('beforeend', dashboard);
}

document.addEventListener('DOMContentLoaded', createNavbar);