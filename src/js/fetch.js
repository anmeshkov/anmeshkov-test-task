import postImg from '../assets/post-img/1.jpg';

let allPosts = [];
const maxPosts = 30;
const downloadPost = 5;
let displayedPosts = 0;

// DOM
const postsWrapper = document.querySelector('#postsWrapper');
const postsLoadButtun = document.querySelector('#postsLoadBtn');

// загрузка всех постов с сервера
function loadAllPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      allPosts = data;
      loadPosts();
    })
    .catch((error) => console.error('Ошибка:', error));
}

// загрузка постов по кнопке
function loadPosts() {
  if (displayedPosts >= maxPosts) {
    return;
  }

  const posts = allPosts.slice(displayedPosts, displayedPosts + downloadPost);

  posts.forEach((post) => {
    postsWrapper.insertAdjacentHTML('beforeend', renderPost(post))
  });

  displayedPosts += downloadPost;

  if (displayedPosts >= maxPosts) {
    postsLoadButtun.disabled = true;
  }
}

// рендер постов на странице
function renderPost(post) {
  return `
          <!-- post -->
          <article class="post" data-postid=${post.id}>
            <div class="post-header">
              <!-- img -->
              <div class="post__image">
                <img src=${postImg} alt=${post.title}>
              </div>
            </div>
            <div class="post-body">
              <!-- tags -->
              <ul class="post__tags tags-wrapper__list">
                <li class="tags-wrapper__item"><a class="tags-wrapper__link" href="#">Bridge</a></li>
              </ul>
              <!-- title -->
              <h3 class="post__title">${post.title}</h3>
              <!-- content -->
              <div class="post__content">
                <p>${post.body}</p>
              </div>
              <!-- author -->
              <div class="post__author author-wrapper">
                <p>Posted by <a class="author-wrapper__link" href="#"><span data-userid=${post.userId}></span>Eugenia</a>, on <time
                    class="author-wrapper__datetime">July 24,
                    2019</time></p>
              </div>
              <!-- button -->
              <a class="post__button" href="#">Continue reading</a>
            </div>
          </article>
          <!-- /post -->
  `;
}

loadAllPosts();

postsLoadButtun.addEventListener('click', () => {
  loadPosts();
});
