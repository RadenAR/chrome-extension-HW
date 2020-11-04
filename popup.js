$(function () {
  $('#name').keyup(function () {
    $('#greet').text('Hello ' + $('#name').val())
  })
})

// The following is manifest with icons
// {
//   "manifest_version": 2,
//   "name": "Hello World",
//   "version": "1.0",
//   "description": "A hello world extension!",
//   "icons": {
//     "128": "icon128.png",
//     "48": "icon48.png",
//     "16": "icon16.png"
//   },
//   "browser_action": {
//     "default_icon": "icon16.png",
//     "default_popup": "popup.html"
//   }
// }
