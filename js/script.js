
// selecting the 54 items inside the student-list
const listItem = document.querySelector('.student-list');
// number of pages needed to display the 54 items
const numOfPages = Math.ceil(listItem.children.length/10);
//creating div element
const div = document.createElement('div');
div.className = "pagination";
//creating ul element
const ul = document.createElement('ul');
// selecting page class to add the pagination link
const pageDiv = document.querySelector('.page');
pageDiv.appendChild(div);


// function generates the 10 students for each page
const showPage = (list, page) =>{
   
      let start = page-9 ;
      let end = page;
   for(var i=0; i<listItem.children.length; i++ ){
      if(i >= start && i <= end){
         list.children[i].style.display = "block";
      }
      else{
         list.children[i].style.display = "none";
      }
   }
}

//function obtains working page links 
const appendPageLinks = () =>{
   //creating mockup for the page links
   for(let i=1; i<=numOfPages; i++){
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = i;
      a.setAttribute =('href','#');
      if(parseInt(a.textContent) === 1){
         a.className = "active";
      }
      //jumping to clicked page
      a.addEventListener ('click', (e) => {
         const aTag = document.querySelectorAll('a');
         const currentLink = parseInt(e.target.textContent);
         for(let j =0; j<aTag.length; j++){
            const pageLink = aTag[j];
            const linkNumber = parseInt(pageLink.textContent);
            if(linkNumber === currentLink){
               pageLink.class=  'active';
            }
            else{
               pageLink.removeAttribute('class');
            }
         }
         showPage(listItem, currentLink * 10);
      });
      li.appendChild(a);
      ul.appendChild(li);
   }
   div.appendChild(ul);
}


// Initiate to first 10 students
showPage(listItem, 10);

// Generate the page links
appendPageLinks();



