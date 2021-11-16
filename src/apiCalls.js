export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrls = (title, long_url) => {
  let body = {
    'long_url': long_url,
    'title': title
  }
return fetch( 'http://localhost:3001/api/v1/urls', {
method: "POST",
body: JSON.stringify(body),
headers: {
'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))
}
