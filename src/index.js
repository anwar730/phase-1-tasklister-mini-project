document.addEventListener("DOMContentLoaded", () => {
   

   })
  
   
   let form=document.querySelector('form')
   
   form.addEventListener('submit',(e)=>{
    
      e.preventDefault()
      
      buildMyTodo(e.target.new_task_description.value)
      form.reset()
   })     

function buildMyTodo(todo){
  
  
  let p=document.createElement('p')
  
  
  p.textContent=`${todo}  `
  
  let btn=document.createElement('button')
  btn.textContent='X'

 
 console.log(p)
  
  btn.addEventListener('click',(e)=>{
    e.target.parentNode.remove()
  })
 
  
 p.appendChild(btn)
 document.querySelector('#list').appendChild(p)
}

