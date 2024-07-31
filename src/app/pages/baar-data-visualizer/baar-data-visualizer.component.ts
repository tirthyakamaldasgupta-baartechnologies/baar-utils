import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-baar-data-visualizer',
  standalone: true,
  imports: [
    FormsModule,
    MonacoEditorModule
  ],
  templateUrl: './baar-data-visualizer.component.html',
  styleUrl: './baar-data-visualizer.component.css'
})
export class BaarDataVisualizerComponent {
  public monacoEditorOptions: any;

  public data: string;

  constructor(
  ) {
    this.data = '';

    this._initializeMonacoEditorOptions();
  }

  private _initializeMonacoEditorOptions(): void {
    this.monacoEditorOptions = {
      fontFamily: 'Menlo, monospace',
      fontSize: 14,
      minimap: {
        enabled: false
      },
      quickSuggestions: false,
      language: 'plaintext',
      // lineNumbers: 'off',
      parameterHints: {
        enabled: false
      },
      suggestOnTriggerCharacters: false,
      theme: 'vs-light',
      wordWrap: 'on'
    };
  }
}
