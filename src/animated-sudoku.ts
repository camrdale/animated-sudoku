import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import './sudoku-square';
import {CellChangeEvent} from './sudoku-square';

enum EntryMode {
  Normal,
  Candidate,
}

/**
 * An animated Sudoku board.
 */
@customElement('animated-sudoku')
export class AnimatedSudoku extends LitElement {
  static override styles = css`
    :host {
      --cell-size: 10vmin;
      --border-size: 1px; // calc(var(--cell-size) * 0.05);
      --group-border-size: calc(var(--border-size) * 4);
    }

    :host .app {
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    :host .spacer {
      display: block;
      width: calc(var(--cell-size) * 1);
    }

    :host .controls {
      display: flex;
      align-items: stretch;
      justify-content: center;
      width: calc(var(--cell-size) * 4);
    }

    :host .grid {
      display: block;
      flex-direction: column;
      border: var(--border-size) solid black;
    }

    :host .row {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
    }

    :host .row[data-group-end] {
      border-bottom: var(--group-border-size) solid black;
    }

    :host .row[data-group-start] {
      border-top: var(--group-border-size) solid black;
    }

    :host .cell {
      width: var(--cell-size);
      height: var(--cell-size);
      border-left: var(--border-size) solid black;
      border-top: var(--border-size) solid black;
      background: white;
    }

    :host .cell[data-group-end] {
      border-right: var(--group-border-size) solid black;
    }

    :host .cell[data-group-start] {
      border-left: var(--group-border-size) solid black;
    }

    :host button {
      background-color: #fff;
      color: #ccc;
      border: 1px solid #ccc;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      outline: 0;
      font-size: calc(var(--cell-size) * 0.2);
      width: 50%;
      height: calc(var(--cell-size) * 0.5);
      text-align: center;
      cursor: pointer;
      -webkit-appearance: button;
      overflow: visible;
      line-height: 2;
      margin: 0;
    }

    :host button[data-active] {
      background-color: #000;
      color: #fff;
    }
  `;

  @state()
  protected _mode: EntryMode = EntryMode.Normal;

  @state()
  protected _cells = new Array<number>(81);

  @state()
  protected _candidates = new Array<number>(81);

  readonly onCellChange = (e: CellChangeEvent) => {
    switch (this._mode) {
      case EntryMode.Normal: {
        if (e.value < 0 || e.value > 9) {
          return;
        }
        const updateNeeded = e.value != this._cells[e.index];
        this._cells[e.index] = e.value;
        if (updateNeeded) {
          this.requestUpdate();
        }
        break;
      }
      case EntryMode.Candidate: {
        if (e.value < 1 || e.value > 9) {
          return;
        }
        const candidates = this._candidates[e.index];
        const candidateBit = 2 ** (e.value - 1);
        this._candidates[e.index] = candidateBit ^ candidates;
        this.requestUpdate();
        break;
      }
    }
  };

  readonly selectNormal = (_e: Event) => {
    this._mode = EntryMode.Normal;
  };

  readonly selectCandidate = (_e: Event) => {
    this._mode = EntryMode.Candidate;
  };

  override render() {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((y) => {
      const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((x) => {
        const index = y * 9 + x;
        const value = this._cells[index];
        const candidates = this._candidates[index];
        return html`
          <div
            class="cell"
            ?data-group-end="${x % 3 === 2}"
            ?data-group-start="${x === 0}"
          >
            <sudoku-square
              row=${y}
              column=${x}
              value=${value}
              candidates=${candidates}
              @cellchange="${this.onCellChange}"
            >
            </sudoku-square>
          </div>
        `;
      });
      return html`
        <div
          class="row"
          ?data-group-end="${y % 3 === 2}"
          ?data-group-start="${y === 0}"
        >
          ${cells}
        </div>
      `;
    });
    return html`
      <div class="app">
        <div class="grid">${rows}</div>
        <div class="spacer"></div>
        <div class="controls">
          <button
            type="button"
            ?data-active="${this._mode == EntryMode.Normal}"
            @click="${this.selectNormal}"
          >
            Normal
          </button>
          <button
            type="button"
            ?data-active="${this._mode == EntryMode.Candidate}"
            @click="${this.selectCandidate}"
          >
            Candidates
          </button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-sudoku': AnimatedSudoku;
  }
}
