const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const count=document.querySelector('.count')
const change=document.querySelector('.change')
const btn3=document.querySelector('.btn3')


btn1.addEventListener('click',()=>{
    const countvalue=parseInt(count.innerText)
    const changeby=parseInt(change.value)
    count.innerText=countvalue-changeby

})


btn2.addEventListener('click',()=>{
    const countvalue=parseInt(count.innerText)
    const changeby=parseInt(change.value)
    count.innerText=countvalue+changeby
})

btn3.addEventListener('click',()=>{
    count.innerText=0
})
