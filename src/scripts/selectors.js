import img from '!!file! src/images/content/floor-plan-1.jpg'

var mkLists = new Array(3) 
mkLists["empty"] = ["Выбрать этаж"]; 
mkLists["house-1"] = ["floor-1", "floor-2", "floor-3", "floor-4", "floor-5",]; 
mkLists["house-2"] = ["floor-1", "floor-2", "floor-3", "floor-4", "floor-5",]; 
mkLists["house-3"] = ["floor-1", "floor-2", "floor-3", "floor-4", "floor-5",]; 

function mkChange(selectObj) { 
  selectObj = this
  var id = selectObj.selectedIndex; 
  var which = selectObj.options[id].value; 
    carsList = mkLists[which]; 
  var carSelect = document.getElementById("brand"); 
  while (carSelect.options.length > 0) { 
    carSelect.remove(0); 
  } 
  var newOption; 
  for (var i=0; i<carsList.length; i++) { 
      newOption = document.createElement("option"); 
      newOption.value = carsList[i];  
      newOption.text=carsList[i];
      try {
          carSelect.add(newOption);
      } 
      catch (e) {
          carSelect.appendChild(newOption);
      } 
  }
  checkimage($('#brand').val());
}

mk.addEventListener('change', mkChange);

$('#brand').on('input', function() {
  checkimage(this.value);
});

function checkimage(val) {
  var arr = {
    'floor-1': `https://i.stack.imgur.com/HgiaU.gif?s=32&g=1`, 
    'floor-2': 'https://i.stack.imgur.com/HgiaU.gif?s=32&g=1', 
    'floor-3': 'https://www.gravatar.com/avatar/b2f4cbdf639291342efd2d1b65aab9a5?s=32&d=identicon&r=PG&f=1', 
    'floor-4': 'https://i.stack.imgur.com/XyqB8.jpg?s=32&g=1',
    'floor-5': 'http://carspravka.ru/images/auto/308364200902ee7538b0f1e820e90dd7.jpg',
  };
  if(arr[val] != undefined){
    $('img').attr('src', arr[val]);
  };
}