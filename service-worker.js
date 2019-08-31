console.log("service-worker loaded");

self.addEventListener('push',e=>{
    const title = 'Simple Title';
    const options = {
    body: 'Web push testing'
    };
registration.showNotification(title, options);
});