function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li');
  for(let i=0; i<lis.length;i++){
    parseInt(lis[i].innerHTML)+parseInt(n);
  }
}

function deepestChild() {

}