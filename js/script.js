'use strict';
function titleClickHandler(event) {
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
  //this.classList.add('active');
  //console.log('clickedElement:', this);
  event.preventDefault();
  const clickedElement = this;
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  const correctArticle = document.querySelector(articleSelector);
  /* add class 'active' to the correct article */
  correctArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(customSelector ='') {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* for each article */
  let html = '';
  console.log(customSelector);
  console.log(optArticleSelector );
  console.log(optArticleSelector + customSelector);
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    const elementTitle = article.querySelector(optTitleSelector);
    /* get the title from the title element */
    const articleTitle = elementTitle.innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    /* insert link into titleList */
    html = html + linkHTML;

  }
  titleList.innerHTML = html;
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

  function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) 
  {
    /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    
    /* make html variable with empty string */
    let html= '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' '); // "cat dog snake"
    /* START LOOP: for each tag */
  for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      /* add generated code to html variable */
      html = html + linkHTML;
    /* END LOOP: for each tag */
  }
    /* insert HTML of all the links into the tags wrapper */
titleList.innerHTML= html;
  /* END LOOP: for every article: */
  }
}

generateTags();
function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
const clickedElement= this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
const href=clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
const correctTag= href.replace('#tag-', '');
  /* find all tag links with class active */
const activeTags= document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
for ( let activeTag of activeTags){
    /* remove class active */
activeTag.classList.remove('active');
  /* END LOOP: for each active tag link */
}
  /* find all tag links with "href" attribute equal to the "href" constant */
const tagLink= document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
for ( let tag of tagLink){
    /* add class active */
tag.classList.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]' );
}


function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();

const rodzina = ['agata', 'kamil', 'franek', 'jasiek'];

// console.log('rodzina: ');
// console.log(rodzina);

// console.log('liczba czlonkow:');
// console.log(rodzina.length);


// console.log('pierwszy czlonek:');
// console.log(rodzina[0]);

// console.log('osatni czlonek:');
// console.log(rodzina[rodzina.length - 1]);

// function drzyjRyja() {
//   alert('aaaaaaaaaaaaaaaaaaa!!!!!!');
// }

// console.log('wyswietl liste czlonkow');

for (const czlonek of rodzina) {
  // console.log(czlonek);
  //    czlonek.przypiszRozkaz('kopniecie', drzyjRyja)    
}

// console.log('wyswietl liste czlonkow - zwykly for');
for (let nr = rodzina.length - 1; nr >= 0; nr--) {
  // console.log(rodzina[nr]);
}

function testHandler(){
const input = document.querySelector('#nazwa-do-usuniecia');
const wprowadzonyTekst = input.value;
  usunDzieci(wprowadzonyTekst);

 //usunDzieci(document.querySelector('#nazwa-do-usuniecia').value);


}


function usunDzieci(selektor = ''){
const elementy = document.querySelectorAll(selektor);
alert('usuwam ' + elementy.length + ' dzieci');
for (const element of elementy) {
  element.innerHTML = '';
}
}