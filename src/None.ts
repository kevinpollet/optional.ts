/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";
import { Matcher } from "./Matcher";

// TODO check typescript type system
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class None implements Option<any> {
  static readonly INSTANCE = new None();

  private constructor() {} // eslint-disable-line

  exists(): boolean {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter(): Option<any> {
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterNot(): Option<any> {
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  flatMap<B>(): Option<B> {
    return this;
  }

  // eslint-disable-line @typescript-eslint/no-explicit-any
  get(): never {
    throw new NoSuchElementError();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getOrElse(defaultValue: any): any {
    return defaultValue;
  }

  isEmpty(): boolean {
    return true;
  }

  isDefined(): boolean {
    return false;
  }

  map<B>(): Option<B> {
    const cast = this as unknown;
    return cast as Option<B>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match<B>(matcher: Matcher<any, B>): B {
    return matcher.none();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  orElse(f: () => Option<any>): Option<any> {
    return f();
  }

  orUndefined(): undefined {
    return undefined;
  }
}
