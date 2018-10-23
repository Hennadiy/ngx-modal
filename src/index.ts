import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { Modal, ModalContent, ModalFooter, ModalHeader } from "./Modal";
import { RouteModal } from "./RouteModal";

@NgModule({
    imports: [CommonModule],
    declarations: [
        Modal,
        RouteModal,
        ModalHeader,
        ModalContent,
        ModalFooter,
    ],
    exports: [
        Modal,
        RouteModal,
        ModalHeader,
        ModalContent,
        ModalFooter,
    ],
})
export class ModalModule { }
