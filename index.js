let string="";
let buttons=document.querySelectorAll('.type2');
Array.from(buttons).forEach((type2)=>{
  type2.addEventListener('click', (e)=>{
    if(e.target.innerHTML=='='){
      string=eval(string);
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='Cl'){
      string="";
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='Del'){
        string="";
        document.querySelector('input').value=string;
      }
    else{
      console.log(e.target)
      string=string+e.target.innerHTML;
      document.querySelector('input').value=string;
    }
  })
})
