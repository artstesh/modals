import {Forger} from '@artstesh/forger';
import {should} from '@artstesh/it-should';
import {ModalSettings} from "./modal.settings";
import {PipeTransform} from "@angular/core";
import {DialogPosition} from "@angular/material/dialog";

describe('#models ModalSettings', () => {
  let model: ModalSettings;

  beforeEach(() => {
    model = ModalSettings.copy(Forger.create<ModalSettings>()!);
  });

  afterEach(() => {
    expect().nothing();
  });

  it('id is defined by default', () => {
    should().string(new ModalSettings().id).not.empty();
  });

  it('setId()', () => {
    const expected = Forger.create<string>()!;
    //
    model = model.setId(expected);
    //
    should().true(model.id === expected);
  });

  it('setTitle()', () => {
    const expected = Forger.create<string>()!;
    //
    model = model.setTitle(expected);
    //
    should().true(model.title === expected);
  });

  it('setCancelTitle()', () => {
    const expected = Forger.create<string>()!;
    //
    model = model.setCancelTitle(expected);
    //
    should().true(model.cancelTitle === expected);
  });

  it('setConfirmTitle()', () => {
    const expected = Forger.create<string>()!;
    //
    model = model.setConfirmTitle(expected);
    //
    should().true(model.confirmTitle === expected);
  });

  it('setPanelClass()', () => {
    const expected = Forger.create<string>()!;
    //
    model = model.setPanelClass(expected);
    //
    should().true(model.panelClass === expected);
  });

  it('setCancelVisible()', () => {
    const expected = Forger.create<boolean>()!;
    //
    model = model.setCancelVisible(expected);
    //
    should().true(model.cancelVisible === expected);
  });

  it('setConfirmVisible()', () => {
    const expected = Forger.create<boolean>()!;
    //
    model = model.setConfirmVisible(expected);
    //
    should().true(model.confirmVisible === expected);
  });

  it('setConfirmAvailable()', () => {
    const expected = Forger.create<boolean>()!;
    //
    model = model.setConfirmAvailable(expected);
    //
    should().true(model.confirmAvailable === expected);
  });

  it('setTranslatePipe()', () => {
    const expected: PipeTransform = {transform(value: any, ...args): any {}};
    //
    model = model.setTranslatePipe(expected);
    //
    should().true(model.translatePipe === expected);
  });

  it('setPosition()', () => {
    const expected = Forger.create<DialogPosition>()!;
    //
    model = model.setPosition(expected);
    //
    should().true(model.position === expected);
  });

  it('setDisableClose()', () => {
    const expected = Forger.create<boolean>()!;
    //
    model = model.setDisableClose(expected);
    //
    should().true(model.disableClose === expected);
  });

  it('setHasBackdrop()', () => {
    const expected = Forger.create<boolean>()!;
    //
    model = model.setHasBackdrop(expected);
    //
    should().true(model.hasBackdrop === expected);
  });

  describe('copy()', () => {
    it('success', () => {
      const other = ModalSettings.copy(model);
      //
      should()
        .objects(model, other)
        .rule('translatePipe', (o1, o2) => o1 === o2)
        .equal();
    });
  });

  describe('isSame()', () => {
    it('are same', () => {
      const other = ModalSettings.copy(model);
      //
      should().true(model.isSame(other));
    });

    it('different id', () => {
      const other = ModalSettings.copy(model);
      other.id = Forger.create<string>()!;
      //
      should().false(model.isSame(other));
    });

    it('different title', () => {
      const other = ModalSettings.copy(model);
      other.title = Forger.create<string>()!;
      //
      should().false(model.isSame(other));
    });

    it('different confirmTitle', () => {
      const other = ModalSettings.copy(model);
      other.confirmTitle = Forger.create<string>()!;
      //
      should().false(model.isSame(other));
    });

    it('different cancelTitle', () => {
      const other = ModalSettings.copy(model);
      other.cancelTitle = Forger.create<string>()!;
      //
      should().false(model.isSame(other));
    });

    it('different panelClass', () => {
      const other = ModalSettings.copy(model);
      other.panelClass = Forger.create<string>()!;
      //
      should().false(model.isSame(other));
    });

    it('different confirmVisible', () => {
      const other = ModalSettings.copy(model);
      other.confirmVisible = !model.confirmVisible;
      //
      should().false(model.isSame(other));
    });

    it('different cancelVisible', () => {
      const other = ModalSettings.copy(model);
      other.cancelVisible = !model.cancelVisible;
      //
      should().false(model.isSame(other));
    });

    it('different confirmAvailable', () => {
      const other = ModalSettings.copy(model);
      other.confirmAvailable = !model.confirmAvailable;
      //
      should().false(model.isSame(other));
    });

    it('different translatePipe', () => {
      const other = ModalSettings.copy(model);
      other.translatePipe = {transform(value: any, ...args): any {}};
      //
      should().false(model.isSame(other));
    });

    it('different translatePipe', () => {
      const other = ModalSettings.copy(model);
      other.position = Forger.create<DialogPosition>()!;
      //
      should().false(model.isSame(other));
    });

    it('different hasBackdrop', () => {
      const other = ModalSettings.copy(model);
      other.hasBackdrop = !model.hasBackdrop;
      //
      should().false(model.isSame(other));
    });

    it('different disableClose', () => {
      const other = ModalSettings.copy(model);
      other.disableClose = !model.disableClose;
      //
      should().false(model.isSame(other));
    });
  });
});
