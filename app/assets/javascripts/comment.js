$(function(){

  function buildHTML(comment){
    let html = `<li class="Comment">
                  <div class="UserPhoto">
                    <img class="person" src="${comment.user_image}">
                  </div>
                  <div class="CommentZone">
                    <div class="NameAndDaytime">
                      <div class="UserName">
                        <a class="LinkOrange" href="/users/${comment.user_id}">
                          ${comment.user_name}
                        </a>
                      </div>
                      <div class="CreatedAt">
                        ${comment.created_at}
                      </div>
                    </div>
                    <div class="NameAndDaytime">
                      <div class="TemplateComment">
                        ${comment.text}
                      </div>
                      <div class="CommentDelete">
                        <a class="LinkOrange" rel="nofollow" data-method="delete" href="/posts/:post_id/comments/81">削除</a>
                      </div>
                  </div>
                </li>`
    return html;
  }

  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.LeftTitle').append(html);
      $('.textbox').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
})