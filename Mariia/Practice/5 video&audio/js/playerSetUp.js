/**
 * Created by Maria on 22.03.2015.
 */

/* controls */

var supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('video');
    var videoControls = $('#video-controls');
    var progressholder = $('#progress-holder');
    var playpause = $("#playpause");
    var stop = $('#stop');
    var mute = $('#mute');
    var volinc = $('#volinc');
    var voldec = $('#voldec');

    var progress = document.getElementById('progress');
    var progressBar = $('#progress-bar');

    var fullscreen = document.getElementById('fs');

    video.controls = false;

// Display the user defined video controls
    videoControls.show();
    progressholder.show();

    $(videoContainer).on("click", function(){
        playpause.trigger("click");
    });


    playpause.on('click', function(e) {
        e.stopPropagation();
        if (video.paused || video.ended) {
            video.play();
            playpause.removeClass("entypo-play").addClass("entypo-pause").data("text", "pause");
        }
        else {video.pause();
            playpause.removeClass("entypo-pause").addClass("entypo-play").data("text", "play");
        }
    });

    stop.on('click', function(e) {
        e.stopPropagation();
        video.pause();
        video.currentTime = 0;
        progress.value = 0;
        playpause.removeClass("entypo-pause").addClass("entypo-play").data("text", "play");
    });

    mute.on('click', function(e) {
        e.stopPropagation();
        if (video.muted) {
            mute.removeClass("entypo-mute").addClass("entypo-sound").data("text", "sound");
        } else {
            mute.removeClass("entypo-sound").addClass("entypo-mute").data("text", "mute");
        }
        video.muted = !video.muted;
    });

    volinc.on('click', function(e) {
        e.stopPropagation();
        alterVolume('+', this);
    });

    voldec.on('click', function(e) {
        e.stopPropagation();
        alterVolume('-', this);
    });

    var alterVolume = function(dir, target) {
        var currentVolume = Math.floor(video.volume * 10) / 10;
        $(target).text(currentVolume);
        if (dir === '+') {
            if (currentVolume < 1) {
                video.volume += 0.1;
            }
        }
        else if (dir === '-') {
            if (currentVolume > 0) {
                video.volume -= 0.1;
            }
        }
        setTimeout(function(){ $(target).text("");}, 1000);
    };

    video.addEventListener('loadedmetadata', function() {
        !$(progress).attr('max', video.duration);
    });

    video.addEventListener('timeupdate', function() {
        if (!$(progress).attr('max')) {
            $(progress).attr('max', video.duration);
        }
        progress.value = video.currentTime;
        progressBar.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
        if (video.duration.toFixed(0)-1 == video.currentTime.toFixed(0)) {
            video.pause();
            video.currentTime = 0;
            progress.value = 0;
            playpause.removeClass("entypo-pause").addClass("entypo-play").data("text", "play");
            video.play();
        }
    });

    var fullScreenEnabled = !!(document.fullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled ||
    document.webkitSupportsFullscreen ||
    document.webkitFullscreenEnabled ||
    document.createElement('video').webkitRequestFullScreen);

    if (!fullScreenEnabled) {
        fullscreen.style.display = 'none';
    }


    fs.addEventListener('click', function(e) {
        e.stopPropagation();
        handleFullscreen();
    });

    var handleFullscreen = function() {
        if (isFullScreen()) {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
            setFullscreenData(false);
        }
        else {
            if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
            else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
            else if (videoContainer.webkitRequestFullScreen) video.webkitRequestFullScreen();
            else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
            setFullscreenData(true);
        }
    };

    var isFullScreen = function() {
        return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    };

    var setFullscreenData = function(state) {
        videoContainer.setAttribute('data-fullscreen', !!state);
    };

    document.addEventListener('fullscreenchange', function(e) {
        setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
    });
    document.addEventListener('webkitfullscreenchange', function() {
        setFullscreenData(!!document.webkitIsFullScreen);
    });
    document.addEventListener('mozfullscreenchange', function() {
        setFullscreenData(!!document.mozFullScreen);
    });
    document.addEventListener('msfullscreenchange', function() {
        setFullscreenData(!!document.msFullscreenElement);
    });

/* subtitles */

    var captions = document.getElementById('captions');
    for (var i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = 'hidden';
    }
    var captionMenuButtons = [];
    var createMenuItem = function(id, lang, label) {
        var listItem = document.createElement('li');
        var button = listItem.appendChild(document.createElement('button'));
        button.setAttribute('id', id);
        button.className = 'captions-button btn';
        if (lang.length > 0) button.setAttribute('lang', lang);
        button.value = label;
        button.setAttribute('data-state', 'inactive');
        button.appendChild(document.createTextNode(label));
        button.addEventListener('click', function(e) {
            captionMenuButtons.map(function(v, i, a) {
                captionMenuButtons[i].setAttribute('data-state', 'inactive');
            });
            var lang = this.getAttribute('lang');
            for (var i = 0; i < video.textTracks.length; i++) {
                if (video.textTracks[i].language == lang) {
                    video.textTracks[i].mode = 'showing';
                    this.setAttribute('data-state', 'active');
                }
                else {
                    video.textTracks[i].mode = 'hidden';
                }
            }
            $(captionsMenu).hide();
        });
        captionMenuButtons.push(button);
        return listItem;
    };

    if (video.textTracks) {
        var df = document.createDocumentFragment();
        var captionsMenu = df.appendChild(document.createElement('ul'));
        captionsMenu.className = 'captions-menu';
        captionsMenu.appendChild(
            createMenuItem('captions-off', '', 'Off'));
        for (var i = 0; i < video.textTracks.length; i++) {
            captionsMenu.appendChild(createMenuItem('captions-' + video.textTracks[i].language, video.textTracks[i].language, video.textTracks[i].label));
        }
        captions.appendChild(captionsMenu);
    }


    $(captions).on('click', function(e) {
        e.stopPropagation();
        if (captionsMenu) {
            $(captionsMenu).css("display") == 'block' ? $(captionsMenu).hide()  : $(captionsMenu).show();
        }
    });


}

