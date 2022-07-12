import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('base-button')
export class BaseButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `

  // https://qiita.com/sugasaki/items/6e9c2b7d11c8824b3dc3#1-text-content
  @property()
  myProp: { type: String; attribute: 'my-prop' }
      /**
       * The number of times the button has been clicked.
       */
      | undefined

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <button @click=${this._onClick} part="button">
        <slot></slot>
      </button>
    `
  }

  private _onClick() {
    console.log('myProp', this.myProp)
    this.count++
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'base-button': BaseButton
  }
}
