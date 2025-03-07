function notifyUserAboutUpdate() {
    const updateNotification = document.createElement('div');
    updateNotification.className = 'update-notification';
    updateNotification.innerHTML = `
       <p>New update available. <button onclick="refreshPage()">Refresh</button></p>
    `;
    document.body.appendChild(updateNotification);
}

function refreshPage() {
    // Reload the page to activate the new service worker
    window.location.reload();
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa-worker.js').then(function(registration) {
        // Check for updates manually after registration
        registration.onupdatefound = function() {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = function() {
                switch (installingWorker.state) {
                    case 'installed':
                        if (navigator.serviceWorker.controller) {
                            // New or updated content is available, notify user
                            notifyUserAboutUpdate();
                        } else {
                            // Content is cached for offline use
//                            console.log('Content is now available offline!');
                        }
                        break;
                    case 'redundant':
                        console.error('The installing service worker became redundant.');
                        break;
                }
            };
        };
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}

