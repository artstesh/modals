import {PostboyGenericMessage} from "@artstesh/postboy";

export class CloseAllModalsCommand extends PostboyGenericMessage{
  public static readonly ID = '688440cd-4d99-4d39-912b-f9330b040859';
  public get id(): string {
    return CloseAllModalsCommand.ID;
  }
  constructor() {
    super();
  }
}
