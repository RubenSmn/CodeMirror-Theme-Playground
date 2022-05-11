import { useState, useEffect, useRef } from 'react';
import { EditorView, keymap, highlightActiveLine, highlightSpecialChars } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { defaultKeymap } from '@codemirror/commands';
import { defaultHighlightStyle } from '@codemirror/highlight';
import {lineNumbers} from '@codemirror/gutter';

const useCodeMirror = <T extends Element>(): [React.MutableRefObject<T | null>, EditorView?] => {
  const refContainer = useRef<T>(null);
  const [editorView, setEditorView] = useState<EditorView>();

  const standardState = EditorState.create({
    doc: 'Super Gaef, Wenky Benky',
    extensions: [
      keymap.of([...defaultKeymap]),
      lineNumbers(),
      highlightActiveLine(),
      highlightSpecialChars(),
      defaultHighlightStyle.fallback,
      EditorView.lineWrapping,
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
}

export default useCodeMirror;
