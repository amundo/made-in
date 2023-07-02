class LeaderBoard extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
<table>
<tr><td>kitchen</td><td>spoon</td><td>CHINA</td><td>Yesterday</td></tr>
<tr><td>kitchen</td><td>spoon</td><td>CHINA</td><td>Yesterday</td></tr>
</table>
    `    
    this.listen()
  }

  async fetch(url){
    let response = await fetch(url)
    let data = await response.json()
    this.data = data
  }

  connectedCallback(){

  }

  static get observedAttributes(){
    return ["src"]
  }

  attributeChangedCallback(attribute, oldValue, newValue){
    if(attribute == "src"){
      this.fetch(newValue)
    }
  }

  /*
  set data(data){
    this.whatever = data.whatever
    this.metadata = data.metadata
    this.render()
  }

  get data(){
    return {
      whatever: this.whatever,
      metadata: this.metadata
    }
  }
  */

  render(){
    // edit .innerHTML here
  }

  listen(){
    /* write event listeners here */
  }
}

export {LeaderBoard}
customElements.define('leader-board', LeaderBoard)
