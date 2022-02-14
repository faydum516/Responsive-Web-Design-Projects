var videos = ["https://www.dropbox.com/s/lczw607pqqgovtk/Ip%20Man%20Naruto.mp4?dl=0&raw=1", 
			  "https://www.dropbox.com/s/33ny26wfp9k0o67/Numa%20Numa.mp4?dl=0&raw=1", 
			  "https://www.dropbox.com/s/0r66k2eazk8hojo/Can%27t%20touch%20this.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/3lrv51l0oo6sni8/Guy%20uses%20a%20fake%20gun%20but.....mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/4gwfm6dulwylnah/Israel%20Adesanya%202021%2https://www.dropbox.com/s/moc2d1xi1o60g8z/spongebob%20shippuden%20japanese%20dub.mp4?dl=00Anime%20Opening%20%E1%B4%B4%E1%B4%B0.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/h01kqgq05v6exst/Is%20this%20JoJo%27s%20Bizarre%20Adventure.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/8kmn89puahb84bg/Phil%20dancing%20on%20the%20subway%21.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/t1t1q3j9gn7u3qi/Kung%20Pow%20-%20Betty%20vs.%20Master%20Tang%20-%20A%20Fair%20Use%20Critique%21.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/jgnol5igxxobqnn/Spongebob%21.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/1fiyaepst5co1wf/Yu-Gi-Oh%21%20Legacy%20of%20the%20Duelist%20_%20EPIC%20DUEL%21%21%21.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/wecnlcd09c88now/The%20Nature%20Boy%20one%20limosine%20ridin%20jet%20flyin%20son%20of%20a%20gun%20WHOO%20on%2070389148.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/moc2d1xi1o60g8z/spongebob%20shippuden%20japanese%20dub.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/z66uedh978nihw9/Chris%20Farley%2C%20El%20Nino.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/jfyyvkveqagjphk/Israel%20Adesanya%20%27The%20Last%20Stylebender%27%20Anime%20Opening%202%20%E1%B4%B4%E1%B4%B0.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/vm2zcaeg3cuokyr/ITS%20A%20ROCK%28spongebob%29.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/plkv9hhsbga3jbp/Broke%20the%20punching%20machine.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/kof4lbddxim224w/Star%20Wars%20Kid.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/blrninm0h90dobh/FDR%20Nothing%20to%20Fear%20But%20Fear%20Itself%201933%20Inaugural%20Address.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/yn3x6wtnj8n4fuj/%27TEN%20TEN%20TEN%27%20Japan.mp4?dl=0&raw=1",
			  "https://www.dropbox.com/s/e8n5u3djz92lxfd/The%20Carlton%20Dance.mp4?dl=0&raw=1"];

			var index;
			
			function play(source, id) {
				document.getElementById('table-header').style.display = 'none';
				document.getElementById('video-watch').innerHTML = '<video id="video-play" class="video" controls autoplay><source src="' + source + '" type="video/mp4"></video><aside class="buttons"><button onclick="prev()">Prev</button><button onclick="next()">Next</button></aside>';
				document.getElementById('video-watch').style.display = 'flex';
				document.getElementById('video-watch').style.justifyContent = 'center';
				document.getElementById('video-watch').style.alignItems = 'center';
				document.getElementById('video-watch').style.flexDirection = 'column';
				index = Number(id);
			}

			function prev() {
				index--;
				if (index < 0) {
					index = videos.length - 1;
				}
				document.getElementById("video-play").src = videos[index];
			}

			function next() {
				index++;
				if (index > videos.length - 1) {
					index = 0;
				}
				document.getElementById("video-play").src = videos[index];
			}

			function exit() {
				document.getElementById('video-watch').innerHTML = '<video id="video-play" class="video" controls autoplay><source src="" type="video/mp4"></video><aside class="buttons"><button onclick="prev()">Prev</button><button onclick="next()">Next</button></aside>';
				document.getElementById('video-watch').style.display = 'none';
				document.getElementById('table-header').style.display = 'table-row';
			}