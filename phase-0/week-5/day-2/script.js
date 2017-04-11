var eldestParent = document.getElementById('eldest-parent');
console.log(eldestParent);

var children = eldestParent.children;
console.log(children);

var eldestChild = eldestParent.children[0];
console.log(eldestChild);

eldestChild.innerHTML = 'Diakses Melalui Eldest Parent';

var aChild = document.getElementById('a-child');
console.log(aChild);

var prevChild = aChild.previousElementSibling;
console.log(prevChild);

prevChild.innerHTML = 'Diakses Melalui a Child';

var nextChild = aChild.nextElementSibling;
console.log(nextChild);

nextChild.innerHTML = 'Diakses Melalui a Child';

var aChildParent = aChild.parentNode;
console.log(aChildParent);

var aChildGrandParent = aChildParent.parentNode;
console.log(aChildGrandParent);

var aChildGrandParentNext = aChildGrandParent.nextElementSibling;
console.log(aChildGrandParentNext);

aChildGrandParentNext.innerHTML = 'Diakses Melalui a Child';