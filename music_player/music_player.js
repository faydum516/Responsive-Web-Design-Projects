function play(source, image, alt) {
    document.querySelector('#songcover').src = image;
    document.querySelector('#songcover').alt = alt;
    document.querySelector('#audio-source').src = source;
    document.querySelector('#musicplay').style.display = 'flex';
}

fetch("songlist.json")
    .then(response => response.json())
    .then(data => {
        let songSection = document.querySelector('#songsection');
        let songList = document.createElement('ul');
        songList.className = "songlist";
        songSection.appendChild(songList);


        for (let obj of data) {
            var songItem = document.createElement('li');
            songItem.className = "song";

            var songInfo = document.createElement('p');
            var songName = document.createTextNode(`Song: ${obj.song}`);
            songInfo.appendChild(songName);

            var artistInfo = document.createElement('p');
            var artistName = document.createTextNode(`Artist: ${obj.artist}`);
            artistInfo.appendChild(artistName);

            songItem.appendChild(songInfo);
            songItem.appendChild(artistInfo);

            songItem.setAttribute('onclick', `play("${obj.source}", "${obj.cover}", "${obj.alt}")`); // The setAttribute() method sets a new value to an attribute. 
            songList.appendChild(songItem);
        }
    });