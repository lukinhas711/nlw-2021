const links = {
  github: 'lukinhas711',
  youtube: 'UCMH5PYeHnM3li_fcfhAgpCg',
  instagram: 'lks.711',
  twitter: 'luskadev',
  facebook: 'lucasribeiro711',
}

function showMyLinks(){
  const myLinks = document.querySelector('#myLinks')
  for(let li of myLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${links[social]}`
  }
}

showMyLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${links.github}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}