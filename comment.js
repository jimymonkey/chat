var container = document.getElementById('comments')
var txt = document.getElementById('textbox');
var comment = []
htmlbase = ``
var btn = document.querySelector('button');
var comments = []
txt.value=" "
localStorage.setItem("comments", comments)
function rendercomments(){
	container.innerHTML=""
	console.log("comments sucesfully rendered")
	localComments = JSON.parse(localStorage.getItem('comments'))
	for (i in localComments) {
	console.log(localComments[i][0])
	htmlbase = `
		<div class="comment">
		<div class="top-comment">
			<p class="user">${localComments[i][2]}</p>
		</div>
		<div class="commenttext">
			<p>${localComments[i][0]}</p>
		</div>
		<div class="top-comment">
			<p class="timestamp">${Date(localComments[i][1])}</p>
		</div>
		</div>
		`
		container.insertAdjacentHTML("AfterBegin", htmlbase)
	}
}
function addComment(){
	localComments = localStorage.getItem('comments')
		comment = [txt.value, Date.now(), 'Jimymonkey']
		comments = JSON.parse(localStorage.getItem('comments'))
		comments.push(comment)
		localStorage.setItem('comments', JSON.stringify(comments))
		rendercomments()
}

comments = JSON.parse(localStorage.getItem('comments'))
comments.push(comment)
localStorage.setItem('comments', JSON.stringify(comments))