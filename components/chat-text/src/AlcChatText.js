// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
export class AlcChatText extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      avatar: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
  }

  render() {
    return html`
      <img class="icon" alt="${this.title}" src="${this.avatar}" />
      <div class="text">
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
        padding: 4px 8px;
      }

      .icon {
        width: 24px;
        margin: 0 5px;
      }
      .text {
        padding: 16px;
        background-color: var(--alc-chat-text-text-bg, #52ca9c);
        color: var(--alc-chat-text-text-color, #000);
        border-radius: var(--alc-chat-text-radius, 8px 8px 8px 0);
        font-size: var(--alc-chat-text-text-font-size, 16px);
        word-break: break-word;
      }

      :host(.bot) .text {
        background-color: var(--alc-chat-text-text-bg-bot, #f3f7f9);
        color: var(--alc-chat-text-text-bg-bot, #000);
      }

      @media (max-width: 768px) {
        :host(.bot) {
          flex-direction: row-reverse;
        }
      }
    `;
  }
}
