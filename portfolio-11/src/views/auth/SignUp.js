import { LitElement, html, css } from "lit";
import "../shared/layout";
// import "../../modules/signupform";

class SignUp extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
      description: { type: String },
    };
  }
  constructor() {
    super();
    this.heading = "Sign up";
    this.description = "Sign up for the compass of design";
  }
  render() {
    return html`
      <shared-layout heading=${this.heading} description=${this.description}>
        <sign-up-form></sign-up-form>
      </shared-layout>
    `;
  }
}

customElements.define("sign-up", SignUp);
