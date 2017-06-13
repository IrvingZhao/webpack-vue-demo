let registerEvent = window.addEventListener || window.attachEvent;
let type = document.onmousewheel === undefined ? "DOMMouseScroll" : "mousewheel";
function compactEvent(event) {
    event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
    if (event.srcElement && !event.target) {
        event.target = event.srcElement;
    }
    if (!event.preventDefault && event.returnValue !== undefined) {
        event.preventDefault = function () {
            event.returnValue = false;
        };
    }
    return event;
}
function eventCallback(callback) {
    return function (e) {
        let event = compactEvent(e || window.event);
        if (this.scrollTop > 0 && (this.offsetHeight + this.scrollTop < this.scrollHeight)) {
            event.stopPropagation();
        }
        if (event.delta > 0) {
            // this.scroll
            this.scrollTop = this.scrollTop - 20;
        } else if (event.delta < 0) {
            this.scrollTop = this.scrollTop + 20;
        }
        if (callback) {
            callback.call(this, compactEvent(event));
        }
    }
}
registerEvent("load",()=>{
    if(document){
        let scrollEls=document.getElementsByClassName("customScroll");
        for(let i=0;i<scrollEls.length;i++){
            registerEvent.call(scrollEls[i],type,eventCallback());
        }
    }
});
export default {
    addMouseWheelEvent(el, callback, useCapture){
        registerEvent.call(el, type, eventCallback(callback), useCapture);
    }
};