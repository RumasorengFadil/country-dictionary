import View from "./View";

class bookmarksView extends View{
    parentEL;
    error;
    succes;
    message;
    _bookmarkBtn = document.querySelector(".bookmarks__btn");


    addBookmark(handler){
        this._bookmarkBtn.addEventListener("click", function(){
            handler();
        })
    }
    genertateMarkup(){
        
    }
}

export default new bookmarksView();