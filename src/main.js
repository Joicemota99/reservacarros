document.querySelectorAll(".available").forEach(e =>{
    e.addEventListener("click", i =>{
        const selecionado = i.currentTarget
        if(selecionado.hasAttribute("style")){
            selecionado.removeAttribute("style")
        } else{
            selecionado.style = 'background-color: #f00'
        }
    })
})
