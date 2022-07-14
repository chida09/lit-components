import { LitElement } from 'lit';
export declare class BaseButton extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'base-button': BaseButton;
    }
}
