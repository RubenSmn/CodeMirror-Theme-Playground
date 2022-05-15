import { useState, useEffect, useRef } from 'react';
import { EditorView, keymap, highlightActiveLine, highlightSpecialChars } from '@codemirror/view';
import { Compartment, EditorState } from '@codemirror/state';
import { defaultKeymap } from '@codemirror/commands';
import { defaultHighlightStyle, HighlightStyle } from '@codemirror/highlight';
import { lineNumbers } from '@codemirror/gutter';
import { javascript } from '@codemirror/lang-javascript';
import { docs } from './sample-docs';

const lang = new Compartment();
const theme = new Compartment();

const useCodeMirror = <T extends Element>(): [React.MutableRefObject<T | null>, EditorView?] => {
  const refContainer = useRef<T>(null);
  const [editorView, setEditorView] = useState<EditorView>();

  const standardState = EditorState.create({
    doc: docs['javascript-node'],
    extensions: [
      keymap.of([...defaultKeymap]),
      lineNumbers(),
      highlightActiveLine(),
      highlightSpecialChars(),
      lang.of(javascript()),
      theme.of(defaultHighlightStyle.fallback),
      EditorView.lineWrapping,
      EditorView.editable.of(false),
    ],
  });
  
  // to initialize the editor
  useEffect(() => {
    if (!refContainer.current) return;

    const view = new EditorView({
      state: standardState,
      parent: refContainer.current,
    });
    setEditorView(view);
  }, [refContainer]);

  return [refContainer, editorView];
};

export default useCodeMirror;

export const setTheme = (view: EditorView, newTheme: any) => {
  const style = HighlightStyle.define(newTheme);
  view.dispatch({
    effects: theme.reconfigure(style),
  });
};
