$(function(){
		//alert("hello js(＾－＾)V");
		//创建MP3音乐播放器
		var audioDom = document.createElement("audio");
		//设置播放器地址
		audioDom.src="mp3/张杰 - 年轻的战场.mp3";
		//设置成自动播放
		//audioDom.autoplay="autoplay";
		
		var html = "";
		//获取歌词
		var lrc=$("#lrc").val();
		//alert(lrc);

		//把时间和歌词分离开
		var lrcArr = lrc.split("[");
		for(var i =0; i<lrcArr.length; i++){
			console.log("====>"+lrcArr[i]);
			//第二次分割时间和歌词分离
			var sarr = lrcArr[i].split("]");
			console.log("---------"+sarr);

			//拿到时间
			var timer = sarr[0].split(".");
			//取到歌词
			var message = sarr[1];
			//取到分钟和秒
			var stime = timer[0].split(":");
			//将分钟和秒都换算成秒
			var ms = stime[0]*60+stime[1]*1;
			//alert(ms);
			if(message){
				html += "<div class='tztime' id='"+ms+"'>"+message+"</div>"
			}
		}

		//把歌词放入到div中
		$("#lrcBox").html(html); 
	    //当音乐播放时，会调用timeupdate
	    audioDom.addEventListener("timeupdate",function(){
			var timer = this.currentTime; //获取当前播放的时间 
			//var m = timer/60;
			//console.log("-------------"+m);

			//通过时间来驱动歌词
			var st = parseInt(timer);  //字符串变为整型
			for(var i = 0; i<st; i++){
				$("#"+i).addClass("sel");
			}
		});


		//定义全局变量
	    var state = 0;
		//播放
		$(".b_play").click(function(){
			
			if(state == 0){
				audioDom.play();
				state = 1;
				$(".b_play").css("background-position","-290px -84px");
			}else{
				audioDom.pause();
				$(".b_play").css("background-position","-105px 0px");
				state = 0;
			}
			
			// audioDom.paused();
		});

	});