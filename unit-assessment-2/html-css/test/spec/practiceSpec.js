//Helper Functions
const searchFiles = async (pathArr, strArr) => {
  const response = await axios.post(`http://localhost:5782/api/search`, {pathArr, strArr})
  return response.data
}

const checkFiles = async (pathArr, strArr) => {
  const response = await axios.post(`http://localhost:5782/api/check`, {pathArr, strArr})
  return response.data
}

//Test Suite
describe('Unit Assessment 2 -- HTML & CSS', () => {
  describe('The following HTML tags are used in index.html', () => {
    const htmlFile = ['html-css/index.html']

    it('section', async () => {
      const itemsToCheck = [
        '<section', 
        '</section>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('article', async () => {
      const itemsToCheck = [
        '<article',
        '</article>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('aside', async () => {
      const itemsToCheck = [
        '<aside',
        '</aside>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('main', async () => {
      const itemsToCheck = [
        '<main', 
        '</main>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('header', async () => {
      const itemsToCheck = [
        '<header', 
        '</header>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('nav', async () => {
      const itemsToCheck = [
        '<nav',
        '</nav>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('body', async () => {
      const itemsToCheck = [
        '<body',
        '</body>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('footer', async () => {
      const itemsToCheck = [
        '<footer', 
        '</footer>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('h1', async () => {
      const itemsToCheck = [
        '<h1', 
        '</h1>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('h2', async () => {
      const itemsToCheck = [
        '<h2',
        '</h2>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('br', async () => {
      const itemsToCheck = [
        '<br'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('img', async () => {
      const itemsToCheck = [
        '<img'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('ol', async () => {
      const itemsToCheck = [
        '<ol',
        '</ol>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('li', async () => {
      const itemsToCheck = [
        '<li', 
        '</li>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('title', async () => {
      const itemsToCheck = [
        '<title',
        '</title>'
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('meta tag with name, description, and content attributes', async () => {
      const itemsToCheck = [
        '<meta', 
        'name=',
        'description',
        'content='
      ]
      const response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })
  })



  describe('The following CSS properties and values are used in styles.css', () => {
    const cssFiles = ['html-css/styles.css']
   
    it('position', async () => {
      const itemsToCheck = [
        'position:'
      ]
      const response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('display', async () => {
      const itemsToCheck = [
        'display:'
      ]
      const response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('flex display', async () => {
      const itemsToCheck = [
        'display:flex'
      ]
      const response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('color', async () => {
      const itemsToCheck = [ 
        'color:'
      ]
      const response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('font-family', async () => {
      const itemsToCheck = [
        'font-family:'
      ]
      const response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('font-size', async () => {
      const itemsToCheck = [ 
        'font-size:'
      ]
      const response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('padding', async () => {
      const itemsToCheck = [
        'padding:'
      ]
      const response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('margin', async () => {
      const itemsToCheck = [
        'margin:'
      ]
      const response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('box-shadow', async () => {
      const itemsToCheck = [
        'box-shadow:'
      ]
      const response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('use at least one relative unit', async () => {
      const itemsToCheck = [
        '%;',
        'vw;',
        'vh;',
        'em;',
        'rem;'
      ]
      const response = await checkFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

  })

})