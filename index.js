const taskContainer = document.querySelector(".task__container");
let globalStore = [];//load local storage data to array,to make changes in global array after deletion takes place
const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4">
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteCard.apply(this,arguments)" >
      <i class="fas fa-trash-alt" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"></i>
    </button>
  </div>
  <img
    src=${taskData.imageUrl}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${taskData.taskTitle}</h5>
    <p class="card-text">
      ${taskData.taskDescription}
    </p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
  </div>
  <div class="card-footer">
    <button type="button" class="btn btn-outline-primary float-end">
      Open Task
    </button>
  </div>
</div>
</div>
`;
//const globalStore = [];//store all task data in form of object,refresh removes the old list of array


const loadInitialCardData=()=>{
    //localstoragemto get tasky card data
    const getCardData = localStorage.getItem("tasky");
    //convert from string to normal object
    const {cards}=JSON.parse(getCardData); //destructuring only card prop.
    //loop over those array of task object to create html card
    cards.map((cardObject) =>{ 
        //inject it to DOM
        taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
        //update our globalStore
        globalStore.push(taskData);}
    )
    
};

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`, // unique number for id
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,
  };

  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
  globalStore.push(taskData);

  //localStorage.setItem("tasky",globalStore); //id used ,take data directly pushed replace existing data thsts why used globalstorage
//gives object Object as output in application,should convert to string
localStorage.setItem("tasky",JSON.stringify({cards:globalStore})); //an object

};

const deleteCard=(event) =>{
   
    event=window.event;
    //id
    const targetID=event.target.id;
    //button clicked or icon
    const tagname=event.target.tagName; //BUTTON


    //match the id of the lement with the id inside the globalStore
    globalStore = globalStore.filter((cardObject) =>cardObject.id !== targetID);//not equal to
    localStorage.setItem("tasky",JSON.stringify({cards:globalStore})); //an object

    
    
    //we have updated array of cards
    //contact parent 
    if(tagname=='BUTTON'){
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode)//3 steps for button
    }else {
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode)//4 steps for icon

    }
   // taskContainer.removeChild() -> to delete it ,we need to reach parent in how many steps 

};




//Isssues
//page refresh will causse data to be deleted-> localstorage will solve this issue->5Mb is the limit 













//API:-application programming interface
//application:-local storage
//access application via programming-> javascript
//interface ->middleman to interact with application programmatically->
//local storage-> with some method(add,delete)-> javascript



//features 
//delete the card
//id approach-> to access card when button is clicked