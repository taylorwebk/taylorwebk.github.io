const update = () => {
  const now = moment()
  const birthDay = moment('1994-09-05')
  const lifeExpect = moment('2073-09-05')

  const secondsFromBirth = lifeExpect.diff(birthDay, 'seconds')
  const totalSeconds = lifeExpect.diff(now, 'seconds')
  const percent =  (((secondsFromBirth - totalSeconds) / secondsFromBirth) * 100).toFixed(2)
  const seconds = parseInt(totalSeconds % 60, 10)
  const minutes = parseInt(totalSeconds % (60 * 60) / 60, 10)
  const hours = parseInt(totalSeconds % (60 * 60 * 24) / (60 * 60), 10)
  const days = parseInt(totalSeconds % (60 * 60 * 24 * 365) / (60 * 60 * 24), 10)
  const years = parseInt(totalSeconds / (60 * 60 * 24 * 365), 10)

  document.getElementById('years').innerText = years == 1
    ? years + ' year' : years + ' years'
  document.getElementById('days').innerText = days == 1
    ? days + ' day' : days + ' days'
  document.getElementById('hours').innerText = hours == 1
    ? hours + ' hour' : hours + ' hours'
  document.getElementById('minutes').innerText = minutes == 1
    ? minutes + ' minute' : minutes + ' minutes'
  document.getElementById('seconds').innerText = seconds == 1
    ? seconds + ' second' : seconds + ' seconds'
  document.getElementById('percent').innerText = percent + '%'
}
setInterval(() => {
  update()
}, 1000)
