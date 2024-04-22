// Reference the <video> and the <source> elements
const video = document.getElementById('video'); 
const videoSource = document.getElementById('video-src')

// Reference other DOM elements
const videoList = document.getElementById("video-list");
const searchInput = document.getElementById('search-input');

// Create a copy of the original video playlist
const originalList = [...videos];

// Initialize variables to track the current video index and shuffle state
let currentvideoIndex = 0;
let isShuffle = false;

// Function to update the video playlist displayed in the UI
function updatePlayList(playlist){
    // Write your code here for task 1
    // Clear the html of the videoList element.
    videoSource.innerHTML ='';
    playlist.forEach(video => {
        let liElement = document.createElement("li");

    });


    // Traverse over the playlist.

    playlist.forEach(video => {
        console.log(video); 

    });
    const playlist = ['Sample 1 Video','Sample  Video'];
    updatePlayList(playlist);
    
    // For each video, create an <li> element.
    

    // Display the video title in the <li>.
    

    // Append the <li> element to the videoList.
}

// Function to update the UI with video information
function updateUI(currentvideoIndex, playlist) {
    document.getElementById('video-title').textContent = playlist[currentvideoIndex]["title"];
    document.getElementById('video-artist').textContent = playlist[currentvideoIndex]["artist-name"];
}

// Function to play the current video
function playvideo(playlist) {
    video.pause();
    // Set the video source
    videoSource.src = playlist[currentvideoIndex]["url"];    
    // Load and play the video after setting the source
    video.load();
    video.play();
    // Update the UI with video information
    updateUI(currentvideoIndex, playlist);
}

// Event delegation for video selection in the playlist
videoList.addEventListener('click', (e) => {
    // Write your code here for task 2
    // Find the index of the list-item (video-title) clicked
    if (e.target.tagName === 'Li'){
        currentvideoIndex = [...videoList.children].indexOf(e.target);
        playvideo(isShuffle ? videos : originalList);
    }

    // Call the playvideo() function and pass the shuffled videos or originalList as argument on the basis of isShuffle flag's value.
});

// Event listeners for play, next, and previous buttons
document.getElementById('play-button').addEventListener('click', () => {
    playvideo(isShuffle ? videos : originalList);
});

document.getElementById('next-button').addEventListener('click', () => {
    // Move to the next video and play it
    // Write your code here for task 3
    // Increase the current video index by 1.
    currentvideoIndex =(currentvideoIndex + 1) % videos.length;
    playvideo(isShuffle ? videos : originalList);

    // If the current video index becomes equal to the length of the playlist, then set the current index to 0.

    // Play the selected video, considering the shuffle state

});

document.getElementById('prev-button').addEventListener('click', () => {
    // Move to the previous video and play it
    
    // Write your code here for task 4
    // Decrease the current video index by 1.
    currentvideoIndex =(currentvideoIndex - 1) % videos.length;
    playvideo(isShuffle ? videos : originalList);
    
    // If the current video index becomes equal to the length of the playlist, then set the current index to 0.

    // Play the selected video, considering the shuffle state.

});

// Function to shuffle the array in place
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
}

// Event listener for the Shuffle button
document.getElementById('shuffle-button').addEventListener('click', (event) => {
    isShuffle = !isShuffle;

    if (isShuffle) {
        event.target.textContent = "Click to Unshuffle";
        // Shuffle the playlist, update it, and play the first video
        shuffleArray(videos);
        updatePlayList(videos);
        currentvideoIndex = 0;
        playvideo(videos);
    } else {
        event.target.textContent = "Click to Shuffle";
        // Restore the original playlist, update it, and play the first video
        updatePlayList(originalList);
        currentvideoIndex = 0;
        playvideo(originalList);
    }
});

// Event listener to filter the playlist based on search input
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredvideos = originalList.filter((video) =>
        video.title.toLowerCase().includes(searchTerm)
    );
    // Update the displayed playlist with the filtered videos
    updatePlayList(filteredvideos);
    updateUI(currentvideoIndex, originalList);
});

// Initialize the playlist and UI with the original list
updatePlayList(originalList);
updateUI(currentvideoIndex, originalList);