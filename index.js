function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li');
  for(let i=0; i<lis.length;i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  return document. querySelectorAll('#grand-node div')[3];
}