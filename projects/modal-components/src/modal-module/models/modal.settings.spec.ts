import { Forger } from '@artstesh/forger';
import { should } from '@artstesh/it-should';
import {ModalSettings} from "./modal.settings";

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

  it('setShowButtons()', () => {
    const expected = Forger.create<boolean>()!;
    //
    model = model.setShowButtons(expected);
    //
    should().true(model.showButtons === expected);
  });

  it('setOnClose()', () => {
    const expected = (r: boolean)=>{};
    //
    model = model.setOnClose(expected);
    //
    should().true(model.onClose === expected);
  });

  describe('copy()', () => {
    it('success', () => {
      const other = ModalSettings.copy(model);
      console.log(other);
      console.log(model);
      //
      should()
        .objects(model, other)
        .rule('onClose', (o1, o2) => o1 === o2)
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

    it('different showButtons', () => {
      const other = ModalSettings.copy(model);
      other.showButtons = !model.showButtons;
      //
      should().false(model.isSame(other));
    });

    it('different onClose', () => {
      const other = ModalSettings.copy(model);
      other.onClose = r => {};
      //
      should().false(model.isSame(other));
    });
  });
});
