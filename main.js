!function(){"use strict";function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var t=class{constructor(e,t){!function(e,t,s){t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s}(this,"_hasInvalidInput",(()=>this._inputList.some((e=>!e.validity.valid)))),this._inputSelector=e.inputSelector,this._fieldsetSelector=e.fieldsetSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}disableButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}enableButton(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}resetErrors(){this._inputList.forEach((e=>{this._hideInputError(e)}))}_toggleButtonState(){this._hasInvalidInput()?this.disableButton():this.enableButton()}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}_showInputError(e,t){const s=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),s.textContent=t,s.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}_setEventListeners(){this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}enableValidation(){this._setEventListeners()}};function s(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var n=class{constructor(e){s(this,"_handleClickClose",(e=>{e.target.classList.contains("popup-box")&&this.close()})),s(this,"_handleEscClose",(e=>{"Escape"===e.key&&this.close()})),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup-box__close-btn")}open(){this._popup.classList.add("popup-box_opened"),this._popup.addEventListener("mousedown",this._handleClickClose),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup-box_opened"),this._popup.removeEventListener("mousedown",this._handleClickClose),document.removeEventListener("keydown",this._handleEscClose)}setEventListeners(){this._closeButton.addEventListener("click",(()=>this.close()))}},i=class extends n{constructor(e,t){super(e),this.submitHandler=t,this._form=this._popup.querySelector(".form"),this._inputList=Array.from(this._form.querySelectorAll(".form__input"))}_getInputValues(){const e={};return this._inputList.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this.submitHandler(this._getInputValues()),this.close()}))}close(){super.close(),this._form.reset()}};const r=document.querySelector(".form__input_type_name"),o=document.querySelector(".form__input_type_job"),l=document.querySelector(".profile__edit-btn"),a=document.querySelector(".profile__add-btn"),c=document.querySelector(".form-edit"),u=document.querySelector(".form-add"),_={inputSelector:".form__input",fieldsetSelector:".form__set",submitButtonSelector:".form__save-btn",inactiveButtonClass:"form__save-btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"popup__error_visible"},d=new i(".popup-box_edit",(e=>{m.setUserInfo(e.name,e.job)})),p=new i(".popup-box_add",(e=>{const t=b({name:e.title,link:e["image-link"]});f.prependItem(t)})),h=new class extends n{constructor(e){super(e)}open(e,t){const s=this._popup.querySelector(".popup-box__image"),n=this._popup.querySelector(".popup-box__caption");super.open(),s.alt=e,s.src=t,n.textContent=e}}(".popup-box_image");d.setEventListeners(),p.setEventListeners(),h.setEventListeners();const m=new class{constructor(e){let{userNameSelector:t,userJobSelector:s}=e;this._profileName=document.querySelector(t),this._profileJob=document.querySelector(s)}getUserInfo(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}setUserInfo(e,t){this._profileName.textContent=e,this._profileJob.textContent=t}}({userNameSelector:".profile__name",userJobSelector:".profile__job"});function b(t){return new class{constructor(t,s,n){e(this,"_toggleLike",(()=>this._like.classList.toggle("element__like_active"))),e(this,"_deleteElement",(()=>this._element.remove())),this._title=t.name,this._image=t.link,this._cardSelector=s,this._handleCardClick=n}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}generateCard(){this._element=this._getTemplate(),this._like=this._element.querySelector(".element__like"),this._deleteBtn=this._element.querySelector(".element__delete-icon "),this._setEventListeners();const e=this._element.querySelector(".element__image"),t=this._element.querySelector(".element__paragraph");return e.src=this._image,t.textContent=this._title,e.alt=this._title,this._element}_setEventListeners(){this._like.addEventListener("click",this._toggleLike),this._deleteBtn.addEventListener("click",this._deleteElement),this._element.querySelector(".element__image").addEventListener("click",this._handleCardClick)}}(t,"#template-element",(()=>{h.open(t.name,t.link)})).generateCard()}l.addEventListener("click",(function(){d.open();const e=m.getUserInfo();r.value=e.name,o.value=e.job,v.resetErrors(),v.enableButton()})),a.addEventListener("click",(function(){p.open(),y.disableButton(),y.resetErrors()}));const f=new class{constructor(e,t){let{items:s,renderer:n}=e;this._renderedItems=s,this._renderer=n,this._container=document.querySelector(t)}addItem(e){this._container.append(e)}prependItem(e){this._container.prepend(e)}renderer(){this._renderedItems.forEach((e=>{this._renderer(e)}))}}({items:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:e=>{f.addItem(b(e))}},".elements");f.renderer();const v=new t(_,c);v.enableValidation();const y=new t(_,u);y.enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVdHLE9BQU9ELEdBR3pCekMsWUFBWXlDLEdBQ1ZoSSxLQUFLOEgsV0FBV0ksUUFBUUYsR0FHMUJMLFdBQ0UzSCxLQUFLNEgsZUFBZTdGLFNBQVNvRSxJQUMzQm5HLEtBQUs2SCxVQUFVMUIsUUhtRG5CLENBQ0V1QixNRDlEaUIsQ0FDbkIsQ0FDRXpELEtBQU0sa0JBQ05vQixLQUFNLG9EQUVSLENBQ0VwQixLQUFNLGNBQ05vQixLQUFNLHVEQUVSLENBQ0VwQixLQUFNLGlCQUNOb0IsS0FBTSwwREFFUixDQUNFcEIsS0FBTSxVQUNOb0IsS0FBTSxtREFFUixDQUNFcEIsS0FBTSx3QkFDTm9CLEtBQU0sbURBRVIsQ0FDRXBCLEtBQU0saUJBQ05vQixLQUFNLGlEQ3dDTnNDLFNBQVd4QixJQUNUYixFQUFnQnlDLFFBQVE1QyxFQUFXZ0IsTUFHdkMsYUFFRmIsRUFBZ0JxQyxXQUVoQixNQUFNSixFQUFvQixJQUFJWSxFQUFjeEQsRUFBWUYsR0FDeEQ4QyxFQUFrQjFFLG1CQUVsQixNQUFNMkUsRUFBbUIsSUFBSVcsRUFBY3hELEVBQVlELEdBQ3ZEOEMsRUFBaUIzRSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xyXG4gICAgdGhpcy5fdGl0bGUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9pbWFnZSA9IGRhdGEubGluaztcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKS5jb250ZW50O1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSB0ZW1wbGF0ZUVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudFwiKVxyXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5fbGlrZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19saWtlXCIpO1xyXG4gICAgdGhpcy5fZGVsZXRlQnRuID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2RlbGV0ZS1pY29uIFwiKTtcclxuXHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19pbWFnZVwiKTtcclxuICAgIGNvbnN0IHBhcmFncmFwaEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9fcGFyYWdyYXBoXCIpO1xyXG5cclxuICAgIGltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl9pbWFnZTtcclxuICAgIHBhcmFncmFwaEVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcclxuICAgIGltYWdlRWxlbWVudC5hbHQgPSB0aGlzLl90aXRsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2xpa2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX3RvZ2dsZUxpa2UpO1xyXG4gICAgdGhpcy5fZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9kZWxldGVFbGVtZW50KTtcclxuICAgIHRoaXMuX2VsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9faW1hZ2VcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVDYXJkQ2xpY2spO1xyXG4gIH1cclxuICBfdG9nZ2xlTGlrZSA9ICgpID0+IHRoaXMuX2xpa2UuY2xhc3NMaXN0LnRvZ2dsZShcImVsZW1lbnRfX2xpa2VfYWN0aXZlXCIpO1xyXG4gIF9kZWxldGVFbGVtZW50ID0gKCkgPT4gdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3Iob2JqLCBmb3JtKSB7XHJcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gb2JqLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9maWVsZHNldFNlbGVjdG9yID0gb2JqLmZpZWxkc2V0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IG9iai5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBvYmouaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IG9iai5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gb2JqLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9mb3JtID0gZm9ybTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxyXG4gICAgKTtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaXNhYmxlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlc2V0RXJyb3JzKCl7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpPT57XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbmFibGVCdXR0b24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcclxuIiwiY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuXHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtYm94X19jbG9zZS1idG5cIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwLWJveF9vcGVuZWRcIik7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX2hhbmRsZUNsaWNrQ2xvc2UpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXAtYm94X29wZW5lZFwiKTtcclxuICAgIHRoaXMuX3BvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5faGFuZGxlQ2xpY2tDbG9zZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlQ2xpY2tDbG9zZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXAtYm94XCIpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5cclxuY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBzdWJtaXRIYW5kbGVyKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuc3VibWl0SGFuZGxlciA9IHN1Ym1pdEhhbmRsZXI7XHJcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9faW5wdXRcIikpO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgY29uc3QgaW5wdXRlVmFsdWVzID0ge307XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXRlVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW5wdXRlVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5zdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEZvcm07XHJcbiIsImNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXRfdHlwZV9uYW1lXCIpO1xyXG5jb25zdCBqb2JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXRfdHlwZV9qb2JcIik7XHJcbmNvbnN0IG9wZW5Gb3JtRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idG5cIik7XHJcbmNvbnN0IG9wZW5Gb3JtQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnRuXCIpO1xyXG5jb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1lZGl0XCIpO1xyXG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWFkZFwiKTtcclxuXHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBmb3JtT2JqZWN0ID0ge1xyXG4gIGlucHV0U2VsZWN0b3I6IFwiLmZvcm1fX2lucHV0XCIsXHJcbiAgZmllbGRzZXRTZWxlY3RvcjogXCIuZm9ybV9fc2V0XCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm1fX3NhdmUtYnRuXCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtX19zYXZlLWJ0bl9kaXNhYmxlZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcbiAgZXJyb3JDbGFzczogXCJwb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBuYW1lSW5wdXQsXHJcbiAgam9iSW5wdXQsXHJcbiAgb3BlbkZvcm1FZGl0QnV0dG9uLFxyXG4gIG9wZW5Gb3JtQWRkQnV0dG9uLFxyXG4gIGVkaXRGb3JtLFxyXG4gIGFkZEZvcm0sXHJcbiAgaW5pdGlhbENhcmRzLFxyXG4gIGZvcm1PYmplY3QsXHJcbn07XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIG5hbWVJbnB1dCxcclxuICBqb2JJbnB1dCxcclxuICBvcGVuRm9ybUVkaXRCdXR0b24sXHJcbiAgb3BlbkZvcm1BZGRCdXR0b24sXHJcbiAgZWRpdEZvcm0sXHJcbiAgYWRkRm9ybSxcclxuICBpbml0aWFsQ2FyZHMsXHJcbiAgZm9ybU9iamVjdCxcclxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcblxyXG4vLyBmb3Jtc1xyXG5jb25zdCBlZGl0UG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cC1ib3hfZWRpdFwiLCAoaW5wdXRlVmFsdWVzKSA9PiB7XHJcbiAgdXNlckluZm8uc2V0VXNlckluZm8oaW5wdXRlVmFsdWVzLm5hbWUsIGlucHV0ZVZhbHVlcy5qb2IpO1xyXG59KTtcclxuXHJcbmNvbnN0IGFkZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXAtYm94X2FkZFwiLCAoaW5wdXRlVmFsdWVzKSA9PiB7XHJcbiAgY29uc3QgbmV3Q2FyZCA9IHtcclxuICAgIG5hbWU6IGlucHV0ZVZhbHVlcy50aXRsZSxcclxuICAgIGxpbms6IGlucHV0ZVZhbHVlc1tcImltYWdlLWxpbmtcIl0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKG5ld0NhcmQpO1xyXG4gIGRlZmF1bHRDYXJkTGlzdC5wcmVwZW5kSXRlbShjYXJkRWxlbWVudCk7XHJcbn0pO1xyXG5cclxuY29uc3QgaW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIi5wb3B1cC1ib3hfaW1hZ2VcIik7XHJcbmVkaXRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5hZGRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5pbWFnZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgdXNlck5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fbmFtZVwiLFxyXG4gIHVzZXJKb2JTZWxlY3RvcjogXCIucHJvZmlsZV9fam9iXCIsXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChpdGVtKSB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGl0ZW0sIFwiI3RlbXBsYXRlLWVsZW1lbnRcIiwgKCkgPT4ge1xyXG4gICAgaW1hZ2VQb3B1cC5vcGVuKGl0ZW0ubmFtZSwgaXRlbS5saW5rKTtcclxuICB9KTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcblxyXG4vLyBsaXN0ZXJuZXJzXHJcbm9wZW5Gb3JtRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGVkaXRQb3B1cC5vcGVuKCk7XHJcbiAgY29uc3QgemFpbiA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgbmFtZUlucHV0LnZhbHVlID0gemFpbi5uYW1lO1xyXG4gIGpvYklucHV0LnZhbHVlID0gemFpbi5qb2I7XHJcbiAgZWRpdEZvcm1WYWxpZGF0b3IucmVzZXRFcnJvcnMoKTtcclxuICBlZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVCdXR0b24oKTtcclxufSk7XHJcblxyXG5vcGVuRm9ybUFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGFkZFBvcHVwLm9wZW4oKTtcclxuICBhZGRGb3JtVmFsaWRhdG9yLmRpc2FibGVCdXR0b24oKTtcclxuICBhZGRGb3JtVmFsaWRhdG9yLnJlc2V0RXJyb3JzKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgZGVmYXVsdENhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcclxuICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xyXG4gICAgICBkZWZhdWx0Q2FyZExpc3QuYWRkSXRlbShjcmVhdGVDYXJkKGl0ZW0pKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBcIi5lbGVtZW50c1wiXHJcbik7XHJcbmRlZmF1bHRDYXJkTGlzdC5yZW5kZXJlcigpO1xyXG5cclxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtT2JqZWN0LCBlZGl0Rm9ybSk7XHJcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtT2JqZWN0LCBhZGRGb3JtKTtcclxuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5cclxuY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoY2FyZFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihjYXJkU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgb3BlbihuYW1lLCBsaW5rKSB7XHJcbiAgICBjb25zdCBtb2RhbEltZyA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtYm94X19pbWFnZVwiKTtcclxuICAgIGNvbnN0IGNhcHRpb25UZXh0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1ib3hfX2NhcHRpb25cIik7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgICBtb2RhbEltZy5hbHQgPSBuYW1lO1xyXG4gICAgbW9kYWxJbWcuc3JjID0gbGluaztcclxuICAgIGNhcHRpb25UZXh0LnRleHRDb250ZW50ID0gbmFtZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEltYWdlO1xyXG4iLCJjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyB1c2VyTmFtZVNlbGVjdG9yLCB1c2VySm9iU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJOYW1lU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckpvYlNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIGpvYjogdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyhuYW1lLCBqb2IpIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQgPSBqb2I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbztcclxuIiwiY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByZXBlbmRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyZXIoKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsIm9iaiIsImZvcm0iLCJ0aGlzIiwiX2lucHV0TGlzdCIsInNvbWUiLCJpbnB1dEVsZW1lbnQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX2ZpZWxkc2V0U2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm0iLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3N1Ym1pdEJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNhYmxlQnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzYWJsZWQiLCJlbmFibGVCdXR0b24iLCJyZW1vdmUiLCJyZXNldEVycm9ycyIsImZvckVhY2giLCJpbnB1dCIsIl9oaWRlSW5wdXRFcnJvciIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsInRleHRDb250ZW50IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuYWJsZVZhbGlkYXRpb24iLCJwb3B1cFNlbGVjdG9yIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwiY2xvc2UiLCJrZXkiLCJfcG9wdXAiLCJkb2N1bWVudCIsIl9jbG9zZUJ1dHRvbiIsIm9wZW4iLCJfaGFuZGxlQ2xpY2tDbG9zZSIsIl9oYW5kbGVFc2NDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRFdmVudExpc3RlbmVycyIsIlBvcHVwIiwic3VibWl0SGFuZGxlciIsInN1cGVyIiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRlVmFsdWVzIiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsIm5hbWVJbnB1dCIsImpvYklucHV0Iiwib3BlbkZvcm1FZGl0QnV0dG9uIiwib3BlbkZvcm1BZGRCdXR0b24iLCJlZGl0Rm9ybSIsImFkZEZvcm0iLCJmb3JtT2JqZWN0IiwiZWRpdFBvcHVwIiwiUG9wdXBXaXRoRm9ybSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJqb2IiLCJhZGRQb3B1cCIsImNhcmRFbGVtZW50IiwiY3JlYXRlQ2FyZCIsInRpdGxlIiwibGluayIsImRlZmF1bHRDYXJkTGlzdCIsInByZXBlbmRJdGVtIiwiaW1hZ2VQb3B1cCIsImNhcmRTZWxlY3RvciIsIm1vZGFsSW1nIiwiY2FwdGlvblRleHQiLCJhbHQiLCJzcmMiLCJ1c2VyTmFtZVNlbGVjdG9yIiwidXNlckpvYlNlbGVjdG9yIiwiX3Byb2ZpbGVOYW1lIiwiX3Byb2ZpbGVKb2IiLCJnZXRVc2VySW5mbyIsIml0ZW0iLCJkYXRhIiwiaGFuZGxlQ2FyZENsaWNrIiwiX2xpa2UiLCJ0b2dnbGUiLCJfZWxlbWVudCIsIl90aXRsZSIsIl9pbWFnZSIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2dldFRlbXBsYXRlIiwiY29udGVudCIsImNsb25lTm9kZSIsImdlbmVyYXRlQ2FyZCIsIl9kZWxldGVCdG4iLCJpbWFnZUVsZW1lbnQiLCJwYXJhZ3JhcGhFbGVtZW50IiwiX3RvZ2dsZUxpa2UiLCJfZGVsZXRlRWxlbWVudCIsInphaW4iLCJlZGl0Rm9ybVZhbGlkYXRvciIsImFkZEZvcm1WYWxpZGF0b3IiLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfcmVuZGVyZWRJdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJhZGRJdGVtIiwiZWxlbWVudCIsImFwcGVuZCIsInByZXBlbmQiLCJGb3JtVmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==