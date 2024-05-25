import {PostboyGenericMessage} from "@artstesh/postboy";

export class CloseModalCommand extends PostboyGenericMessage{
  public static readonly ID = '500685d5-fd3b-4c54-964e-46b5f7bea056';
  public get id(): string {
    return CloseModalCommand.ID;
  }
  /**
   * @class
   * @param {string} modalId - The ID of the modal to be closed.
   * @constructor
   */
  constructor(public modalId: string) {
    super();
  }
}
