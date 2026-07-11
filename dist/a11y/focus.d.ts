export declare const FOCUSABLE_SELECTOR: string;
export type BodyScrollLock = {
    document: Document;
    previousOverflow: string;
};
type FocusableElement = HTMLElement & {
    disabled?: boolean;
};
export declare const getFocusableElements: (container: Pick<ParentNode, "querySelectorAll">) => FocusableElement[];
export declare const lockBodyScroll: (documentRef?: Document) => BodyScrollLock;
export declare const unlockBodyScroll: (lock: BodyScrollLock) => void;
export declare const restoreFocus: (element: Element | null | undefined, documentRef?: Document) => void;
export declare const trapTabKey: (event: Pick<KeyboardEvent, "key" | "shiftKey" | "preventDefault">, container: Pick<ParentNode, "querySelectorAll">, activeElement?: Element | null | undefined) => boolean;
export declare const createEscapeKeyHandler: (onEscape: () => void) => (event: Pick<KeyboardEvent, "key">) => void;
export {};
