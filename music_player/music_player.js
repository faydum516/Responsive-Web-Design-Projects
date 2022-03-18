fetch("songlist.json")
    .then(response => response.json())
    .then(data => {
        const body = document.querySelectorAll("body")[0];

        const songCover =  document.querySelector('#songcover');
        const music = document.querySelector('#audio-source');
        const musicPlay = document.querySelector('#musicplay');

        const leftarrow = document.querySelector('#left-arrow');
        const rightarrow = document.querySelector('#right-arrow');

        const songTitle = document.querySelector('#song-name');
        const musician = document.querySelector('#artist-name');

        const songSection = document.querySelector('#songsection');
        const songList = document.createElement('ul');
        songList.className = "songlist";
        songSection.appendChild(songList);

        const backToMenu = document.querySelector('#backToMenu');
        const backToPlay = document.querySelector('#backToPlay');

        const musicSearch = new Map();
        var id, index, currentSong;

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

            songItem.onclick = function() {
                id = obj.id;
                index = id - 1;
                songCover.src = obj.cover;
                songCover.alt = obj.alt;
                music.src = obj.source;
                songTitle.innerHTML = obj.song;
                musician.innerHTML = obj.artist;
                musicPlay.style.display = "flex";
                backToMenu.style.display = "inline-block";
                songSection.style.display = "none";
                backToPlay.style.display = "none";
                
                if (currentSong !== undefined) {
                    currentSong.style.setProperty('background-color', 'initial');
                }
                currentSong = document.querySelectorAll(".song")[index];
                currentSong.style.backgroundColor = "hsl(238, 23%, 15%)";

                body.style.height = "100vh";
            }

            musicSearch.set(obj.id, obj);
            songList.appendChild(songItem);
        }

        music.onended = function() {
            id++;
            if (id > data.length) {
                id = 1;
            }
            index = id - 1;
            music.pause();
            songCover.src = musicSearch.get(id).cover;
            songCover.alt = musicSearch.get(id).alt;
            music.src = musicSearch.get(id).source;
            songTitle.innerHTML = musicSearch.get(id).song;
            musician.innerHTML = musicSearch.get(id).artist;
            music.load();
            music.play();
            
            if (currentSong !== undefined) {
                currentSong.style.setProperty('background-color', 'initial'); // The setProperty() method sets a new or modifies an existing CSS property in a CSS declaration block. Setting a property to ‘initial’ resets the property to its initial value, removing any effect of the property.
            }
            currentSong = document.querySelectorAll(".song")[index];
            currentSong.style.backgroundColor = "hsl(238, 23%, 15%)";
        }

        leftarrow.onclick = function() {
            id--;
            if (id < 1) {
                id = data.length;
            }
            index = id - 1;
            songCover.src = musicSearch.get(id).cover;
            songCover.alt = musicSearch.get(id).alt;
            music.src = musicSearch.get(id).source;
            songTitle.innerHTML = musicSearch.get(id).song;
            musician.innerHTML = musicSearch.get(id).artist;

            if (currentSong !== undefined) {
                currentSong.style.setProperty('background-color', 'initial'); // The setProperty() method sets a new or modifies an existing CSS property in a CSS declaration block. Setting a property to ‘initial’ resets the property to its initial value, removing any effect of the property.
            }
            currentSong = document.querySelectorAll(".song")[index];
            currentSong.style.backgroundColor = "hsl(238, 23%, 15%)";
        }

        rightarrow.onclick = function() {
            id++;
            if (id > data.length) {
                id = 1;
            }
            index = id - 1;
            songCover.src = musicSearch.get(id).cover;
            songCover.alt = musicSearch.get(id).alt;
            music.src = musicSearch.get(id).source;
            songTitle.innerHTML = musicSearch.get(id).song;
            musician.innerHTML = musicSearch.get(id).artist;
            
            if (currentSong !== undefined) {
                currentSong.style.setProperty('background-color', 'initial'); // The setProperty() method sets a new or modifies an existing CSS property in a CSS declaration block. Setting a property to ‘initial’ resets the property to its initial value, removing any effect of the property.
            }
            currentSong = document.querySelectorAll(".song")[index];
            currentSong.style.backgroundColor = "hsl(238, 23%, 15%)";
        }

        backToMenu.onclick = function() {
            songSection.style.display = "flex";
            musicPlay.style.display = "none";
            backToMenu.style.display = "none"
            backToPlay.style.display = "inline-block";
            body.style.height = "100%";
        }

        backToPlay.onclick = function() {
            songSection.style.display = "none";
            musicPlay.style.display = "flex";
            backToMenu.style.display = "inline-block";
            backToPlay.style.display = "none";
            body.style.height = "100vh";
        }
    });