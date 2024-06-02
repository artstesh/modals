import {IdGenerator} from "../common/id.generator";
import {PipeTransform} from "@angular/core";
import {DialogPosition} from "@angular/material/dialog";

export class ModalSettings {
  /**
   * A unique identifier.
   *
   * @type {string}
   */
  id: string = IdGenerator.get();
  /**
   * Represents the title.
   *
   * @type {string}
   */
  title: string = 'Title';
  /**
   * The title for the cancel button.
   *
   * @type {string}
   */
  cancelTitle: string = 'Cancel';
  /**
   The title for the confirm dialog button.
   *
   * @type {string}
   */
  confirmTitle: string = 'Ok';
  /**
   * Indicates whether the cancellation button is visible or not.
   *
   * @type {boolean}
   * @default true
   */
  cancelVisible: boolean = true;
  /**
   * Indicates whether the confirmation button is visible or not.
   *
   * @type {boolean}
   */
  confirmVisible: boolean = true;
  /**
   * Represents the availability of the confirmation button.
   *
   * @type {boolean}
   */
  confirmAvailable: boolean = true;
  /**
   * Represents the CSS class for the dialog panel.
   *
   * @type {string}
   */
  panelClass: string = '';
  /**
   * Represents a pipe for translating the dialog title and buttons.
   *
   * @typedef {PipeTransform | null} translatePipe
   */
  translatePipe: PipeTransform | null = null;
  /**
   * Represents the position of a dialog.
   *
   * @typedef {object} DialogPosition
   * @property {number} top - The top position of the dialog in pixels.
   * @property {number} left - The left position of the dialog in pixels.
   */
  position: DialogPosition | undefined;
  /**
   * Indicates whether the close functionality is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disableClose: boolean = false;
  /**
   * Indicates whether a backdrop is present or not.
   *
   * @type {boolean}
   * @default true
   */
  hasBackdrop: boolean = true;

  /**
   * Copies the given ModalSettings object
   *
   * @param {ModalSettings} model - The ModalSettings object to be copied
   * @returns {ModalSettings} - A copy of the ModalSettings object
   */
  public static copy(model: ModalSettings): ModalSettings {
    const result = new ModalSettings();
    result.id = model.id;
    result.title = model.title;
    result.cancelTitle = model.cancelTitle;
    result.confirmTitle = model.confirmTitle;
    result.cancelVisible = model.cancelVisible;
    result.confirmVisible = model.confirmVisible;
    result.panelClass = model.panelClass;
    result.confirmAvailable = model.confirmAvailable;
    result.translatePipe = model.translatePipe;
    result.position = model.position;
    result.disableClose = model.disableClose;
    result.hasBackdrop = model.hasBackdrop;
    return result;
  }

  setTranslatePipe(translatePipe: PipeTransform | null): ModalSettings {
    return ModalSettings.copy({...this, translatePipe});
  }

  /**
   * Sets the id of the ModalSettings object.
   *
   * @param {string} id - The id to be set for the ModalSettings.
   * @return {ModalSettings} - The updated ModalSettings object.
   */
  setId(id: string): ModalSettings {
    return ModalSettings.copy({...this, id});
  }

  /**
   * Sets the availability of the confirm button.
   *
   * @param {boolean} confirmAvailable - Indicates whether the confirm button should be available or not.
   *
   * @returns {ModalSettings} - The updated modal settings.
   */
  setConfirmAvailable(confirmAvailable: boolean): ModalSettings {
    return ModalSettings.copy({...this, confirmAvailable});
  }

  /**
   * Sets the panel class for the modal settings.
   *
   * @param {string} panelClass - The class name to be set for the modal panel.
   *
   * @return {ModalSettings} - The updated modal settings object.
   */
  setPanelClass(panelClass: string): ModalSettings {
    return ModalSettings.copy({...this, panelClass});
  }

  /**
   * Sets the visibility of the confirm dialog in the modal settings.
   *
   * @param {boolean} confirmVisible - Boolean value indicating whether the confirm dialog should be visible or not.
   * @returns {ModalSettings} - A new ModalSettings object with the updated confirmVisible value.
   */
  setConfirmVisible(confirmVisible: boolean): ModalSettings {
    return ModalSettings.copy({...this, confirmVisible});
  }

  /**
   * Sets the visibility of the cancel button in the modal settings.
   *
   * @param {boolean} cancelVisible - The visibility of the cancel button.
   * @return {ModalSettings} - The modified modal settings object.
   */
  setCancelVisible(cancelVisible: boolean): ModalSettings {
    return ModalSettings.copy({...this, cancelVisible});
  }

  /**
   * Sets the confirm title of the ModalSettings object.
   *
   * @param {string} confirmTitle - The new confirm title.
   * @return {ModalSettings} - The updated ModalSettings object.
   */
  setConfirmTitle(confirmTitle: string): ModalSettings {
    return ModalSettings.copy({...this, confirmTitle});
  }

  /**
   * Sets the cancel title of the modal settings.
   *
   * @param {string} cancelTitle - The cancel title for the modal.
   * @returns {ModalSettings} - The updated modal settings object.
   */
  setCancelTitle(cancelTitle: string): ModalSettings {
    return ModalSettings.copy({...this, cancelTitle});
  }

  /**
   * Sets the title of the ModalSettings.
   *
   * @param {string} title - The new title for the ModalSettings.
   * @return {ModalSettings} - A new instance of ModalSettings with the updated title.
   */
  setTitle(title: string): ModalSettings {
    return ModalSettings.copy({...this, title});
  }
  /**
   * Sets the position of the dialog within the modal settings.
   *
   * @param {DialogPosition | null} position - The position to set. Pass `null` to remove the position.
   * @return {ModalSettings} - The updated modal settings object.
   */
  setPosition(position: DialogPosition | null): ModalSettings {
    return ModalSettings.copy({...this, position});
  }
  /**
   * Sets the value for disableClose property in the ModalSettings object.
   * @param {boolean} disableClose - The new value for the disableClose property.
   * @returns {ModalSettings} - A new ModalSettings object with the updated disableClose property.
   */
  setDisableClose(disableClose: boolean): ModalSettings {
    return ModalSettings.copy({...this, disableClose});
  }
  /**
   * Sets the value of `hasBackdrop` property in the `ModalSettings` object.
   *
   * @param {boolean} hasBackdrop - The new value for the `hasBackdrop` property.
   * @return {ModalSettings} - The modified `ModalSettings` object with the updated `hasBackdrop` property.
   */
  setHasBackdrop(hasBackdrop: boolean): ModalSettings {
    return ModalSettings.copy({...this, hasBackdrop});
  }

  /**
   * Checks if the given ModalSettings object is identical to the current object.
   *
   * @param {ModalSettings} model - The ModalSettings object to compare with.
   * @return {boolean} - Returns true if the given object is identical to the current object, otherwise false.
   */
  public isSame(model: ModalSettings): boolean {
    if (this.id !== model.id) return false;
    if (this.title !== model.title) return false;
    if (this.cancelTitle !== model.cancelTitle) return false;
    if (this.confirmTitle !== model.confirmTitle) return false;
    if (this.cancelVisible !== model.cancelVisible) return false;
    if (this.confirmVisible !== model.confirmVisible) return false;
    if (this.panelClass !== model.panelClass) return false;
    if (this.confirmAvailable !== model.confirmAvailable) return false;
    if (this.translatePipe !== model.translatePipe) return false;
    if (this.position !== model.position) return false;
    if (this.disableClose !== model.disableClose) return false;
    if (this.hasBackdrop !== model.hasBackdrop) return false;
    return true;
  }
}
