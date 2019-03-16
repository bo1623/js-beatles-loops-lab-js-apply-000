// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musician, instrument){
  var result=[]
  var i
  for (i=0;i<musician.length;i++){
    result.push(musician[i]+' plays '+instrument[i])
  }
}

function johnLennonFacts(facts){
  var result=[]
  var i
  while(i<facts.length){
    result.push(facts[i]+'!!!')
  }
}


