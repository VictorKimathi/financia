import {create }  from "zustand"


type NewAccountState = {
    isOpen : boolean;
    onOpen: () => void;
    onClose: () => void;
}


export const useNewProfile= create<NewAccountState>((set) =>({
    isOpen:false,
    onOpen:() => set({isOpen: true}),
    onClose:() => set({isOpen: false}),

}))