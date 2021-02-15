document.addEventListener('DOMContentLoaded', ()=>{
  function updateTime() {
    let today = new Date();
  let month = String(today.getDate()).padStart(2, '0');
  let day = String(today.getMonth()+1).padStart(2, '0');
  let year = today.getFullYear();
  document.querySelector('.month').innerHTML = `${month}/`;
  document.querySelector('.day').innerHTML = `${day}/`;
  document.querySelector('.year').innerHTML = year;
  let hour = String(today.getHours()).padStart(2, '0')
  let min = String(today.getMinutes()).padStart(2, '0')
  document.querySelector('.hour').innerHTML = `${hour}:`
  document.querySelector('.min').innerHTML = min
  setTimeout(updateTime, 1000)
  }
  updateTime();
  
  
  let item 
  let input = document.querySelector('input')
  input.addEventListener('input', ()=>{
    item = input.value;
  })
  let addBtn = document.querySelector('.add')
  let itemCounter = 0

  input.addEventListener("keypress", (e) => {
    if(e.key === 'Enter') {
      addLi()
    }
  })

  addBtn.addEventListener('click', ()=> {
    addLi()
  })
  
  let firstAdded = false
  let items = [];
  let checkBtn = []
  let addLi=() =>{
    if(item === undefined) {
      alert('You need to write something to add it !')
    }
    else {
      itemCounter++
      items[itemCounter] = item
      if(item === `NodeList [h4#${itemCounter-1}.item]`){ console.log('aaa')}
      console.log(item)
      document.querySelector('.list').innerHTML += `
        <li class="list-item" id="${itemCounter}"> 
          <h4 class="item" id="${itemCounter}">${items[itemCounter]}</h4>
          <div class="icons">
            <img class="close" id="${itemCounter}" src="close.png">
          </div>
        </li>
      `;
      text = document.querySelectorAll('.item')
      text.forEach(txt => {
        txt.addEventListener('click', () => {
          txt.style.transition = '.25s';
          txt.style.textDecoration = 'line-through 2px #fff';
        })
      })
      listItem = document.querySelectorAll('.list-item')
      closeBtn = document.querySelectorAll('.close')
      closeBtn.forEach(element => {
        element.addEventListener('click', () => {     
          listItem[parseInt(element.id-1)].style.display = 'none'
        })
      })  
    }
  }
})
