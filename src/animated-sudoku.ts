import {LitElement, html, css} from 'lit';
import {customElement, state, property} from 'lit/decorators.js';
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
      display: block;
      width: calc(var(--cell-size) * 4);
      font-size: calc(var(--cell-size) * 0.2);
    }

    :host .mode-selector {
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    :host .keyboard {
      display: flex;
      align-items: stretch;
      justify-content: center;
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

  @property({type: Boolean})
  autoCandidateMode = false;

  constructor() {
    super();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('s')) {
      const s = urlParams.get('s');
      if (s?.length != 81) {
        window.console.log('Failed to parse input sudoku board: ' + s);
        return;
      }
      for (let i = 0; i < 81; i++) {
        const val = parseInt(s.charAt(i));
        if (isNaN(val)) {
          window.console.log(
            'Failed to parse input sudoku square ' + i + ': ' + s.charAt(i)
          );
          return;
        }
        if (val > 0) {
          this._cells[i] = val;
        }
      }
    }
  }

  readonly onCellChange = (e: CellChangeEvent) => {
    switch (this._mode) {
      case EntryMode.Normal: {
        if (e.value < 0 || e.value > 9) {
          return;
        }
        const updateNeeded = e.value != this._cells[e.index];
        this._cells[e.index] = e.value;
        if (updateNeeded) {
          if (this.autoCandidateMode) {
            this.autoUpdateCandidates();
          }
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

  readonly autoCandidateModeChanged = (_e: Event) => {
    this.autoCandidateMode = !this.autoCandidateMode;
    if (!this.autoCandidateMode) {
      this._candidates = new Array<number>(81);
      return;
    }
    this.autoUpdateCandidates();
    this.requestUpdate();
  };

  private autoUpdateCandidates() {
    for (let index = 0; index < 81; index++) {
      let candidateBits = 0;
      const rowStart = index - (index % 9);
      for (let rowIndex = rowStart; rowIndex < rowStart + 9; rowIndex++) {
        if (rowIndex == index) {
          continue;
        }
        const val = this._cells[rowIndex];
        if (val > 0) {
          candidateBits |= 2 ** (val - 1);
        }
      }
      const columnStart = index % 9;
      for (let columnIndex = columnStart; columnIndex < 81; columnIndex += 9) {
        if (columnIndex == index) {
          continue;
        }
        const val = this._cells[columnIndex];
        if (val > 0) {
          candidateBits |= 2 ** (val - 1);
        }
      }
      const row = ~~(index / 9);
      const groupRowStart = row - (row % 3);
      const col = index % 9;
      const groupColStart = col - (col % 3);
      for (
        let groupRow = groupRowStart;
        groupRow < groupRowStart + 3;
        groupRow++
      ) {
        for (
          let groupCol = groupColStart;
          groupCol < groupColStart + 3;
          groupCol++
        ) {
          const groupIndex = groupRow * 9 + groupCol;
          if (groupIndex == index) {
            continue;
          }
          const val = this._cells[groupIndex];
          if (val > 0) {
            candidateBits |= 2 ** (val - 1);
          }
        }
      }
      this._candidates[index] = ~candidateBits & (2 ** 9 - 1);
    }
  }

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
          <div class="mode-selector">
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
          <div class="keyboard">
            <input
              type="checkbox"
              id="subscribeNews"
              name="subscribe"
              value="newsletter"
              .checked="${this.autoCandidateMode}"
              @change="${this.autoCandidateModeChanged}"
            />
            <label for="subscribeNews">Auto Candidate Mode</label>
          </div>
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
