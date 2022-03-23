fetch("video_sources.json")
    .then(response => response.json())
	.then(data => {
		const videoTable = document.querySelector("#video-table");
		const videos = document.createElement("div");
		videos.className = "videos";
		videoTable.appendChild(videos);

		const videoWatch = document.querySelector("#video-watch");
		const videoPlay = document.querySelector("#video-play");
		const videoPlayTitle = document.querySelector("#video-title");

		const leftArrow = document.querySelector("#left-arrow");
		const rightArrow = document.querySelector("#right-arrow");

		const backToGallery = document.querySelector("#BTG-button");

		const videoSearch = new Map();

		for (let obj of data) {
			var video = document.createElement("figure");
			video.className = "fig";

			var videoImage = document.createElement("img");
			videoImage.className ="img";
			videoImage.src = obj.thumbnail;
			videoImage.alt = obj.alt;

			var videoTitle = document.createElement("figcaption");
			videoTitle.className = "fig-caption";
			videoTitle.innerHTML = obj.title;

			video.appendChild(videoImage);
			video.appendChild(videoTitle);

			videoSearch.set(obj.id, obj);

			video.onclick = function() {
				id = obj.id;

				videoPlay.src = obj.source;
				videoPlay.alt = obj.alt;
				videoPlayTitle.innerHTML = obj.title;
				
				videoTable.style.display = "none";
				videoWatch.style.display = "flex";
			}

			videos.appendChild(video);
		}

		videoPlay.onended = function() {
			id++;
            if (id > data.length) {
                id = 1;
            }
			videoPlay.pause();
            videoPlay.src = videoSearch.get(id).source;
            videoPlay.alt = videoSearch.get(id).alt;
			videoPlayTitle.innerHTML = videoSearch.get(id).title;
			videoPlay.load();
			videoPlay.play();
		}

		leftArrow.onclick = function() {
			id--;
            if (id < 1) {
                id = data.length;
            }
            videoPlay.src = videoSearch.get(id).source;
            videoPlay.alt = videoSearch.get(id).alt;
			videoPlayTitle.innerHTML = videoSearch.get(id).title;
		}
		rightArrow.onclick = function() {
			id++;
            if (id > data.length) {
                id = 1;
            }
            videoPlay.src = videoSearch.get(id).source;
            videoPlay.alt = videoSearch.get(id).alt;
			videoPlayTitle.innerHTML = videoSearch.get(id).title;
		}

		backToGallery.onclick = function() {
			videoPlay.src = "";
			videoPlay.alt = "";
			videoPlayTitle.innerHTML = "";
				
			videoTable.style.display = "block";
			videoWatch.style.display = "none";
		}

		const rozeoHeader = document.querySelector(".header");
		const goingHome = document.querySelectorAll(".menu-item")[0]; // This is pointing to the Home button in the navbar.

		rozeoHeader.onclick = function() {
			videoPlay.src = "";
			videoPlay.alt = "";
			videoPlayTitle.innerHTML = "";
				
			videoTable.style.display = "block";
			videoWatch.style.display = "none";
		}
		goingHome.onclick = function() {
			videoPlay.src = "";
			videoPlay.alt = "";
			videoPlayTitle.innerHTML = "";
				
			videoTable.style.display = "block";
			videoWatch.style.display = "none";
		}
	});