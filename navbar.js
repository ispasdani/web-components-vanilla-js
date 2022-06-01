(function () {
  const template = document.createElement("template");
  template.innerHTML = ` 
<style>
  .navbar {
    display: flex;
    align-items: center;
    background-color: lightblue;
    width: 100%;
    height: 10vh;
  }
  .ul-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    padding: 0;
    margin: 5px;
  
  }
  .ul-container {
    list-style-type: none;
  }
</style>
<div class="navbar">
    <ul class="ul-container">
        <li><a href="/">Socks</a></li>
        <li><a href="/">Jackets</a></li>
        <li><a href="/">Bags</a></li>
        <li><a href="/">Equipment</a></li>
        <li><a href="/">Inspiration</a></li>
    </ul>
</div>
`;

  class Navbar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  window.customElements.define("nav-bar", Navbar);
})();
