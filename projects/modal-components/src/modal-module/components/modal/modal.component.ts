import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, signal, TemplateRef} from '@angular/core';
import { DestructibleComponent } from '../../common/destructible.component';
import { ModalPostboyService } from '../../services/modal-postboy.service';
import { ModalSettings } from '../../models';
import { CloseAllModalsCommand, OpenModalCommand } from '../../messages';
import { auditTime, filter } from 'rxjs/operators';
import { CloseModalCommand } from '../../messages/commands/close-modal.command';
import { ClassNameConstants } from '../../models/class-name-constants.enum';
import {NgIf} from "@angular/common";
import {LanguagePipe} from "../../common/language.pipe";
import {ModalBackdropComponent} from "./modal-backdrop/modal-backdrop.component";

@Component({
  selector: 'art-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    LanguagePipe,
    ModalBackdropComponent
  ]
})
export class ModalComponent extends DestructibleComponent implements OnInit {
  @Input() contentRef: TemplateRef<any> | null = null;
  ClassNameConstants = ClassNameConstants;
  panelClass = signal<string>('');
  visible = signal<boolean>(false);
  command?: OpenModalCommand;

  _settings = signal<ModalSettings>(new ModalSettings());

  @Input() set settings(value: ModalSettings | undefined) {
    if (!value || this._settings().isSame(value)) return;
    this._settings.set(value);
  }

  constructor(private postboy: ModalPostboyService) {
    super();
  }

  ngOnInit(): void {
    this.subs.push(
      this.postboy
        .sub(OpenModalCommand)
        .pipe(
          filter((cmd) => cmd.modalId === this._settings().id),
          auditTime(100),
        )
        .subscribe((cmd) => this.open(cmd)),
    );
    this.subs.push(
      this.postboy
        .sub(CloseModalCommand)
        .pipe(filter((cmd) => cmd.modalId === this._settings().id))
        .subscribe((cmd) => this.close(cmd.result)),
    );
    this.subs.push(this.postboy.sub(CloseAllModalsCommand).subscribe(() => this.close(false)));
  }

  open(cmd: OpenModalCommand): void {
    this.close(false);
    this.command = cmd;
    this.visible.set(true);
    this.panelClass.set(this._settings().panelClass.length ? `${this._settings().panelClass}` : '');
  }

  close(result: boolean): void {
    this.command?.finish(result);
    this.command = undefined;
    this.visible.set(false);
  }

  translate(text: string): string {
    return this._settings().translatePipe?.transform(text) ?? text;
  }
}
