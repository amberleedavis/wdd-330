(function(){
  
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');
    
    form.addEventListener('submit',function(e){
      e.preventDefault();
      list.innerHTML += '<li>' + item.value + '</li>';
      store();
      item.value = "";
    },false)
    
    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.classList.contains('finish')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('finish');
      }
      store();
    },false)
    
    function store() {
      window.localStorage.myitems = list.innerHTML;
    }
    
    getValues();
  })(); 