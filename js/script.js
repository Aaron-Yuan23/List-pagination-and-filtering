// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
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

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

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


const appendPageLinks = () =>{

   
   for(let i=1; i<=numOfPages; i++){
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = i;
      a.setAttribute =('href','#');
      if(parseInt(a.textContent) === 1){
         a.className = "active";
      }
      
      a.addEventListener ('click', (e) => {
         const aTag = document.querySelectorAll('a');
         const currentLink = parseInt(e.target.textContent);
         for(let j =0; j<aTag.length; j++){
            const pageLink = aTag[j];
            const linkNumber = parseInt(pageLink.textContent);
            if(linkNumber === currentLink){
               pageLink.setAttribute('class', 'active');
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
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// Initiate to first 10 students
showPage(listItem, 10);

// Generate the page links
appendPageLinks();



// Remember to delete the comments that came with this file, and replace them with your own code comments.