import {create} from 'zustand'


type UseSkillsProp = {
    selected: string
    setSelected: (select:string) => void
}


const useSkills = create<UseSkillsProp>((set) => ({
    selected: 'school',
    setSelected: (select) => set({selected: select}) 

}))

export default useSkills