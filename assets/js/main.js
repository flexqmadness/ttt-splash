const getData = async (fileURI) => {
  try {
    const data = await fetch(fileURI)
    return await data.json()
  }
  catch (error) { throw new Error(`Couldn't fetch data: ${error}`) }
}

const getRandomArrayEntry = (data) => data[Math.floor(Math.random() * data.length)]

const setSplashMessage = (elementID, message) => {
  const splashMessage = document.getElementById(elementID)

  try {
    splashMessage.innerText = message
  }
  catch (error) { throw new Error(`Failed to set splash message: ${error}`) }
}

const setSplashBackground = (elementID, imageName) => {
  const splashBackground = document.getElementById(elementID)
  if (splashBackground) {
    splashBackground.src = `assets/img/${imageName}`
  }
}

;(async function (){

  const splashes = await getData('assets/splashes.json')
  const splashObj = getRandomArrayEntry(splashes)
  if(splashObj.image) setSplashBackground('js-splash-background', splashObj.image)
  setSplashMessage('js-splash-message', splashObj.text)

  return
})()
