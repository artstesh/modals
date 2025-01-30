import { PostboyCallbackMessage } from '@artstesh/postboy';

export class OpenModalCommand extends PostboyCallbackMessage<boolean> {
  static ID: string = 'e66f1af7-702d-432a-a6a7-522515cf50f3';
  /**
   * @class
   * @param {string} modalId - The ID of the modal to be opened.
   * @constructor
   */
  constructor(public modalId: string) {
    super();
  }
}
