import '../scss/main.scss';
const personsURI = 'todo.json';
const personsXHR = new XMLHttpRequest();
personsXHR.open('GET', personsURI);

personsXHR.onload = function() {
    if (this.status === 200) {
        const responseText = this.responseText;
        const persons = JSON.parse(responseText);
         for(let i=0;i<persons.length;i++)
        { display(persons[i].title,persons[i].details,persons[i].time);

         }
    }
};

const input =  document.createElement("input");
input.type = 'Text';
document.body.appendChild(input);
input.setAttribute("placeholder","Task")


const input1 =  document.createElement("input");
input1.type = 'Text';
document.body.appendChild(input1);
input1.setAttribute("placeholder","Description")
input1.style.display="Inline";
input1.style.margin="50px";

const input2 = document.createElement("input");
input2.type="datetime-local";
input2.setAttribute("id","testing")
document.body.appendChild(input2);


const input3 =  document.createElement("button");
document.body.appendChild(input3);
input3.textContent = "Submit";
input.setAttribute("id","subbtn")
input1.setAttribute("id","desc2")
input3.style.display="Inline";
input3.style.margin="50px";



input3.onclick = function(){
  const inputValue2 = document.getElementById("desc2").value;
  const inputValue = document.getElementById("subbtn").value;
  const inputValue3 = document.getElementById("testing").value;
  
  const doc = document.createElement("div");
  const but = document.createElement("button");
  doc.appendChild(but);
  //but.textContent= t;
  but.innerHTML=inputValue;
  but.style.display="Inline";
  but.style.margin="50px";
  document.body.appendChild(doc);

  but.onclick =function(){
    const d = document.createElement("p");
    document.body.appendChild(d);
    d.textContent = inputValue2;
    const d2 = document.createElement("p");
    d.appendChild(d2);
    d2.textContent = inputValue3;
    but.disabled=true;
  }
  

}


personsXHR.send();


function display(name,details,time)
{
const app = document.createElement("div");
app.setAttribute("id",name);

const btn = document.createElement("button");

app.appendChild(btn);
document.body.appendChild(app);
 btn.textContent = name;
 btn.style.display="block";
 btn.style.margin="50px";
 btn.onclick = function()
  {
      const value = document.createElement("p");
      value.setAttribute("id","p"+name);
      app.appendChild(value);
      value.style.display="inline";
      value.textContent= details;
      const value1 = document.createElement("p");
      //value1.setAttribute("id","p"+name);
      value.appendChild(value1);
      //value1.style.display="inline";
      value1.textContent= time;
      btn.disabled=true;
  }
}