!function(e){function t(t,n,i,o){var a={data:o||0===o||o===!1?o:n?n.data:{},_wrap:n?n._wrap:null,tmpl:null,parent:n||null,nodes:[],calls:p,nest:u,wrap:d,html:c,update:h};return t&&e.extend(a,t,{nodes:[],parent:n}),i&&(a.tmpl=i,a._ctnt=a._ctnt||a.tmpl(e,a),a.key=++b,(x.length?g:v)[b]=a),a}function n(t,o,a){var s,r=a?e.map(a,function(e){return"string"==typeof e?t.key?e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+_+'="'+t.key+'" $2'):e:n(e,t,e._ctnt)}):t;return o?r:(r=r.join(""),r.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(t,n,o,a){s=e(o).get(),l(s),n&&(s=i(n).concat(s)),a&&(s=s.concat(i(a)))}),s?s:i(r))}function i(t){var n=document.createElement("div");return n.innerHTML=t,e.makeArray(n.childNodes)}function o(t){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+e.trim(t).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(t,n,i,o,a,r,l){var p,u,d,c=e.tmpl.tag[i];if(!c)throw"Unknown template tag: "+i;return p=c._default||[],r&&!/\w$/.test(a)&&(a+=r,r=""),a?(a=s(a),l=l?","+s(l)+")":r?")":"",u=r?a.indexOf(".")>-1?a+s(r):"("+a+").call($item"+l:a,d=r?u:"(typeof("+a+")==='function'?("+a+").call($item):("+a+"))"):d=u=p.$1||"null",o=s(o),"');"+c[n?"close":"open"].split("$notnull_1").join(a?"typeof("+a+")!=='undefined' && ("+a+")!=null":"true").split("$1a").join(d).split("$1").join(u).split("$2").join(o||p.$2||"")+"__.push('"})+"');}return __;")}function a(t,i){t._wrap=n(t,!0,e.isArray(i)?i:[q.test(i)?i:e(i).html()]).join("")}function s(e){return e?e.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function r(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function l(n){function i(n){function i(e){e+=p,s=u[e]=u[e]||t(s,v[s.parent.key+p]||s.parent)}var o,a,s,r,l=n;if(r=n.getAttribute(_)){for(;l.parentNode&&1===(l=l.parentNode).nodeType&&!(o=l.getAttribute(_)););o!==r&&(l=l.parentNode?11===l.nodeType?0:l.getAttribute(_)||0:0,(s=v[r])||(s=g[r],s=t(s,v[l]||g[l]),s.key=++b,v[b]=s),C&&i(r)),n.removeAttribute(_)}else C&&(s=e.data(n,"tmplItem"))&&(i(s.key),v[s.key]=s,l=e.data(n.parentNode,"tmplItem"),l=l?l.key:0);if(s){for(a=s;a&&a.key!=l;)a.nodes.push(n),a=a.parent;delete s._ctnt,delete s._wrap,e.data(n,"tmplItem",s)}}var o,a,s,r,l,p="_"+C,u={};for(s=0,r=n.length;s<r;s++)if(1===(o=n[s]).nodeType){for(a=o.getElementsByTagName("*"),l=a.length-1;l>=0;l--)i(a[l]);i(o)}}function p(e,t,n,i){return e?void x.push({_:e,tmpl:t,item:this,data:n,options:i}):x.pop()}function u(t,n,i){return e.tmpl(e.template(t),n,i,this)}function d(t,n){var i=t.options||{};return i.wrapped=n,e.tmpl(e.template(t.tmpl),t.data,i,t.item)}function c(t,n){var i=this._wrap;return e.map(e(e.isArray(i)?i.join(""):i).filter(t||"*"),function(e){return n?e.innerText||e.textContent:e.outerHTML||r(e)})}function h(){var t=this.nodes;e.tmpl(null,null,null,this).insertBefore(t[0]),e(t).remove()}var f,m=e.fn.domManip,_="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,v={},g={},y={key:0,data:{}},b=0,C=0,x=[];e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){e.fn[t]=function(i){var o,a,s,r,l=[],p=e(i),u=1===this.length&&this[0].parentNode;if(f=v||{},u&&11===u.nodeType&&1===u.childNodes.length&&1===p.length)p[n](this[0]),l=this;else{for(a=0,s=p.length;a<s;a++)C=a,o=(a>0?this.clone(!0):this).get(),e(p[a])[n](o),l=l.concat(o);C=0,l=this.pushStack(l,t,p.selector)}return r=f,f=null,e.tmpl.complete(r),l}}),e.fn.extend({tmpl:function(t,n,i){return e.tmpl(this[0],t,n,i)},tmplItem:function(){return e.tmplItem(this[0])},template:function(t){return e.template(t,this[0])},domManip:function(t,n,i){if(t[0]&&e.isArray(t[0])){for(var o,a=e.makeArray(arguments),s=t[0],r=s.length,l=0;l<r&&!(o=e.data(s[l++],"tmplItem")););o&&C&&(a[2]=function(t){e.tmpl.afterManip(this,t,i)}),m.apply(this,a)}else m.apply(this,arguments);return C=0,!f&&e.tmpl.complete(v),this}}),e.extend({tmpl:function(i,o,s,r){var l,p=!r;if(p)r=y,i=e.template[i]||e.template(null,i),g={};else if(!i)return i=r.tmpl,v[r.key]=r,r.nodes=[],r.wrapped&&a(r,r.wrapped),e(n(r,null,r.tmpl(e,r)));return i?("function"==typeof o&&(o=o.call(r||{})),s&&s.wrapped&&a(s,s.wrapped),l=e.isArray(o)?e.map(o,function(e){return e?t(s,r,i,e):null}):[t(s,r,i,o)],p?e(n(r,null,l)):l):[]},tmplItem:function(t){var n;for(t instanceof e&&(t=t[0]);t&&1===t.nodeType&&!(n=e.data(t,"tmplItem"))&&(t=t.parentNode););return n||y},template:function(t,n){return n?("string"==typeof n?n=o(n):n instanceof e&&(n=n[0]||{}),n.nodeType&&(n=e.data(n,"tmpl")||e.data(n,"tmpl",o(n.innerHTML))),"string"==typeof t?e.template[t]=n:n):t?"string"!=typeof t?e.template(null,t):e.template[t]||e.template(null,q.test(t)?t:e(t)):null},encode:function(e){return(""+e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),e.extend(e.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){v={}},afterManip:function(t,n,i){var o=11===n.nodeType?e.makeArray(n.childNodes):1===n.nodeType?[n]:[];i.call(t,n),l(o),C++}})}(jQuery);var qq=qq||{};qq.extend=function(e,t){for(var n in t)e[n]=t[n]},qq.indexOf=function(e,t,n){if(e.indexOf)return e.indexOf(t,n);n=n||0;var i=e.length;for(n<0&&(n+=i);n<i;n++)if(n in e&&e[n]===t)return n;return-1},qq.getUniqueId=function(){var e=0;return function(){return e++}}(),qq.attach=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},qq.detach=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.attachEvent&&e.detachEvent("on"+t,n)},qq.preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},qq.insertBefore=function(e,t){t.parentNode.insertBefore(e,t)},qq.remove=function(e){e.parentNode.removeChild(e)},qq.contains=function(e,t){return e==t||(e.contains?e.contains(t):!!(8&t.compareDocumentPosition(e)))},qq.toElement=function(){var e=document.createElement("div");return function(t){e.innerHTML=t;var n=e.firstChild;return e.removeChild(n),n}}(),qq.css=function(e,t){null!=t.opacity&&"string"!=typeof e.style.opacity&&"undefined"!=typeof e.filters&&(t.filter="alpha(opacity="+Math.round(100*t.opacity)+")"),qq.extend(e.style,t)},qq.hasClass=function(e,t){var n=new RegExp("(^| )"+t+"( |$)");return n.test(e.className)},qq.addClass=function(e,t){qq.hasClass(e,t)||(e.className+=" "+t)},qq.removeClass=function(e,t){var n=new RegExp("(^| )"+t+"( |$)");e.className=e.className.replace(n," ").replace(/^\s+|\s+$/g,"")},qq.setText=function(e,t){e.innerText=t,e.textContent=t},qq.children=function(e){for(var t=[],n=e.firstChild;n;)1==n.nodeType&&t.push(n),n=n.nextSibling;return t},qq.getByClass=function(e,t){if(e.querySelectorAll)return e.querySelectorAll("."+t);for(var n=[],i=e.getElementsByTagName("*"),o=i.length,a=0;a<o;a++)qq.hasClass(i[a],t)&&n.push(i[a]);return n},qq.obj2url=function(e,t,n){var i=[],o="&",a=function(e,n){var o=t?/\[\]$/.test(t)?t:t+"["+n+"]":n;"undefined"!=o&&"undefined"!=n&&i.push("object"==typeof e?qq.obj2url(e,o,!0):"[object Function]"===Object.prototype.toString.call(e)?encodeURIComponent(o)+"="+encodeURIComponent(e()):encodeURIComponent(o)+"="+encodeURIComponent(e))};if(!n&&t)o=/\?/.test(t)?/\?$/.test(t)?"":"&":"?",i.push(t),i.push(qq.obj2url(e));else if("[object Array]"===Object.prototype.toString.call(e)&&"undefined"!=typeof e)for(var s=0,r=e.length;s<r;++s)a(e[s],s);else if("undefined"!=typeof e&&null!==e&&"object"==typeof e)for(var s in e)a(e[s],s);else i.push(encodeURIComponent(t)+"="+encodeURIComponent(e));return i.join(o).replace(/^&/,"").replace(/%20/g,"+")};var qq=qq||{};qq.FileUploaderBasic=function(e){this._options={debug:!1,action:"/server/upload",params:{},button:null,multiple:!0,maxConnections:3,method:"POST",fieldName:"qqfile",allowedExtensions:[],sizeLimit:0,minSizeLimit:0,maxFilesCount:0,minFilesCount:0,onSubmit:function(){},onProgress:function(){},onComplete:function(){},onCancel:function(){},messages:{typeError:"{file} has invalid extension. Only {extensions} are allowed.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",onLeave:"The files are being uploaded, if you leave now the upload will be cancelled.",maxFilesError:"You must select less then {maxFilesCount} files.",minFilesError:"You must select more then {minFilesCount} files."},showMessage:function(e){alert(e)}},qq.extend(this._options,e),this._filesInProgress=0,this._filesUploaded=0,this._handler=this._createUploadHandler(),this._options.button&&(this._button=this._createUploadButton(this._options.button)),this._preventLeaveInProgress()},qq.FileUploaderBasic.prototype={setParams:function(e){this._options.params=e},getInProgress:function(){return this._filesInProgress},_createUploadButton:function(e){var t=this;return new qq.UploadButton({element:e,multiple:this._options.multiple&&qq.UploadHandlerXhr.isSupported(),onChange:function(e){t._onInputChange(e)}})},_createUploadHandler:function(){var e,t=this;e=qq.UploadHandlerXhr.isSupported()?"UploadHandlerXhr":"UploadHandlerForm";var n=new qq[e]({debug:this._options.debug,action:this._options.action,maxConnections:this._options.maxConnections,fieldName:this._options.fieldName,method:this._options.method,onProgress:function(e,n,i,o){t._onProgress(e,n,i,o),t._options.onProgress(e,n,i,o)},onComplete:function(e,n,i){t._onComplete(e,n,i),t._options.onComplete(e,n,i)},onCancel:function(e,n){t._onCancel(e,n),t._options.onCancel(e,n)}});return n},_preventLeaveInProgress:function(){var e=this;qq.attach(window,"beforeunload",function(t){if(e._filesInProgress){var t=t||window.event;return t.returnValue=e._options.messages.onLeave,e._options.messages.onLeave}})},_onSubmit:function(){this._filesInProgress++},_onProgress:function(){},_onComplete:function(e,t,n){this._filesInProgress--,n.error?this._options.showMessage(n.error):this._filesUploaded++},_onCancel:function(){this._filesInProgress--},_onInputChange:function(e){this._handler instanceof qq.UploadHandlerXhr?this._uploadFileList(e.files):this._validateFile(e)&&this._uploadFile(e),this._button.reset()},_uploadFileList:function(e){if(this._validateFiles(e))for(var t=0;t<e.length;t++)this._uploadFile(e[t])},_uploadFile:function(e){var t=this._handler.add(e),n=this._handler.getName(t);this._options.onSubmit(t,n)!==!1&&(this._onSubmit(t,n),this._handler.upload(t,this._options.params))},_validateFiles:function(e){var t=this._filesUploaded+e.length;if(this._options.maxFilesCount>0&&t>this._options.maxFilesCount)return this._error("maxFilesError","name"),!1;if(this._options.minFilesCount>0&&t<this._options.minFilesCount)return this._error("minFilesError","name"),!1;for(var n=0;n<e.length;n++)if(!this._validateFile(e[n]))return!1;return!0},_validateFile:function(e){var t,n;return e.value?t=e.value.replace(/.*(\/|\\)/,""):(t=null!=e.fileName?e.fileName:e.name,n=null!=e.fileSize?e.fileSize:e.size),this._isAllowedExtension(t)?0===n?(this._error("emptyError",t),!1):n&&this._options.sizeLimit&&n>this._options.sizeLimit?(this._error("sizeError",t),!1):!(n&&n<this._options.minSizeLimit)||(this._error("minSizeError",t),!1):(this._error("typeError",t),!1)},_error:function(e,t){function n(e,t){i=i.replace(e,t)}var i=this._options.messages[e];n("{file}",this._formatFileName(t)),n("{extensions}",this._options.allowedExtensions.join(", ")),n("{sizeLimit}",this._formatSize(this._options.sizeLimit)),n("{minSizeLimit}",this._formatSize(this._options.minSizeLimit)),n("{maxFilesCount}",this._options.maxFilesCount),n("{minFilesCount}",this._options.minFilesCount),this._options.showMessage(i)},_formatFileName:function(e){return e.length>33&&(e=e.slice(0,19)+"..."+e.slice(-13)),e},_isAllowedExtension:function(e){var t=-1!==e.indexOf(".")?e.replace(/.*[.]/,"").toLowerCase():"",n=this._options.allowedExtensions;if(!n.length)return!0;for(var i=0;i<n.length;i++)if(n[i].toLowerCase()==t)return!0;return!1},_formatSize:function(e){var t=-1;do e/=1024,t++;while(e>99);return Math.max(e,.1).toFixed(1)+["kB","MB","GB","TB","PB","EB"][t]}},qq.FileUploader=function(e){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template:'<div class="qq-uploader"><div class="qq-upload-drop-area"><span>Drop files here to upload</span></div><div class="qq-upload-button">Upload a file</div><ul class="qq-upload-list"></ul></div>',fileTemplate:'<li><span class="qq-upload-file"></span><span class="qq-upload-spinner"></span><span class="qq-upload-size"></span><a class="qq-upload-cancel" href="#">Cancel</a><span class="qq-upload-failed-text">Failed</span></li>',classes:{button:"qq-upload-button",drop:"qq-upload-drop-area",dropActive:"qq-upload-drop-area-active",list:"qq-upload-list",file:"qq-upload-file",spinner:"qq-upload-spinner",size:"qq-upload-size",cancel:"qq-upload-cancel",success:"qq-upload-success",fail:"qq-upload-fail"}}),qq.extend(this._options,e),this._element=this._options.element,this._element.innerHTML=this._options.template,this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),this._bindCancelEvent(),this._setupDragDrop()},qq.extend(qq.FileUploader.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploader.prototype,{_find:function(e,t){var n=qq.getByClass(e,this._options.classes[t])[0];if(!n)throw new Error("element not found "+t);return n},_setupDragDrop:function(){var e=this,t=this._find(this._element,"drop"),n=new qq.UploadDropZone({element:t,onEnter:function(n){qq.addClass(t,e._classes.dropActive),n.stopPropagation()},onLeave:function(e){e.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(t,e._classes.dropActive)},onDrop:function(n){t.style.display="none",qq.removeClass(t,e._classes.dropActive),e._uploadFileList(n.dataTransfer.files)}});t.style.display="none",qq.attach(document,"dragenter",function(e){n._isValidFileDrag(e)&&(t.style.display="block")}),qq.attach(document,"dragleave",function(e){if(n._isValidFileDrag(e)){var i=document.elementFromPoint(e.clientX,e.clientY);i&&"HTML"!=i.nodeName||(t.style.display="none")}})},_onSubmit:function(e,t){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(e,t)},_onProgress:function(e,t,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o=this._getItemByFileId(e),a=this._find(o,"size");a.style.display="inline";var s;s=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(a,s)},_onComplete:function(e,t,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(e);qq.remove(this._find(i,"cancel")),qq.remove(this._find(i,"spinner")),n.success?qq.addClass(i,this._classes.success):qq.addClass(i,this._classes.fail)},_addToList:function(e,t){var n=qq.toElement(this._options.fileTemplate);n.qqFileId=e;var i=this._find(n,"file");qq.setText(i,this._formatFileName(t)),this._find(n,"size").style.display="none",this._listElement.appendChild(n)},_getItemByFileId:function(e){for(var t=this._listElement.firstChild;t;){if(t.qqFileId==e)return t;t=t.nextSibling}},_bindCancelEvent:function(){var e=this,t=this._listElement;qq.attach(t,"click",function(t){t=t||window.event;var n=t.target||t.srcElement;if(qq.hasClass(n,e._classes.cancel)){qq.preventDefault(t);var i=n.parentNode;e._handler.cancel(i.qqFileId),qq.remove(i)}})}}),qq.UploadDropZone=function(e){this._options={element:null,onEnter:function(){},onLeave:function(){},onLeaveNotDescendants:function(){},onDrop:function(){}},qq.extend(this._options,e),this._element=this._options.element,this._disableDropOutside(),this._attachEvents()},qq.UploadDropZone.prototype={_disableDropOutside:function(){qq.UploadDropZone.dropOutsideDisabled||(qq.attach(document,"dragover",function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="none",e.preventDefault())}),qq.UploadDropZone.dropOutsideDisabled=!0)},_attachEvents:function(){var e=this;qq.attach(e._element,"dragover",function(t){if(e._isValidFileDrag(t)){var n=t.dataTransfer.effectAllowed;"move"==n||"linkMove"==n?t.dataTransfer.dropEffect="move":t.dataTransfer.dropEffect="copy",t.stopPropagation(),t.preventDefault()}}),qq.attach(e._element,"dragenter",function(t){e._isValidFileDrag(t)&&e._options.onEnter(t)}),qq.attach(e._element,"dragleave",function(t){if(e._isValidFileDrag(t)){e._options.onLeave(t);var n=document.elementFromPoint(t.clientX,t.clientY);qq.contains(this,n)||e._options.onLeaveNotDescendants(t)}}),qq.attach(e._element,"drop",function(t){e._isValidFileDrag(t)&&(t.preventDefault(),e._options.onDrop(t))})},_isValidFileDrag:function(e){var t=e.dataTransfer,n=navigator.userAgent.indexOf("AppleWebKit")>-1;return t&&"none"!=t.effectAllowed&&(t.files||!n&&t.types.contains&&t.types.contains("Files"))}},qq.UploadButton=function(e){this._options={element:null,multiple:!1,name:"file",onChange:function(){},hoverClass:"qq-upload-button-hover",focusClass:"qq-upload-button-focus"},qq.extend(this._options,e),this._element=this._options.element,qq.css(this._element,{position:"relative",overflow:"hidden",direction:"ltr"}),this._input=this._createInput()},qq.UploadButton.prototype={getInput:function(){return this._input},reset:function(){this._input.parentNode&&qq.remove(this._input),qq.removeClass(this._element,this._options.focusClass),this._input=this._createInput()},_createInput:function(){var e=document.createElement("input");this._options.multiple&&e.setAttribute("multiple","multiple"),e.setAttribute("type","file"),e.setAttribute("name",this._options.name),qq.css(e,{position:"absolute",right:0,top:0,fontFamily:"Arial",fontSize:"118px",margin:0,padding:0,cursor:"pointer",opacity:0}),this._element.appendChild(e);var t=this;return qq.attach(e,"change",function(){t._options.onChange(e)}),qq.attach(e,"mouseover",function(){qq.addClass(t._element,t._options.hoverClass)}),qq.attach(e,"mouseout",function(){qq.removeClass(t._element,t._options.hoverClass)}),qq.attach(e,"focus",function(){qq.addClass(t._element,t._options.focusClass)}),qq.attach(e,"blur",function(){qq.removeClass(t._element,t._options.focusClass)}),window.attachEvent&&e.setAttribute("tabIndex","-1"),e}},qq.UploadHandlerAbstract=function(e){this._options={debug:!1,action:"/upload.php",method:"POST",fieldName:"qqfile",maxConnections:999,onProgress:function(){},onComplete:function(){},onCancel:function(){}},qq.extend(this._options,e),this._queue=[],this._params=[]},qq.UploadHandlerAbstract.prototype={log:function(e){this._options.debug&&window.console&&console.log("[uploader] "+e)},add:function(){},upload:function(e,t){var n=this._queue.push(e),i={};qq.extend(i,t),this._params[e]=i,n<=this._options.maxConnections&&this._upload(e,this._params[e])},cancel:function(e){this._cancel(e),this._dequeue(e)},cancelAll:function(){for(var e=0;e<this._queue.length;e++)this._cancel(this._queue[e]);this._queue=[]},getName:function(){},getSize:function(){},getQueue:function(){return this._queue},_upload:function(){},_cancel:function(){},_dequeue:function(e){var t=qq.indexOf(this._queue,e);this._queue.splice(t,1);var n=this._options.maxConnections;if(this._queue.length>=n&&t<n){var i=this._queue[n-1];this._upload(i,this._params[i])}}},qq.UploadHandlerForm=function(){qq.UploadHandlerAbstract.apply(this,arguments),this._inputs={}},qq.extend(qq.UploadHandlerForm.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerForm.prototype,{add:function(e){e.setAttribute("name",this._options.fieldName);var t="qq-upload-handler-iframe"+qq.getUniqueId();return this._inputs[t]=e,e.parentNode&&qq.remove(e),t},getName:function(e){return this._inputs[e].value.replace(/.*(\/|\\)/,"")},_cancel:function(e){this._options.onCancel(e,this.getName(e)),delete this._inputs[e];var t=document.getElementById(e);t&&(t.setAttribute("src","javascript:false;"),qq.remove(t))},_upload:function(e,t){var n=this._inputs[e];if(!n)throw new Error("file with passed id was not added, or already uploaded or cancelled");var i=this.getName(e),o=this._createIframe(e),a=this._createForm(o,t);a.appendChild(n);var s=this;return this._attachLoadEvent(o,function(){s.log("iframe loaded");var t=s._getIframeContentJSON(o);s._options.onComplete(e,i,t),s._dequeue(e),delete s._inputs[e],setTimeout(function(){qq.remove(o)},1)}),a.submit(),qq.remove(a),e},_attachLoadEvent:function(e,t){qq.attach(e,"load",function(){e.parentNode&&(e.contentDocument&&e.contentDocument.body&&"false"==e.contentDocument.body.innerHTML||t())})},_getIframeContentJSON:function(iframe){var doc=iframe.contentDocument?iframe.contentDocument:iframe.contentWindow.document,response;this.log("converting iframe's innerHTML to JSON"),this.log("innerHTML = "+doc.body.innerHTML);try{response=eval("("+doc.body.innerHTML+")")}catch(e){response={}}return response},_createIframe:function(e){var t=qq.toElement('<iframe src="javascript:false;" name="'+e+'" />');return t.setAttribute("id",e),t.style.display="none",document.body.appendChild(t),t},_createForm:function(e,t){var n=qq.toElement('<form enctype="multipart/form-data"></form>'),i=qq.obj2url(t,this._options.action);n.setAttribute("method",this._options.method),n.setAttribute("action",i),n.setAttribute("target",e.name),n.style.display="none";var o=$('meta[name="csrf-token"]').attr("content"),a=$('meta[name="csrf-param"]').attr("content"),s=qq.toElement('<input type="hidden" />');return s.setAttribute("name",a),s.setAttribute("value",o),n.appendChild(s),document.body.appendChild(n),n}}),qq.UploadHandlerXhr=function(){qq.UploadHandlerAbstract.apply(this,arguments),this._files=[],this._xhrs=[],this._loaded=[]},qq.UploadHandlerXhr.isSupported=function(){var e=document.createElement("input");return e.type="file","multiple"in e&&"undefined"!=typeof File&&"undefined"!=typeof(new XMLHttpRequest).upload},qq.extend(qq.UploadHandlerXhr.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerXhr.prototype,{add:function(e){if(!(e instanceof File))throw new Error("Passed obj in not a File (in qq.UploadHandlerXhr)");return this._files.push(e)-1},getName:function(e){var t=this._files[e];return null!=t.fileName?t.fileName:t.name},getSize:function(e){var t=this._files[e];return null!=t.fileSize?t.fileSize:t.size},getLoaded:function(e){return this._loaded[e]||0},_upload:function(e,t){var n=this._files[e],i=this.getName(e),o=this.getSize(e);this._loaded[e]=0;var a=this._xhrs[e]=new XMLHttpRequest,s=this;a.upload.onprogress=function(t){t.lengthComputable&&(s._loaded[e]=t.loaded,s._options.onProgress(e,i,t.loaded,t.total))},a.onreadystatechange=function(){4==a.readyState&&s._onComplete(e,a)},t=t||{},t[this._options.fieldName]=i;var r=qq.obj2url(t,this._options.action);a.open(this._options.method,r,!0),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-File-Name",encodeURIComponent(i)),a.setRequestHeader("X-File-Size",o),a.setRequestHeader("X-File-Type",n.type),a.setRequestHeader("Content-Type","application/octet-stream"),$.rails&&$.rails.CSRFProtection(a),a.send(n)},_onComplete:function(id,xhr){if(this._files[id]){var name=this.getName(id),size=this.getSize(id);if(this._options.onProgress(id,name,size,size),[200,201].indexOf(xhr.status)>-1){this.log("xhr - server response received"),this.log("responseText = "+xhr.responseText);var response;try{response=eval("("+xhr.responseText+")")}catch(e){response={}}this._options.onComplete(id,name,response)}else this._options.onComplete(id,name,{});this._files[id]=null,this._xhrs[id]=null,this._dequeue(id)}},_cancel:function(e){this._options.onCancel(e,this.getName(e)),this._files[e]=null,this._xhrs[e]&&(this._xhrs[e].abort(),this._xhrs[e]=null)}}),function(e){"use strict";e.support.pushState=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/);var t={init:function(t,n){n.options=e.extend({scrollContainer:window,scrollPadding:100,scrollEventDelay:300},t),this.options=n.options,this.container=n.container,n.scrollModule=this,this._toplock=!0,this._bottomlock=!0,this.scrollContainer=e(this.options.scrollContainer),this.updateEntities(),this.sortMarkers(),this.currentPage=null,this.container.on("jes:afterPageLoad",e.proxy(function(e,t,n){if(this.updateEntities(),this.sortMarkers(),this.checkMarker(),"top"==n){var i=this.markers[1].top,o=this.scrollContainer.scrollTop();this.scrollContainer.scrollTop(o+i)}},this)),this.bind()},updateEntities:function(){this.entities=e(this.options.entity,this.container)},sortMarkers:function(){var t=[];e(".jes-marker",this.container).each(function(){t.push({top:e(this).position().top,url:e(this).data("jesUrl")})}),this.markers=t},checkMarker:function(){for(var t=this.markers[0],n=this.scrollContainer.scrollTop(),i=1;i<this.markers.length&&n>this.markers[i].top;i++)t=this.markers[i];t.url!=this.currentPage&&(this.currentPage=t.url,e(this.container).trigger("jes:scrollToPage",t.url))},bind:function(){this.scrollContainer.on("scroll.jes",e.proxy(function(t){this._tId||(this.scrollHandler(t),this._tId=setTimeout(e.proxy(function(){this._tId=null},this),this.options.scrollEventDelay))},this))},unbind:function(){e(this.options.scrollContainer).off("scroll.jes")},scrollHandler:function(){var t=this.scrollContainer,n=this.entities,i=n.first(),o=n.last(),a=t.scrollTop(),s=t.height(),r=a+s,l=i.position().top,p=l+this.options.scrollPadding,u=o.outerHeight()+o.position().top,d=u-this.options.scrollPadding;a<p?this._toplock||(e(this.container).trigger("jes:topThreshold"),this._toplock=!0):this._toplock=!1,r>d?this._bottomlock||(e(this.container).trigger("jes:bottomThreshold"),this._bottomlock=!0):this._bottomlock=!1,this.checkMarker()}},n={init:function(t,n){n.options=e.extend({},t),this.options=n.options,this.container=n.container,this.setMarker(e(this.options.entity,this.container).first(),location.href),n.ajaxModule=this},loadPage:function(t,n,i){var o={top:{find:"first",inject:"insertBefore"},bottom:{find:"last",inject:"insertAfter"}},a=o[n];this.container.trigger("jes:beforePageLoad",[t,n]),e.get(t,null,e.proxy(function(o){var s=e("<div>").html(o),r=this.options.container,l=e(r,s).first();if(l.length){var p=l.find(this.options.entity);"bottom"==n&&p.each(function(){var t=e(this).attr("id");t&&e("#"+t,this.container).remove()});var u=e(this.options.entity,r)[a.find]();p[a.inject](u),this.setMarker(p.first(),t)}e.isFunction(i)&&i(s),this.container.trigger("jes:afterPageLoad",[t,n,s,p])},this),"html")},setMarker:function(e,t){e.addClass("jes-marker").data("jesUrl",t)}},i={init:function(t,n){n.options=e.extend({nextPage:".pagination a[rel=next]",previousPage:".pagination a[rel=previous]"},t),this.options=n.options,this.container=n.container,e.each([{selector:this.options.nextPage,event:"jes:bottomThreshold.navigation",placement:"bottom"},{selector:this.options.previousPage,event:"jes:topThreshold.navigation",placement:"top"}],e.proxy(function(t,i){if(i.element=e(i.selector),i.element.length){var o=i.element.prop("href"),a=!1,s=function(){!a&&o&&(a=!0,n.ajaxModule.loadPage(o,i.placement,e.proxy(function(t){var n=e(i.selector,e(t));n.length?(a=!1,o=n.prop("href"),i.element.attr("href",o)):(e(this).off(i.event),i.element.remove())},this)))};e(this.container).on(i.event,s),e(i.element).on("click",e.proxy(function(e){e.preventDefault(),s.apply(this.container)},this))}},this))}},o={init:function(t,n){e.support.pushState&&n.container.on("jes:scrollToPage",function(e,t){history.replaceState({},null,t)})}};e.endlessScroll=function(a){if(this.options=e.extend(!0,{container:"#container",entity:".entity",_modules:[n,t,i,o],modules:[]},a),this.container=e(this.options.container),!this.container.length)throw"Container for endless scroll isn't available on the page";return e.merge(this.options.modules,this.options._modules),this.options.modules.forEach(e.proxy(function(e){e.init(this.options,this)},this)),this}}(jQuery),function(e,t){var n;e.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(t){var n=e('meta[name="csrf-token"]').attr("content");n&&t.setRequestHeader("X-CSRF-Token",n)},fire:function(t,n,i){var o=e.Event(n);return t.trigger(o,i),o.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},handleRemote:function(i){var o,a,s,r,l=i.data("cross-domain")||null,p=i.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType;if(n.fire(i,"ajax:before")){if(i.is("form")){o=i.attr("method"),a=i.attr("action"),s=i.serializeArray();var u=i.data("ujs:submit-button");u&&(s.push(u),i.data("ujs:submit-button",null))}else i.is(n.inputChangeSelector)?(o=i.data("method"),a=i.data("url"),s=i.serialize(),i.data("params")&&(s=s+"&"+i.data("params"))):(o=i.data("method"),a=i.attr("href"),s=i.data("params")||null);return r={type:o||"GET",data:s,dataType:p,crossDomain:l,beforeSend:function(e,o){return o.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+o.accepts.script),n.fire(i,"ajax:beforeSend",[e,o])},success:function(e,t,n){i.trigger("ajax:success",[e,t,n])},complete:function(e,t){i.trigger("ajax:complete",[e,t])},error:function(e,t,n){i.trigger("ajax:error",[e,t,n])}},a&&(r.url=a),n.ajax(r)}return!1},handleMethod:function(n){var i=n.attr("href"),o=n.data("method"),a=n.attr("target"),s=e("meta[name=csrf-token]").attr("content"),r=e("meta[name=csrf-param]").attr("content"),l=e('<form method="post" action="'+i+'"></form>'),p='<input name="_method" value="'+o+'" type="hidden" />';r!==t&&s!==t&&(p+='<input name="'+r+'" value="'+s+'" type="hidden" />'),a&&l.attr("target",a),l.hide().append(p).appendTo("body"),l.submit()},disableFormElements:function(t){t.find(n.disableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with",t[n]()),t[n](t.data("disable-with")),t.prop("disabled",!0)})},enableFormElements:function(t){t.find(n.enableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[n](t.data("ujs:enable-with")),t.prop("disabled",!1)})},allowAction:function(e){var t,i=e.data("confirm"),o=!1;return!i||(n.fire(e,"confirm")&&(o=n.confirm(i),t=n.fire(e,"confirm:complete",[o])),o&&t)},blankInputs:function(t,n,i){var o,a=e(),s=n||"input,textarea";return t.find(s).each(function(){o=e(this),(i?o.val():!o.val())&&(a=a.add(o))}),!!a.length&&a},nonBlankInputs:function(e,t){return n.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},callFormSubmitBindings:function(n,i){var o=n.data("events"),a=!0;return o!==t&&o.submit!==t&&e.each(o.submit,function(e,t){if("function"==typeof t.handler)return a=t.handler(i)}),a},disableElement:function(e){e.data("ujs:enable-with",e.html()),e.html(e.data("disable-with")),e.bind("click.railsDisable",function(e){return n.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.data("ujs:enable-with",!1)),e.unbind("click.railsDisable")}},e.ajaxPrefilter(function(e,t,i){e.crossDomain||n.CSRFProtection(i)}),e(document).delegate(n.linkDisableSelector,"ajax:complete",function(){n.enableElement(e(this))}),e(document).delegate(n.linkClickSelector,"click.rails",function(i){var o=e(this),a=o.data("method"),s=o.data("params");return n.allowAction(o)?(o.is(n.linkDisableSelector)&&n.disableElement(o),
o.data("remote")!==t?!(!i.metaKey&&!i.ctrlKey||a&&"GET"!==a||s)||(n.handleRemote(o)===!1&&n.enableElement(o),!1):o.data("method")?(n.handleMethod(o),!1):void 0):n.stopEverything(i)}),e(document).delegate(n.inputChangeSelector,"change.rails",function(t){var i=e(this);return n.allowAction(i)?(n.handleRemote(i),!1):n.stopEverything(t)}),e(document).delegate(n.formSubmitSelector,"submit.rails",function(i){var o=e(this),a=o.data("remote")!==t,s=n.blankInputs(o,n.requiredInputSelector),r=n.nonBlankInputs(o,n.fileInputSelector);return n.allowAction(o)?s&&o.attr("novalidate")==t&&n.fire(o,"ajax:aborted:required",[s])?n.stopEverything(i):a?r?n.fire(o,"ajax:aborted:file",[r]):!e.support.submitBubbles&&e().jquery<"1.7"&&n.callFormSubmitBindings(o,i)===!1?n.stopEverything(i):(n.handleRemote(o),!1):void setTimeout(function(){n.disableFormElements(o)},13):n.stopEverything(i)}),e(document).delegate(n.formInputClickSelector,"click.rails",function(t){var i=e(this);if(!n.allowAction(i))return n.stopEverything(t);var o=i.attr("name"),a=o?{name:o,value:i.val()}:null;i.closest("form").data("ujs:submit-button",a)}),e(document).delegate(n.formSubmitSelector,"ajax:beforeSend.rails",function(t){this==t.target&&n.disableFormElements(e(this))}),e(document).delegate(n.formSubmitSelector,"ajax:complete.rails",function(t){this==t.target&&n.enableFormElements(e(this))})}(jQuery),$.QueryString=function(e){if(""==e)return{};for(var t={},n=0;n<e.length;++n){var i=e[n].split("=");2==i.length&&(t[i[0]]=decodeURIComponent(i[1].replace(/\+/g," ")))}return t}(window.location.search.substr(1).split("&")),$(document).ready(function(){var e="div.gal-item div.gal-inner-holder";$(document).on("mouseover",e,function(){$(this).addClass("hover")}).on("mouseout",e,function(){$(this).removeClass("hover")}).on("click",e,function(){var e=$(this).parents("div.gal-item").data("url");CKEDITOR.tools.callFunction(CKEditorFuncNum,e),window.close()}),$(document).on("ajax:complete","div.gal-item a.gal-del",function(){$(this).parents("div.gal-item").remove()});var t=$.endlessScroll({container:".fileupload-list",entity:".gal-item",scrollPadding:100});t.scrollModule.unbind(),window.setTimeout(function(){t.scrollModule.bind()},1e3)}),qq.FileUploader.instances=new Object,qq.FileUploaderInput=function(e){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template_id:"#fileupload_tmpl",classes:{button:"fileupload-button",drop:"fileupload-drop-area",dropActive:"fileupload-drop-area-active",list:"fileupload-list",preview:"fileupload-preview",file:"fileupload-file",spinner:"fileupload-spinner",size:"fileupload-size",cancel:"fileupload-cancel",success:"fileupload-success",fail:"fileupload-fail"}}),qq.extend(this._options,e),this._element=document.getElementById(this._options.element),this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),qq.FileUploader.instances[this._element.id]=this},qq.extend(qq.FileUploaderInput.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploaderInput.prototype,{_find:function(e,t){var n=qq.getByClass(e,this._options.classes[t])[0];if(!n)throw alert(t),new Error("element not found "+t);return n},_setupDragDrop:function(){var e=this,t=this._find(this._element,"drop"),n=new qq.UploadDropZone({element:t,onEnter:function(n){qq.addClass(t,e._classes.dropActive),n.stopPropagation()},onLeave:function(e){e.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(t,e._classes.dropActive)},onDrop:function(n){t.style.display="none",qq.removeClass(t,e._classes.dropActive),e._uploadFileList(n.dataTransfer.files)}});t.style.display="none",qq.attach(document,"dragenter",function(e){n._isValidFileDrag(e)&&(t.style.display="block")}),qq.attach(document,"dragleave",function(e){if(n._isValidFileDrag(e)){var i=document.elementFromPoint(e.clientX,e.clientY);i&&"HTML"!=i.nodeName||(t.style.display="none")}})},_onSubmit:function(e,t){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(e,t)},_onProgress:function(e,t,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o,a=this._getItemByFileId(e),s=this._find(a,"size");o=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(s,o)},_onComplete:function(e,t,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(e),o=n.asset?n.asset:n;o&&o.id?(qq.addClass(i,this._classes.success),o.size=this._formatSize(o.size),o.controller=void 0!==o.type&&"ckeditor::picture"==o.type.toLowerCase()?"pictures":"attachment_files",$(i).replaceWith($(this._options.template_id).tmpl(o))):qq.addClass(i,this._classes.fail)},_addToList:function(e,t){if(this._listElement){this._options.multiple===!1&&$(this._listElement).empty();var n={id:0,filename:this._formatFileName(t),size:0,format_created_at:"",url_content:"#",controller:"assets",url_thumb:"/assets/ckeditor/filebrowser/images/preloader-8624d6ba2be57a5a2bc10fd57b89ee91.gif"},i=$(this._options.template_id).tmpl(n).attr("qqfileid",e).prependTo(this._listElement);i.find("div.img").addClass("preloader"),this._bindCancelEvent(i)}},_getItemByFileId:function(e){return $(this._listElement).find("div[qqfileid="+e+"]").get(0)},_bindCancelEvent:function(e){var t=this,n=$(e);n.find("a."+this._classes.cancel).bind("click",function(e){return t._handler.cancel(n.attr("qqfileid")),n.remove(),qq.preventDefault(e),!1})}});