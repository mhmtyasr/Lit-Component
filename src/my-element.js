import { LitElement, html, css } from "lit";

export class MyElement extends LitElement {
  static properties = {
    title: {},
    carouselItem: [],
    showDots: "true",
    isTransparent: "false",
  };
  static styles = css`
    .carouselSection {
      background-color: #eef2ff;
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 80px 0 60px 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    @media screen and (max-width: 480px) {
      .carouselSection {
        padding: 60px 16px 86px 16px;
        height: 100%;
      }
    }

    .carouselSection > .carouselHeader {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    @media screen and (max-width: 480px) {
      .carouselSection > .carouselHeader {
        text-align: center;
      }
    }

    .carouselSection > .carouselHeader > h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 140%;
      margin: 0px;
    }

    .carouselSection > .carouselHeader > p {
      margin: 24px 0 0 0;
      font-weight: 400;
      font-size: 24px;
      line-height: 150%;
    }

    .carouselSection > .carouselBody {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 64px 0 40px 0;
      width: 100%;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      /*// IE 10+*/
      overflow: -moz-scrollbars-none;
      /*// Firefox*/
      overflow-y: scroll;
    }

    .carouselSection > .carouselBody::-webkit-scrollbar {
      display: none;
      /*Safari and Chrome*/
    }

    .carouselSection > .carouselBody.transparent > .card {
      background-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
      padding: 5px 0 0 0;
    }

    @media screen and (max-width: 480px) {
      .carouselSection > .carouselBody {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        width: initial;
        padding-bottom: 48px;
      }
    }

    .carouselSection > .carouselBody > .card {
      width: 432px;
      min-width: 432px;
      padding: 24px;
      margin-right: 40px;
      background-color: white;
      border-radius: 10px;
      -webkit-box-shadow: 0px 2px 4px rgba(17, 24, 39, 0.06),
        0px 4px 6px rgba(17, 24, 39, 0.1);
      box-shadow: 0px 2px 4px rgba(17, 24, 39, 0.06),
        0px 4px 6px rgba(17, 24, 39, 0.1);
    }

    .carouselSection > .carouselBody > .card:first-child {
      margin-left: 80px;
    }

    .carouselSection > .carouselBody > .card:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 480px) {
      .carouselSection > .carouselBody > .card {
        margin: 0px;
        min-width: calc(100% - 48px);
        width: calc(100% - 48px);
        margin-bottom: 25px;
      }
      .carouselSection > .carouselBody > .card:first-child {
        margin-left: 0;
      }
    }

    .carouselSection > .carouselBody > .card > h3 {
      margin-top: 23px;
      color: #0c111d;
    }

    @media screen and (max-width: 480px) {
      .carouselSection > .carouselBody > .card > h3 {
        margin-top: 15px;
      }
    }

    .carouselSection > .carouselBody > .card > p {
      margin: 0px;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }

    .carouselSection > .carouselBody > .card > .btn-group {
      margin-top: 24px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    @media screen and (max-width: 480px) {
      .carouselSection > .carouselBody > .card > .btn-group {
        margin-top: 16px;
      }
    }

    .carouselSection > .carouselBody > .card > .btn-group > button {
      margin-right: 11px;
      padding: 0px;
      background-color: transparent;
      color: #4f46e5;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      border: none;
    }

    .carouselSection > .carouselBody > .card > .btn-group > button:hover {
      cursor: pointer;
    }

    .carouselSection > .carouselDot {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline;
      margin-bottom: 69px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    @media screen and (max-width: 480px) {
      .carouselSection > .carouselDot {
        display: none;
      }
    }

    .carouselSection > .carouselDot > img:first-child {
      margin-right: 73px;
    }

    .carouselSection > .carouselDot > img:last-child {
      margin-left: 73px;
    }

    .carouselSection > .carouselDot > .ellipseGroup {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .carouselSection > .carouselDot > .ellipseGroup > img {
      margin-right: 12px;
    }

    .carouselSection > .carouselDot > .ellipseGroup > img:last-child {
      margin-right: 0px;
    }

    .carouselSection > button {
      width: 88px;
      height: 40px;
      background-color: transparent;
      color: #4f46e5;
      border: 1px solid #4f46e5;
      border-radius: 4px;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
    }

    .carouselSection > button:hover {
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.title = "";
    this.description = "";
  }

  render() {
    debugger;
    return html`
      <section class="carouselSection">
        <div class="carouselHeader">
          <h1>${this.title}</h1>
          <p>Ut nesciunt recusandae consequatur voluptas nulla.</p>
        </div>
        <div
          class="carouselBody ${this.isTransparent === "true"
            ? "transparent"
            : ""}"
        >
          ${JSON.parse(this.carouselItem).map(
            (x) => html`<div class="card">
              <img src="./img/bttle.svg" alt="" />
              <h3>${x.title}</h3>
              <p>${x.description}</p>
              <div class="btn-group">
                <button>Button</button>
                <img src="./img/Vector.svg" alt="" />
              </div>
            </div>`
          )}
        </div>
        ${this.showDots === "true"
          ? html`<div class="carouselDot">
              <img src="./img/leftvector.svg" alt="" />
              <div class="ellipseGroup">
                <img src="./img/EllipseSelected.svg" alt="" />
                <img src="./img/Ellipse.svg" alt="" />
                <img src="./img/Ellipse.svg" alt="" />
              </div>
              <img src="./img/rightvector.svg" alt="" />
            </div>`
          : ""}

        <button>Button</button>
      </section>
    `;
  }
}
customElements.define("my-element", MyElement);
