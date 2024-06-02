import {PostboyCallbackMessage} from "@artstesh/postboy";

export class OpenModalCommand extends PostboyCallbackMessage<boolean>{
  public static readonly ID = 'c99116e2-3fe2-44d6-bf91-612149540f80';
  public get id(): string {
    return OpenModalCommand.ID;
  }
  /**
   * @class
   * @param {string} modalId - The ID of the modal to be opened.
   * @constructor
   */
  constructor(public modalId: string) {
    super();
  }
}
