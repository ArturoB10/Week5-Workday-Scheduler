let store;
let time = new Date();
let main = document.querySelector('.container-lg');
const hours = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
const getStorage = async () => {
     store = await localStorage.hours ? JSON.parse(localStorage.hours) : [];
     
};
getStorage();

currentDay.innerHTML = `${time.toDateString()} ${time.toLocaleTimeString()}`;

hours.forEach((hour,i) => {
    let cH = time.getHours();
    let rH = i+9;
    main.innerHTML+= `
      <div class="row time-block ${rH<cH ? 'past' : rH>cH ? 'future' : 'present'}">
        <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
    `;
});