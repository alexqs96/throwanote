/**
 * This function only works for fix the paper holes height only decorative
 * if the main height is higher than the html height
 * the html height is set to auto if not is set back to 100%
 * 
 * @returns HTML height 100% || auto
 */

const ExpandHeight = () => {  
  const htmlPage = document.getElementsByTagName('html')[0].clientHeight
  const mainPage = document.querySelector('main')?.scrollHeight

  if (mainPage && mainPage > htmlPage) {
    return document.getElementsByTagName('html')[0].style.height = 'auto'
  }
  else
  {
    return document.getElementsByTagName('html')[0].style.height = '100%'
  }

}

export default ExpandHeight
