import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('base-button')
export class BaseButton extends LitElement {
  static styles = css`
    button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    
    button:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    
    button:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }

    button:active {
        color: #3a8ee6;
        border-color: #3a8ee6;
        outline: none;
    }
  `

  @property({ type: String })
  name = ''

  render() {
    return html`
      <button part='button'>
        ${this.name}
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'base-button': BaseButton
  }
}
