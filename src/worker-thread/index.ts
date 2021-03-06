/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { HTMLAnchorElement } from './dom/HTMLAnchorElement';
import { HTMLButtonElement } from './dom/HTMLButtonElement';
import { HTMLDataElement } from './dom/HTMLDataElement';
import { HTMLEmbedElement } from './dom/HTMLEmbedElement';
import { HTMLFieldSetElement } from './dom/HTMLFieldSetElement';
import { HTMLFormElement } from './dom/HTMLFormElement';
import { HTMLIFrameElement } from './dom/HTMLIFrameElement';
import { HTMLImageElement } from './dom/HTMLImageElement';
import { HTMLInputElement } from './dom/HTMLInputElement';
import { HTMLLabelElement } from './dom/HTMLLabelElement';
import { HTMLLinkElement } from './dom/HTMLLinkElement';
import { HTMLMapElement } from './dom/HTMLMapElement';
import { HTMLMeterElement } from './dom/HTMLMeterElement';
import { HTMLModElement } from './dom/HTMLModElement';
import { HTMLOListElement } from './dom/HTMLOListElement';
import { HTMLOptionElement } from './dom/HTMLOptionElement';
import { HTMLProgressElement } from './dom/HTMLProgressElement';
import { HTMLQuoteElement } from './dom/HTMLQuoteElement';
import { HTMLScriptElement } from './dom/HTMLScriptElement';
import { HTMLSelectElement } from './dom/HTMLSelectElement';
import { HTMLSourceElement } from './dom/HTMLSourceElement';
import { HTMLStyleElement } from './dom/HTMLStyleElement';
import { HTMLTableCellElement } from './dom/HTMLTableCellElement';
import { HTMLTableColElement } from './dom/HTMLTableColElement';
import { HTMLTableElement } from './dom/HTMLTableElement';
import { HTMLTableRowElement } from './dom/HTMLTableRowElement';
import { HTMLTableSectionElement } from './dom/HTMLTableSectionElement';
import { HTMLTimeElement } from './dom/HTMLTimeElement';
import { createDocument } from './dom/Document';
import { WorkerDOMGlobalScope } from './WorkerDOMGlobalScope';
import { appendKeys } from './css/CSSStyleDeclaration';

declare var __ALLOW_POST_MESSAGE__: boolean;

const doc = createDocument(__ALLOW_POST_MESSAGE__ ? (self as DedicatedWorkerGlobalScope).postMessage : undefined);
export const workerDOM: WorkerDOMGlobalScope = {
  document: doc,
  addEventListener: doc.addEventListener.bind(doc),
  removeEventListener: doc.removeEventListener.bind(doc),
  localStorage: {},
  location: {},
  url: '/',
  appendKeys,
  HTMLAnchorElement: HTMLAnchorElement,
  HTMLButtonElement: HTMLButtonElement,
  HTMLDataElement: HTMLDataElement,
  HTMLEmbedElement: HTMLEmbedElement,
  HTMLFieldSetElement: HTMLFieldSetElement,
  HTMLFormElement: HTMLFormElement,
  HTMLIFrameElement: HTMLIFrameElement,
  HTMLImageElement: HTMLImageElement,
  HTMLInputElement: HTMLInputElement,
  HTMLLabelElement: HTMLLabelElement,
  HTMLLinkElement: HTMLLinkElement,
  HTMLMapElement: HTMLMapElement,
  HTMLMeterElement: HTMLMeterElement,
  HTMLModElement: HTMLModElement,
  HTMLOListElement: HTMLOListElement,
  HTMLOptionElement: HTMLOptionElement,
  HTMLProgressElement: HTMLProgressElement,
  HTMLQuoteElement: HTMLQuoteElement,
  HTMLScriptElement: HTMLScriptElement,
  HTMLSelectElement: HTMLSelectElement,
  HTMLSourceElement: HTMLSourceElement,
  HTMLStyleElement: HTMLStyleElement,
  HTMLTableCellElement: HTMLTableCellElement,
  HTMLTableColElement: HTMLTableColElement,
  HTMLTableElement: HTMLTableElement,
  HTMLTableRowElement: HTMLTableRowElement,
  HTMLTableSectionElement: HTMLTableSectionElement,
  HTMLTimeElement: HTMLTimeElement,
};

// workerDOM ends up being the window object.
// React now requires the classes to exist off the window object for instanceof checks.
