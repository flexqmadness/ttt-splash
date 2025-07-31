const getData = async (fileURI) => {
  try {
    const data = await fetch(fileURI)
    return await data.json()
  }
  catch (error) { throw new Error(`Couldn't fetch data: ${error}`) }
}

const getRandomArrayEntry = (data) => data[Math.floor(Math.random() * data.length)]

const getSplash = async () => getRandomArrayEntry(await getData('assets/splashes.json'))



;(async function (){

  const splashData    = await getSplash(),
        domText       = document.getElementById('js-splash-message'),
        domBackground = document.getElementById('js-splash-background')

  if (splashData.text && domText) {
    try { domText.innerText = splashData.text }
    catch (error) { throw new Error(`Failed to set splash text: ${error}`) }
  }

  if (splashData.image && domBackground) {
    try { domBackground.src = domBackground.src.replace('gmod-wallpaper.jpg', splashData.image) }
    catch (error) { throw new Error(`Failed to set splash image: ${error}`) }
  }

})()
