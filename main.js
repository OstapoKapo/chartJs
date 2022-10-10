random.style.background = 'linear-gradient(90deg, rgb(22, 135, 237), rgb(20, 55, 90))';

const data = {
  labels: [],
  datasets: [{
      label: 'Statistic',
      //data: [],
      data: [],
      backgroundColor: [],
      hoverOffset: 4
  }]
};
const config = {
  type: 'doughnut',
  data: data,
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// function localData(){
//   if(localStorage.getItem('datapoints')!= 'green'){
//     if(datapoints){
//       splitData = datapoints.split(',')
//     }
//     if(dataPrice){
//       splitData2 = dataPrice.split(',')
//     }
//     if(dataColor){
//       splitData3 = dataColor.split(',')
//     }
//     data.datasets[0].data.push(localStorage.getItem('dataPrice'))
//     data.datasets[0].backgroundColor.push(localStorage.getItem('dataColor'))
//     myChart.update();
//   }
// }
// localData()


function addCategory() {
  let lbl = category.value;
  let cd = amount.value;
  let categoryColor ='#' + Math.floor(Math.random()*16777217).toString(16);
  data.labels.push(lbl);
  data.datasets[0].data.push(cd);
  data.datasets[0].backgroundColor.push(categoryColor);
  myChart.update();
  category.value = ''
  amount.value = ''
}


add.onclick = function(){
  
  if(category.value == '' && amount.value == ''){
    alert('Ви не вели даних')
  }else if(category.value != '' && amount.value == ''){
    alert('Ви не вели всіх даних')
  }else if(category.value == '' && amount.value != ''){
    alert('Ви не вели всіх даних')
  }else{
    addCategory();
    myChartText.innerText = 'Your diagram'
    chartContainer__img.style.display = 'none'
  }
}

save.onclick = function(){
  inputContainer.style.display = 'none'
  chartContainer.style.cursor = 'pointer'
}

chartContainer.onclick = function(){
  inputContainer.style.display = 'flex'
  chartContainer.style.cursor = 'auto'
  
  
}

reset.onclick = function(){
  myChartText.innerText = 'Here can be your diagram😊'
  chartContainer__img.style.display = 'flex'
  data.labels = [];
  data.datasets[0].data = [];
  data.datasets[0].backgroundColor = [];
  res = ['shop','clothes','car','eat','family','shcool','games','bisnses','health','books'];
  myChart.update();
}
let arr = []

let clearCateg = []

let res = ['shop','clothes','car','eat','family','shcool','games','bisnses','health','books'];

random.onclick = function(){

  let n1 = '#' + Math.floor(Math.random()*16777217).toString(16);

  let n2 = '#' + Math.floor(Math.random()*16777217).toString(16);

  random.style.background =  'linear-gradient(90deg, '+n1+', '+n2+')';
  
  clearCateg = []

 let rc1 = Math.floor(Math.random()*res.length)
 console.log(rc1)

let ce = res[rc1]

for(let el of res){
  if(el != ce){
    clearCateg.push(el) 
  }
  res = clearCateg
}
let rc2 = Math.floor(Math.random()* 10000)
if(ce == undefined){
  alert('Це максимум всіх категорій')
}else{
  

  myChartText.innerText = 'Your diagram'
    chartContainer__img.style.display = 'none'
  let categoryColor ='#' + Math.floor(Math.random()*16777217).toString(16);
   data.labels.push(ce)
  data.datasets[0].data.push(rc2)
  data.datasets[0].backgroundColor.push(categoryColor)
  
  // localStorage.setItem('datapoints', data.labels)
  // localStorage.setItem('dataPrice', data.datasets[0].data)
  // localStorage.setItem('dataColor', data.datasets[0].backgroundColor)
  myChart.update();
 
}




}
