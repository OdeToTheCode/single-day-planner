
$(function (){
  const rootElement = $('.container-lg') 
  const timeElms = Array.from(rootElement.children()) 
  let hourCur = moment().hour()
  let timeCur = moment().format('hh:mm:ss')
  let displayToday = moment().format("MMM Do YY")
  
  $('#currentDay').text(displayToday)
  


  for(var i = 8; i<18; i++){
    console.log($('#'+[i]).attr('id'))
    if (hourCur == ($('#'+[i]).attr('id'))){
      $('#'+[hourCur]).removeClass('past')
      $('#'+[hourCur]).removeClass('future')
      $('#'+[hourCur]).addClass('present')
    }
    console.log(hourCur + "||" + i)
    if(hourCur < i){
      $('#' + i).removeClass('present')
      $('#' + i).removeClass('past')
      $('#' + i).addClass('future')
    }

    if(hourCur > i){
      $('#' + i).removeClass('present')
      $('#' + i).removeClass('future')
      $('#' + i).addClass('past')
    }
  }

  $('.time-block').on('click', ".saveBtn", function (e){
    const savedDataID = $(this).parent().attr('id')
    const savedDataText = $(this).prev().val()
    localStorage.setItem(savedDataID, (savedDataText))
    e.preventDefault()
    console.log(typeof savedDataID,typeof savedDataText)
  })
  
  timeElms.forEach(timeBlock => {
    const elmKey = timeBlock.id 
    const elmText = $(timeBlock).children().eq(1)
    const savedData = localStorage.getItem(elmKey)
    console.log(typeof elmText)
    console.log(typeof elmKey)
    // console.log(savedData)

    elmText.text(savedData)
  })
 

})
