import { tags as t } from '@codemirror/highlight';

export const tagTree = {
  'comment': {
    'lineComment': {},
    'blockComment': {},
    'docComment': {},
  },
  'name': {
    'variableName': {},
    'typeName': {
      'tagName': {},
    },
    'propertyName': {
      'attributeName': {},
    },
    'className': {},
    'labelName': {},
    'namespace': {},
    'macroName': {},
  },
  'literal': {
    'string': {
      'docString': {},
      'character': {},
      'attributeValue': {},
    },
    'number': {
      'integer': {},
      'float': {},
    },
    'bool': {},
    'regexp': {},
    'escape': {},
    'color': {},
    'url': {},
  },
  'keyword': {
    'self': {},
    'null': {},
    'atom': {},
    'unit': {},
    'modifier': {},
    'operatorKeyword': {},
    'controlKeyword': {},
    'definitionKeyword': {},
    'moduleKeyword': {},
  },
  'operator': {
    'derefOperator': {},
    'arithmeticOperator': {},
    'logicOperator': {},
    'bitwiseOperator': {},
    'compareOperator': {},
    'updateOperator': {},
    'definitionOperator': {},
    'typeOperator': {},
    'controlOperator': {},
  },
  'punctuation': {
    'separator': {},
    'bracket': {
      'angleBracket': {},
      'squareBracket': {},
      'paren': {},
      'brace': {},
    },
  },
  'content': {
    'heading': {
      'heading1': {},
      'heading2': {},
      'heading3': {},
      'heading4': {},
      'heading5': {},
      'heading6': {},
    },
    'contentSeparator': {},
    'list': {},
    'quote': {},
    'emphasis': {},
    'strong': {},
    'link': {},
    'monospace': {},
    'strikethrough': {},
  },
  'inserted': {},
  'deleted': {},
  'changed': {},
  'invalid': {},
  'meta': {
    'documentMeta': {},
    'annotation': {},
    'processingInstruction': {},
  },
};

export const tagMap: { [index: string]: any } = {
  'comment': t.comment,
  'lineComment': t.lineComment,
  'blockComment': t.blockComment,
  'docComment': t.docComment,
  'name': t.name,
  'variableName': t.variableName,
  'typeName': t.typeName,
  'tagName': t.tagName,
  'propertyName': t.propertyName,
  'attributeName': t.attributeName,
  'className': t.className,
  'labelName': t.labelName,
  'namespace': t.namespace,
  'macroName': t.macroName,
  'literal': t.literal,
  'string': t.string,
  'docString': t.docString,
  'character': t.character,
  'attributeValue': t.attributeValue,
  'number': t.number,
  'integer': t.integer,
  'float': t.float,
  'bool': t.bool,
  'regexp': t.regexp,
  'escape': t.escape,
  'color': t.color,
  'url': t.url,
  'keyword': t.keyword,
  'self': t.self,
  'null': t.null,
  'atom': t.atom,
  'unit': t.unit,
  'modifier': t.modifier,
  'operatorKeyword': t.operatorKeyword,
  'controlKeyword': t.controlKeyword,
  'definitionKeyword': t.definitionKeyword,
  'moduleKeyword': t.moduleKeyword,
  'operator': t.operator,
  'derefOperator': t.derefOperator,
  'arithmeticOperator': t.arithmeticOperator,
  'logicOperator': t.logicOperator,
  'bitwiseOperator': t.bitwiseOperator,
  'compareOperator': t.compareOperator,
  'updateOperator': t.updateOperator,
  'definitionOperator': t.definitionOperator,
  'typeOperator': t.typeOperator,
  'controlOperator': t.controlOperator,
  'punctuation': t.punctuation,
  'separator': t.separator,
  'bracket': t.bracket,
  'angleBracket': t.angleBracket,
  'squareBracket': t.squareBracket,
  'paren': t.paren,
  'brace': t.brace,
  'content': t.content,
  'heading': t.heading,
  'heading1': t.heading1,
  'heading2': t.heading2,
  'heading3': t.heading3,
  'heading4': t.heading4,
  'heading5': t.heading5,
  'heading6': t.heading6,
  'contentSeparator': t.contentSeparator,
  'list': t.list,
  'quote': t.quote,
  'emphasis': t.emphasis,
  'strong': t.strong,
  'link': t.link,
  'monospace': t.monospace,
  'strikethrough': t.strikethrough,
  'inserted': t.inserted,
  'deleted': t.deleted,
  'changed': t.changed,
  'invalid': t.invalid,
  'meta': t.meta,
  'documentMeta': t.documentMeta,
  'annotation': t.annotation,
  'processingInstruction': t.processingInstruction,
};

export const syntaxMap: { [index: string]: {
  description: string,
  props: string[],
}} = {
  'comment': {
    description: 'a comment',
    props: ['color'],
  },
  'lineComment': {
    description: 'a line comment',
    props: ['color'],
  },
  'blockComment': {
    description: 'a block comment',
    props: ['color'],
  },
  'docComment': {
    description: 'a document comment',
    props: ['color'],
  },
  'name': {
    description: 'any kind of identifier',
    props: ['color'],
  },
  'variableName': {
    description: 'name of a variable',
    props: ['color'],
  },
  'typeName': {
    description: 'type of a variable',
    props: ['color'],
  },
  'tagName': {
    description: 'example: html, when defining the html tag in a css file',
    props: ['color'],
  },
  'propertyName': {
    description: 'a property/field of a variable',
    props: ['color'],
  },
  'attributeName': {
    description: 'attribute of a property',
    props: ['color'],
  },
  'className': {
    description: 'name of a class',
    props: ['color'],
  },
  'labelName': {
    description: 'a label name, exapmle: in markdown the syntax type in a codeblock',
    props: ['color'],
  },
  'namespace': {
    description: 'a namespace',
    props: ['color'],
  },
  'macroName': {
    description: 'name of a macro',
    props: ['color'],
  },
  'literal': {
    description: 'a literal',
    props: ['color'],
  },
  'string': {
    description: 'a string',
    props: ['color'],
  },
  'docString': {
    description: 'a doc string',
    props: ['color'],
  },
  'character': {
    description: '',
    props: ['color'],
  },
  'attributeValue': {
    description: '',
    props: ['color'],
  },
  'number': {
    description: 'a number',
    props: ['color'],
  },
  'integer': {
    description: 'an integer',
    props: ['color'],
  },
  'float': {
    description: 'an float',
    props: ['color'],
  },
  'bool': {
    description: 'an boolean',
    props: ['color'],
  },
  'regexp': {
    description: 'a regular expression',
    props: ['color'],
  },
  'escape': {
    description: '',
    props: ['color'],
  },
  'color': {
    description: 'a color hex value',
    props: ['color'],
  },
  'url': {
    description: 'an url',
    props: ['color'],
  },
  'keyword': {
    description: 'an keyword, predefined by a language: function, var, etc..',
    props: ['color'],
  },
  'self': {
    description: '',
    props: ['color'],
  },
  'null': {
    description: 'null',
    props: ['color'],
  },
  'atom': {
    description: 'used in css',
    props: ['color'],
  },
  'unit': {
    description: 'unit in css: px, em, etc..',
    props: ['color'],
  },
  'modifier': {
    description: 'keyword for behaviour of a function, java: public, static, etc..',
    props: ['color'],
  },
  'operatorKeyword': {
    description: '',
    props: ['color'],
  },
  'controlKeyword': {
    description: 'keyword that controls if something happens: if, else, while, etc..',
    props: ['color'],
  },
  'definitionKeyword': {
    description: 'predefined keyword: class, def, function, etc..',
    props: ['color'],
  },
  'moduleKeyword': {
    description: 'import keywords',
    props: ['color'],
  },
  'operator': {
    description: 'operator',
    props: ['color'],
  },
  'derefOperator': {
    description: 'an operator that defines something',
    props: ['color'],
  },
  'arithmeticOperator': {
    description: '',
    props: ['color'],
  },
  'logicOperator': {
    description: 'logical operator',
    props: ['color'],
  },
  'bitwiseOperator': {
    description: 'bitwise operator',
    props: ['color'],
  },
  'compareOperator': {
    description: 'comparison operator',
    props: ['color'],
  },
  'updateOperator': {
    description: 'update operator',
    props: ['color'],
  },
  'definitionOperator': {
    description: 'operator that assign something',
    props: ['color'],
  },
  'typeOperator': {
    description: 'type-related operator',
    props: ['color'],
  },
  'controlOperator': {
    description: 'control operator',
    props: ['color'],
  },
  'punctuation': {
    description: 'punctuation',
    props: ['color'],
  },
  'separator': {
    description: 'a separator: such as a comma(,)',
    props: ['color'],
  },
  'bracket': {
    description: 'a bracket',
    props: ['color'],
  },
  'angleBracket': {
    description: 'usually < and >',
    props: ['color'],
  },
  'squareBracket': {
    description: 'usually [ and ]',
    props: ['color'],
  },
  'paren': {
    description: 'usually ( and )',
    props: ['color'],
  },
  'brace': {
    description: 'usually { and }',
    props: ['color'],
  },
  'content': {
    description: 'content, example: text in a markdown file',
    props: ['color'],
  },
  'heading': {
    description: 'a heading',
    props: ['color', 'fontWeight'],
  },
  'heading1': {
    description: 'heading 1',
    props: ['color'],
  },
  'heading2': {
    description: 'heading 2',
    props: ['color'],
  },
  'heading3': {
    description: 'heading 3',
    props: ['color'],
  },
  'heading4': {
    description: 'heading 4',
    props: ['color'],
  },
  'heading5': {
    description: 'heading 5',
    props: ['color'],
  },
  'heading6': {
    description: 'heading 6',
    props: ['color'],
  },
  'contentSeparator': {
    description: 'in markdown: ---',
    props: ['color'],
  },
  'list': {
    description: 'a list, does not work with ordered list',
    props: ['color'],
  },
  'quote': {
    description: 'a quote',
    props: ['color'],
  },
  'emphasis': {
    description: 'emphasis',
    props: ['color', 'fontStyle'],
  },
  'strong': {
    description: 'strong',
    props: ['color', 'fontWeight'],
  },
  'link': {
    description: 'a link',
    props: ['color', 'textDecoration'],
  },
  'monospace': {
    description: 'monospaced text, in between ``',
    props: ['color'],
  },
  'strikethrough': {
    description: 'strikethrough text',
    props: ['color', 'textDecoration'],
  },
  'inserted': {
    description: '',
    props: ['color'],
  },
  'deleted': {
    description: '',
    props: ['color'],
  },
  'changed': {
    description: '',
    props: ['color'],
  },
  'invalid': {
    description: '',
    props: ['color'],
  },
  'meta': {
    description: 'meta',
    props: ['color'],
  },
  'documentMeta': {
    description: 'documenet meta',
    props: ['color'],
  },
  'annotation': {
    description: 'annotation',
    props: ['color'],
  },
  'processingInstruction': {
    description: 'example: in c++, #incldue',
    props: ['color'],
  },
};

export const editorMap: { [index: string]: {
  identifier: string,
  description: string,
  props: string[],
}} = {
  'editor': {
    identifier: '&',
    description: 'the editor',
    props: ['backgroundColor', 'color'],
  },
  'cursor': {
    identifier: '.cm-content',
    description: 'the cursor',
    props: ['caretColor'],
  },
  'gutters': {
    identifier: '.cm-gutters',
    description: 'line number bar',
    props: ['backgroundColor', 'color', 'borderRight'],
  },
  'selection': {
    identifier: '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection',
    description: 'current selection',
    props: ['backgroundColor', 'color'],
  },
  'active line': {
    identifier: '.cm-activeLine',
    description: 'line the cursor is on',
    props: ['backgroundColor', 'color'],
  },
  'active line gutter': {
    identifier: '.cm-selectionMatch',
    description: 'gutter on the active line',
    props: ['backgroundColor'],
  },
  'panels': {
    identifier: '.cm-panels',
    description: 'the panels at the top/bottom of the editor',
    props: ['backgroundColor', 'color'],
  },
  'panels top': {
    identifier: '.cm-panels.cm-panels-top',
    description: 'panels at the top of the editor',
    props: ['backgroundColor', 'borderBottom'],
  },
  'panels bottom': {
    identifier: '.cm-panels.cm-panels-bottom',
    description: 'panels at the bottom of the editor',
    props: ['backgroundColor', 'borderTop'],
  },
  'search match': {
    identifier: '.cm-searchMatch',
    description: 'color of the matches found',
    props: ['backgroundColor', 'outline'],
  },
  'search match selected': {
    identifier: '.cm-searchMatch.cm-searchMatch-selected',
    description: 'color the selected search match',
    props: ['backgroundColor'],
  },
  'selection match': {
    identifier: '.cm-selectionMatch',
    description: 'other matches of the selected text',
    props: ['backgroundColor', 'color'],
  },
};

export const standardEditorTheme = {
  '&': { 'color': '#624237', 'backgroundColor': '#D7CAB2' },
  '.cm-content': { caretColor: '#fff6ef' },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': { backgroundColor: '#EEEEEE' },
  '.cm-panels': { backgroundColor: '#D7CAB2', color: '#879900' },
  '.cm-panels.cm-panels-top': { borderBottom: '#000000' },
  '.cm-panels.cm-panels-bottom': { borderTop: '#000000' },
  '.cm-searchMatch': { backgroundColor: '#72a1ff59', outline: '1px solid #457dff' },
  '.cm-searchMatch.cm-searchMatch-selected': { backgroundColor: '#6199ff2f' },
  '.cm-activeLine': { backgroundColor: '#C8B593' },
  '.cm-selectionMatch': { backgroundColor: '#aafe661a' },
  '.cm-gutters': { backgroundColor: '#D7CAB2', color: '#000000', borderRight: '1px solid #000000' },
  '.cm-activeLineGutter': { backgroundColor: '#C8B593' },
};

export const standardSyntaxTheme = {
  'keyword': {tag: t.keyword, color: '#c01b1b'},
  'name': {tag: t.name, color: '#888888'},
  'deleted': {tag: t.deleted, color: '#888888'},
  'propertyName': {tag: t.propertyName, color: '#888888'},
  'macroName': {tag: t.macroName, color: '#888888'},
  'variableName': {tag: t.variableName, color: '#888888'},
  'labelname': {tag: t.labelName, color: '#888888'},
  'color': {tag: t.color, color: '#ffff00'},
  'definition': {tag: t.separator, color: '#624237'},
  'typeName': {tag: t.typeName, color: '#1a7c2c'},
  'className': {tag: t.className, color: '#1a7c2c'},
  'number': {tag: t.number, color: '#1a7c2c'},
  'changed': {tag: t.changed, color: '#1a7c2c'},
  'annotation': {tag: t.annotation, color: '#1a7c2c'},
  'modifier': {tag: t.modifier, color: '#1a7c2c'},
  'self': {tag: t.self, color: '#1a7c2c'},
  'namespace': {tag: t.namespace, color: '#1a7c2c'},
  'operator': {tag: t.operator, color: '#c01b1b'},
  'operatorKeyword': {tag: t.operatorKeyword, color: '#c01b1b'},
  'url': {tag: t.url, color: '#c01b1b'},
  'escape': {tag: t.escape, color: '#c01b1b'},
  'regexp': {tag: t.regexp, color: '#c01b1b'},
  'meta': {tag: t.meta, color: '#2f4dcc' },
  'comment': {tag: t.comment, color: '#2f4dcc' },
  'strong': {tag: t.strong, fontWeight: 'bold'},
  'emphasis': {tag: t.emphasis, fontStyle: 'italic'},
  'link': {tag: t.link, color: '#879900'},
  'heading': {tag: t.heading, fontWeight: 'bold'},
  'atom': {tag: t.atom, color: '#86812f' },
  'bool': {tag: t.bool, color: '#86812f' },
  'processingInstruction': {tag: t.processingInstruction, color: '#86812f'},
  'string': {tag: t.string, color: '#86812f'},
  'inserted': {tag: t.inserted, color: '#86812f'},
  'invalid': {tag: t.invalid, color: '#ffffff'},
};

export const propRules: {
  [index: string]: RegExp,
}= {
  'color': /^#(?:[a-f0-9]{3}|[a-f0-9]{6})$|^$/i,
  'backgroundColor': /^#(?:[a-f0-9]{3}|[a-f0-9]{6})$|^$/i,
  'caretColor': /^#(?:[a-f0-9]{3}|[a-f0-9]{6})$|^$/i,
  'fontWeight': /^(?:normal|lighter|bold|bolder|[1-9]00|)$/i,
  'fontStyle': /^(?:normal|italic|oblique|)$/i,
  'textDecoration': /^(?:underline|overline|line-through|blink|)$/i,
  'outline': /.*/i,
  'borderRight': /.*/i,
  'borderTop': /.*/i,
  'borderBottom': /.*/i,
};

export const propPlaceholder: {
  [index: string]: string,
} = {
  'color': '#ff3',
  'backgroundColor': '#842f11',
  'caretColor': '#ffffff',
  'fontWeight': 'bold',
  'fontStyle': 'italic',
  'textDecoration': 'underline',
  'outline': '',
  'borderRight': '',
  'borderTop': '',
  'borderBottom': '',
};
