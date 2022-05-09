// We enclose this in window.onload.
// So we don't have ridiculous errors.
window.onload = function() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // This is very IMPORTANT!! We're going to use "db" a lot.
  var db = firebase.database()
  // We're going to use oBjEcT OrIeNtEd PrOgRaMmInG. Lol
  class MEME_CHAT{
    // Home() is used to create the home page
    home(){
      // First clear the body before adding in
      // a title and the join form
      document.body.innerHTML = ''
      this.create_title()
      this.create_join_form()
    }
    // chat() is used to create the chat page
    chat(){
      this.create_title()
      this.create_chat()
    }
    // create_title() is used to create the title
    create_title(){
      // This is the title creator. 🎉
      var title_container = document.createElement('div')
      title_container.setAttribute('id', 'title_container')
      var title_inner_container = document.createElement('div')
      title_inner_container.setAttribute('id', 'title_inner_container')

      var title = document.createElement('h1')
      title.setAttribute('id', 'title')
      title.textContent = 'MemeChat 2.0'

      title_inner_container.append(title)
