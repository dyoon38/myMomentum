(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var toDoForm=document.getElementById("todo-form"),toDoInput=document.querySelector("#todo-form input"),toDoList=document.getElementById("todo-list"),TODOS_KEY="todos",toDos=[];function saveToDos(){localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))}function deleteToDo(e){var t=e.target.parentElement;t.remove(),toDos=toDos.filter(function(e){return e.id!==parseInt(t.id)}),saveToDos()}function updateToDo(e){var t=e.target.previousElementSibling,o=prompt("수정할 내용을 입력하세요");if(o){alert("수정되었습니다."),t.innerText=o;var n=e.target.parentElement,a=toDos.findIndex(function(e){return e.id===parseInt(n.id)});toDos[a].text=o,saveToDos()}else alert("수정이 취소되었습니다.")}function paintTodo(e){var t=document.createElement("li");t.id=e.id;var o=document.createElement("span");o.innerText=e.text,"빵먹기"===e.text?o.innerText="🍞🍞🍞":o.innerText=e.text;var n=document.createElement("button");n.innerText="수정",n.addEventListener("click",updateToDo);var a=document.createElement("button");a.innerText="삭제",a.addEventListener("click",deleteToDo),t.appendChild(o),t.appendChild(n),t.appendChild(a),toDoList.appendChild(t)}function handleToDoSubmit(e){e.preventDefault();var t=toDoInput.value;toDoInput.value="";var o={text:t,id:Date.now()};toDos.push(o),paintTodo(o),saveToDos()}toDoForm.addEventListener("submit",handleToDoSubmit);var savedToDos=localStorage.getItem(TODOS_KEY);if(null!==savedToDos){var parsedToDos=JSON.parse(savedToDos);toDos=parsedToDos,parsedToDos.forEach(paintTodo)}

},{}]},{},[1]);