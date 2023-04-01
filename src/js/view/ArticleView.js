import View from "./View";
class ArticleView extends View{
    _parentEl = document.querySelector(".article");
    _video = document.querySelector(".article__video");
    
    addHandlerPlayAndPauseVideo(){
        this._video.addEventListener("click", this.playAndPauseVideo.bind(this));
    }
    playAndPauseVideo(){
        this._video.paused ? this._video.play() : this._video.pause();
    }
}
export default new ArticleView();   