//to add the cross icon in the leftmost side of each list items in absolute way; 

var a = document.getElementsByTagName("LI");

for (var start = 0; start < a.length; start++) {
  var lm = document.createTextNode("\u00D7");
  var button = document.createElement("BUTTON");
  button.className = "Done";
  button.appendChild(lm);
  a[start].appendChild(button);
}

// to close the done work

var ewq = document.getElementsByClassName("Done");
for (var sec = 0; sec < ewq.length; sec++) {
  ewq[sec].onclick = function() {
    var closed = this.parentElement;
    closed.style.display = "none";
  }
}

var ven = document.querySelector('ul');
ven.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Creating element.


function newElement() {
    var inpute = document.getElementById("tit").value;
    var li = document.createElement("li");
    var t = document.createTextNode(inpute);
    li.appendChild(t);
    if (inpute === '') {
      alert("Your list is empty..!");
    } else {
      document.getElementById("Mylist").appendChild(li);
    }
    document.getElementById("tit").value = "";
    var txt = document.createTextNode("\u00D7");
    var butt = document.createElement("BUTTON");
   
    butt.className = "Done";
    butt.appendChild(txt);
    li.appendChild(butt);
  
    for (var i = 0; i < Done.length; i++) {
      Done[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }