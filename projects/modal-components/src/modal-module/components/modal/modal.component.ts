import {ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {DestructibleComponent} from "../../common/destructible.component";
import {ModalPostboyService} from "../../services/modal-postboy.service";
import {ModalSettings} from "../../models";
import {CloseAllModalsCommand, OpenModalCommand} from "../../messages";
import {auditTime, filter} from "rxjs/operators";
import {CloseModalCommand} from "../../messages/commands/close-modal.command";

@Component({
  selector: 'art-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent extends DestructibleComponent implements OnInit {
  DialogPanelClass = 'art-modal-dialog';
  backdropClass: string = '';
  panelClass: string = '';
  visible: boolean = false;
  command?: OpenModalCommand;

  _settings: ModalSettings = new ModalSettings();

  @Input() set settings(value: ModalSettings | undefined) {
    if (!value || this._settings.isSame(value)) return;
    this._settings = value;
    this.detector.detectChanges();
  }

  constructor(private postboy: ModalPostboyService,
              private detector: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.subs.push(this.postboy.subscribe<OpenModalCommand>(OpenModalCommand.ID)
      .pipe(filter(cmd => cmd.modalId === this._settings.id), auditTime(100))
      .subscribe(cmd => this.open(cmd)));
    this.subs.push(this.postboy.subscribe<CloseModalCommand>(CloseModalCommand.ID)
      .pipe(filter(cmd => cmd.modalId === this._settings.id))
      .subscribe(() => this.close(false)));
    this.subs.push(this.postboy.subscribe<CloseAllModalsCommand>(CloseAllModalsCommand.ID)
      .subscribe(() => this.close(false)));
  }

  open(cmd: OpenModalCommand): void {
    this.close(false);
    this.command = cmd;
    this.visible = true;
    this.backdropClass= this._settings.panelClass.length ? `${this._settings.panelClass}-backdrop ${this.DialogPanelClass}-backdrop` : `${this.DialogPanelClass}-backdrop`;
    this.panelClass= this._settings.panelClass.length ? `${this._settings.panelClass}-backdrop ${this.DialogPanelClass}` : this.DialogPanelClass;
    this.detector.detectChanges();
  }

  close(result: boolean): void {
    this.command?.finish(result);
    this.command = undefined;
    this.visible = false;
    this.detector.detectChanges();
  }

  translate(text: string): string {
    return this._settings.translatePipe?.transform(text) ?? text;
  }
}
