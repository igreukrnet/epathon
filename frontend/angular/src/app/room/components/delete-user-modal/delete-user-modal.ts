import { Component, input, output } from '@angular/core';

import { CommonModalTemplate } from '../../../shared/components/modal/common-modal-template/common-modal-template';
import {
  ButtonText,
  ModalSubtitle,
  ModalTitle,
  PictureName,
} from '../../../app.enum';

@Component({
  selector: 'app-delete-user-modal',
  imports: [CommonModalTemplate],
  templateUrl: './delete-user-modal.html',
  styleUrl: './delete-user-modal.scss',
})
export class DeleteUserModal {
  readonly userName = input.required<string>();

  readonly closeModal = output<void>();
  readonly confirmDelete = output<void>();

  public readonly pictureName = PictureName.Star;
  public readonly title = ModalTitle.DeleteUser;
  public readonly buttonText = ButtonText.Cancel;
  public readonly subtitle = ModalSubtitle.DeleteUser;

  public onCloseModal(): void {
    this.closeModal.emit();
  }

  public onCancelClick(): void {
    this.closeModal.emit();
  }

  public onConfirmDelete(): void {
    this.confirmDelete.emit();
  }
}
