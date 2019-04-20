/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

export interface Option<A> {
  get(): A;
  getOrElse<B>(defaultValue: B): A | B;
  pipe<B>(op: (value: A) => B): Option<B>;
  pipe<B>(op: (value: A) => Option<B>): Option<B>;
}
