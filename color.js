function color(self) {
  target = document.querySelector('body')
  if(self.value == 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';
  }
}

/*
if(this.value == 'night'){
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
  document.querySelector('body').value = 'day';
} else {
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  this.value = 'night';
}
*/
