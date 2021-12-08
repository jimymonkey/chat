var container = document.getElementById('comments');
var txt = document.getElementById('textbox');
var comment = ['dummy', 'lorem ipsum', '10: 10']
var htmltemplate = ``
//localStorage.setItem("comments", comments)
function rendercomments(){
	container.innerHTML = ''
	localComments = comments
	for(i in localComments) {
	htmlbase = `
		<div class="comment">
		<div class="top-comment">
			<p class="user">${localComments[i][0]}</p>
		</div>
		<div class="commenttext">
			<p>${localComments[i][1]}</p>
		</div>
		<div class="top-comment">
			<p class="timestamp">${localComments[i][2]}</p>
		</div>
		</div>`
		container.insertAdjacentHTML('afterbegin', htmlbase)
	}

}
setInterval(rendercomments, 5000)
function addComment(){
	localComments = comments
	comment = ["Jimymonkey", txt.value, String(Date(Date.now()))]
	comments.push(comment)
	rendercomments()
}