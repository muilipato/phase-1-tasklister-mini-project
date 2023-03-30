document.addEventListener("DOMContentLoaded", () => {

  // your code here
  const form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    taskList(e.target.new_task_description.value)
    form.reset()
  })


  function taskList (todo){
    let li = document.createElement("li")
    li.textContent = `${todo} `
    
    document.querySelector("#tasks").appendChild(li)

  }



  
});
