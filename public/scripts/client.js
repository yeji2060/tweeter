

$(document).ready(function () {
    

  const renderTweets = function (tweets) {
    const $tweetsContainer = $('#tweets-container');
    $('#tweets-container').empty(); // Clear existing tweets

    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.prepend($tweet);
    }
  }
  
  const createTweetElement = function (tweet) {
    const timeAgo = timeago.format(new Date(tweet.created_at));

    const $tweet = $(`
      <article class="tweet">
        <header>
            <div class="user-info">
                <div class="left-side">
                    <img src="${tweet.user.avatars}" alt="User Avatar">
                    <p class="user-name">${tweet.user.name}</p>
                </div>
                <div class="right-side">
                    <p class="user-id">${tweet.user.handle}</p>
                </div>
            </div>
        </header>
        <p class="tweet-text"></p>
        <footer>
            <hr class="divider">
            <p class="time-ago">${timeAgo}</p>
            <div class="icons">
                <span><i class="material-symbols-outlined">flag</i></span>
                <span><i class="material-symbols-outlined">repeat</i></span>
                <span><i class="material-symbols-outlined">favorite</i></span>
            </div>
        </footer>
    </article>
  `);
  $tweet.find('.tweet-text').text(tweet.content.text);


    return $tweet;
  }


  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (response) {
        renderTweets(response);
      },
      error: function (xhr, status, error) {
        console.error('Error loading tweets:', error);
      }
    });
  };


//submit the new tweet with proper error message.
$('#new-tweet-form').submit(function (event) {
  event.preventDefault();

  const tweetText = $('#tweet-text').val().trim(); // Get and trim the tweet text

  $('#tweet-error').slideUp(() => {
    const tweetText = $('#tweet-text').val().trim(); // Get and trim the tweet text

    // Check if the tweet is empty
    if (!tweetText) {
      $('#tweet-error').text("Your tweet is empty. Please write something!").slideDown();
      return; // Stop the function execution
    }

    // Check if the tweet exceeds the maximum length (e.g., 140 characters)
    if (tweetText.length > 140) {
      $('#tweet-error').text("Your tweet is too long. Please limit it to 140 characters.").slideDown();
      return; // Stop the function execution
    }

  const formData = $(this).serialize();
  const decodedFormData = decodeURIComponent(formData);


  $.ajax({
    url: '/tweets', // Ensure this is the correct endpoint
    method: 'POST',
    data: formData,
    success: function () {
      loadTweets();
      $('#tweet-text').val(''); // Clear the textarea after successful submission
    },
    error: function (xhr, status, error) {
      console.error('Error submitting tweet:', error);
    }
  });

});
});
  loadTweets();

});




