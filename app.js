const template = document.createElement("template");
template.innerHTML = `
    <style>
    h3{
        color: lightblue;
    }
    .user-card {
        width: 200px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: space-start;
        background-color: black;
        color: white;
        border-radius: 20px
    }
    img {
        width: 200px;
        height: 200px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .info {
        margin-left: 5px;
    }
    </style>
    <div class="user-card">
        <div>
            <img>
            <div class="info">
                <h3></h3>
                <p class="email">Email:</p>
                <p class="phone">Phone</p>
            </div>
        </div>
    </div>
`;

class MsgGlobal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerHTML = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
    this.shadowRoot.querySelector(".email").innerHTML =
      this.getAttribute("email");
    this.shadowRoot.querySelector(".phone").innerHTML =
      this.getAttribute("phone");
  }
}

window.customElements.define("msg-global", MsgGlobal);
