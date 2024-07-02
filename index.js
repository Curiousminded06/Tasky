const taskContainer = document.querySelector(".task__container");

const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4" id=${taskData.id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger">
      <i class="fas fa-trash-alt"></i>
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
const globalStore = [];//load local storage data to array

const loadInitialCardData=()=>{
    //localstoragemto get tasky card data
    const getCardData = localStorage.getItem("tasky");
    //convert from string to normal object
    const {cards}=JSON.parse(getCardData);
    //loop over those array of task object to create html card,inject it to DOM
    cards.map((cardObject) =>{ 
        taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
        //update our globalStore
        globalStore.push(taskData);})
    
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






//Isssues
//page refresh will causse data to be deleted-> localstorage will solve this issue->5Mb is the limit 













//API:-application programming interface
//application:-local storage
//access application via programming-> javascript
//interface ->middleman to interact with application programmatically->
//local storage-> with some method(add,delete)-> javascript



//features 
//delete the card