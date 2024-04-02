import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';

export class CellChangeEvent extends Event {
  constructor(readonly index: number, readonly value: number) {
    super('cellchange');
  }
}

/**
 * A single square in a Sudoku board.
 *
 * @fires cellchange - Indicates when the value or candidates changes
 */
@customElement('sudoku-square')
export class SudokuSquare extends LitElement {
  static override styles = css`
    :host {
      --cell-size: 10vmin;
    }

    :host .input-value {
      border: 0;
      width: var(--cell-size);
      height: var(--cell-size);
      text-align: center;
      font-size: calc(var(--cell-size) * 0.8);
      padding: 0;
      cursor: default;
    }

    :host .input-value:focus {
      background-color: lightblue;
      outline: none;
    }

    :host .input-value.prefilled {
      background-color: lightgrey;
    }

    :host .input-value.conflict {
      background-color: lightcoral;
    }

    :host .input-value.conflict:focus {
      background-color: pink;
    }

    :host .input-value.prefilled.conflict {
      background-color: red;
    }

    :host table {
      width: var(--cell-size);
      height: var(--cell-size);
      font-size: calc(var(--cell-size) * 0.25);
      table-layout: fixed;
      color: lightgrey;
      text-align: center;
      cursor: default;
    }

    :host table:focus {
      background-color: lightblue;
      color: darkgrey;
      outline: none;
    }

    :host tr {
      height: calc(var(--cell-size) / 3.2);
    }
  `;

  /**
   * The row of the square.
   */
  @property({type: Number})
  row = 0;

  /**
   * The column of the square.
   */
  @property({type: Number})
  column = 0;

  /**
   * The value set in the square.
   */
  @property({type: Number})
  value = 0;

  /**
   * The square's value was prefilled.
   */
  @property({type: Boolean})
  prefilled = false;

  /**
   * The square contains a conflict.
   */
  @property({type: Boolean})
  conflict = false;

  /**
   * The candidate values for the square.
   */
  @property({type: Number})
  candidates = 0;

  readonly onKeyDown = (e: KeyboardEvent) => {
    let val = 0;
    if (e.key == 'Backspace' || e.key == 'Delete') {
      val = 0;
    } else {
      val = parseInt(e.key);
      if (isNaN(val)) {
        return;
      }
    }
    e.preventDefault();
    const index = this.row * 9 + this.column;
    this.dispatchEvent(new CellChangeEvent(index, val));
  };

  override render() {
    if (this.value == 0 && this.candidates > 0) {
      return this.renderCandidates();
    }
    return html`
      <div
        class="input-value ${this.conflict ? 'conflict' : ''} ${this.prefilled
          ? 'prefilled'
          : ''}"
        tabindex=${ifDefined(!this.prefilled ? '0' : undefined)}
        @keydown=${!this.prefilled ? this.onKeyDown : undefined}
      >
        ${this.value === 0 ? '' : this.value}
      </div>
    `;
  }

  private renderCandidates() {
    const rows = [0, 1, 2].map((y) => {
      const cells = [0, 1, 2].map((x) => {
        const val = y * 3 + x + 1;
        const candidateBit = 2 ** (val - 1);
        const candidate = (candidateBit & this.candidates) != 0;
        return html`
          <td @keydown="${this.onKeyDown}">${candidate ? val : undefined}</td>
        `;
      });
      return html`
        <tr @keydown="${this.onKeyDown}">
          ${cells}
        </tr>
      `;
    });
    return html`
      <table tabindex="0" @keydown="${this.onKeyDown}">
        ${rows}
      </table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sudoku-square': SudokuSquare;
  }
}
