// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var result=[]
  var i
  for (i=0;i<musicians.length;i++){
    result.push(musicians[i]+' plays '+instruments[i])
  }
}

function johnLennonFacts(facts){
  var result=[]
  var i
  while(i<facts.length){
    result.push(facts[i]+'!!!')
  }
}


