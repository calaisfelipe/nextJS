import {create} from 'zustand'

type ModalProps = {
    open: boolean
    onShow: () => void
    onClose: () => void

}

const useModal = create<ModalProps>((set) =>({
    open: false,
    onShow: () => set({open: true}),
    onClose: () => set({open:false})
})

)

export default useModal