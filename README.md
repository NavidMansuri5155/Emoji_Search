# How To Make Emoji Search With React.js ?

<img src="https://navid5155.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625813916786%2F62qXnQYAU.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="logo don't copy..." />

EMOJI SEARCH REACT.JS

<hr />

I've made an Emoji Search with React.js. In which emoji comes by searching favourite emoji, And it's completely responsive, who gives as a card.

> NOTE : [@komal_bhatt](https://www.linkedin.com/in/komal-bhatt-a1779716a/?originalSubdomain=in) helped me in making this small project. I want to say my heartfelt thanks.

THANK YOU SO MUCH FOR HELP ME LOT OF : [@komal_bhatt](https://www.linkedin.com/in/komal-bhatt-a1779716a/?originalSubdomain=in) ❤️❤️😊❤️❤️

## Today we will know, how to make it.

First of all, I took the data, First of all, I took the data from the same hook, like this..


```javascript

{SearchFilter.slice(7, 50).map((emoji, index) => {
      return <div key={index} className="items">
    //..... you data, like {emoji.title}.. etc
    // i have import componenet <Card emoji={emoji}, index={index}     
     </div >
    
```

> Note: Don't forget to import your file of `JSON`

## And after that, I put up a search bar to help us by funding emoji...

```javascript
 constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }


  render() {
    const { search } = this.state;

    const SearchFilter = EmojiData.filter(item => {
      if (item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        return true
      if (item.keywords.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        return true
      return false
    })

```
<hr />

# Project Code 👨‍💻

Source Code:    https://github.com/NavidMansuri5155/Emoji_Search

<hr />

# Tech Stack 💻

<ul>
  <li>HOW TO MAKE EMOJI SEARCH APP.</li>
  <li>HOW TO IMPORT JSON FILES.</li>
  <li>HOW USE slice.</li>
  <li>HOW TO IMPORT FILE WITH PROPS.</li>
</ul>

<hr />
Thank you for reading 🙏

If you enjoyed this article or found it helpful, give it a thumbs-up 👍

Feel free to connect 👋

Thanks 😙
