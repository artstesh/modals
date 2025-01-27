import { PostboyCallbackMessage } from '@artstesh/postboy';

export class OpenModalCommand extends PostboyCallbackMessage<boolean> {
  /**
   * @class
   * @param {string} modalId - The ID of the modal to be opened.
   * @constructor
   */
  constructor(public modalId: string) {
    super();
  }
}
