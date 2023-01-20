const container = document.querySelector('.container')

async function fun(){
     const account = document.createElement('div')
     account.classList.add('center')
     account.innerHTML = `
     <div class="ring"></div>
     <span>Loading...</span>
     `
     container.appendChild(account)
     const res = await fetch('https://jsonplaceholder.typicode.com/photos')
     const posts = await res.json()

     container.innerHTML = ''
     posts.forEach(post =>{
        const {title, url, thumbnailUrl} = post
        const account = document.createElement('div')
        account.innerHTML = `
        <div class="profile">
           <img class="pic" src="${url}" /img>
           <div class="name">${title}</div>
        </div>
        <div class="desc">
           <div class="line">${thumbnailUrl}</div>
           <div class="line">${thumbnailUrl}</div>
           <div class="line">${thumbnailUrl}</div>
        </div>
        `
        container.appendChild(account)
     })
}

fun()

