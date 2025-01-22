import { PostboyGenericMessage } from '@artstesh/postboy';

export class CloseModalCommand extends PostboyGenericMessage {
  public static readonly ID = '500685d5-fd3b-4c54-964e-46b5f7bea056';
  public get id(): string {
    return CloseModalCommand.ID;
  }
  /**
   * Constructs an instance of the class and initializes properties.
   *
   * @param {string} modalId - The unique identifier for the modal.
   * @param {boolean} [result=false] - The result indicating the modal's state.
   */
  constructor(public modalId: string, public result = false) {
    super();
  }
}
