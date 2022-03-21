fetch("photo_images.json")
    .then(response => response.json())
    .then(data => {
        const body = document.body;

        const photoTable = document.querySelector("#photo-table"); // The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
        const photos = document.createElement("div");
        photos.className = "photos";
        photoTable.appendChild(photos);

        const fullImageScreen = document.createElement("div");
        fullImageScreen.className = "full-image-screen";

        body.insertBefore(fullImageScreen, body.firstChild);

        const imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
        
        const fullImage = document.createElement("img");
        fullImage.className = "full-image";
        fullImage.src = "";
        fullImage.alt = "";

        const close = document.createElement("div");
        close.className = "ClosingX";
        close.innerHTML = "X";

        imgContainer.appendChild(fullImage);
        imgContainer.appendChild(close);

        const leftArrow = document.createElement("i");
        const rightArrow = document.createElement("i");
        leftArrow.className = "arrow left";
        rightArrow.className = "arrow right";

        fullImageScreen.appendChild(leftArrow);
        fullImageScreen.appendChild(imgContainer);
        fullImageScreen.appendChild(rightArrow);

        const imgSearch = new Map();
        var id, index;

        for(let obj of data) {
            var figure = document.createElement("figure");
            figure.className = "figure";

            var image = document.createElement("img");
            image.className = "img";

            image.src = obj.img;
            image.alt = obj.alt;

            figure.appendChild(image);

            figure.onclick = function() {
                id = obj.id;
                index = id - 1;
                fullImage.src = imgSearch.get(id).img;
                fullImage.alt = imgSearch.get(id).alt;
                fullImageScreen.style.visibility = "visible";

                window.addEventListener("keydown", arrowPress); // The arrowPress function consists only of pressing the left and right keys.
            }

            imgSearch.set(obj.id, obj);

            photos.appendChild(figure);
        }

        leftArrow.onclick = function() {
            id--;
            if (id < 1) {
                id = data.length;
            }
            index = id - 1;
            fullImage.src = imgSearch.get(id).img;
            fullImage.alt = imgSearch.get(id).alt;
        }

        rightArrow.onclick = function() {
            id++;
            if (id > data.length) {
                id = 1;
            }
            index = id - 1;
            fullImage.src = imgSearch.get(id).img;
            fullImage.alt = imgSearch.get(id).alt;
        }

        close.onclick = function() {
            window.removeEventListener("keydown", arrowPress);
            fullImageScreen.style.visibility = "hidden";
            fullImage.src = "";
            fullImage.alt = "";
        }

        function arrowPress(event) {
            if (event.key === "ArrowLeft") {
                id--;
                if (id < 1) {
                    id = data.length;
                }
                index = id - 1;
                fullImage.src = imgSearch.get(id).img;
                fullImage.alt = imgSearch.get(id).alt;
            }
            if (event.key === "ArrowRight") {
                id++;
                if (id > data.length) {
                    id = 1;
                }
                index = id - 1;
                fullImage.src = imgSearch.get(id).img;
                fullImage.alt = imgSearch.get(id).alt;    
            }
            if (event.key === "Escape") {
                window.removeEventListener("keydown", arrowPress);
                fullImageScreen.style.visibility = "hidden";
                fullImage.src = "";
                fullImage.alt = "";
            }
        }
    });