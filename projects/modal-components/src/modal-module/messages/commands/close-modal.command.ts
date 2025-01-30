import { PostboyGenericMessage } from '@artstesh/postboy';

export class CloseModalCommand extends PostboyGenericMessage {
  static ID: string = '48d74b9f-0874-46a6-9888-002dddf8101a';
  /**
   * Creates an instance of the class with the specified modal ID and a default result value.
   *
   * @param {string} modalId - The unique identifier for the modal.
   * @param {boolean} [result=false] - The result status, defaulting to false.
   */
  constructor(public modalId: string, public result: boolean = false) {
    super();
  }
}
