import {create} from 'zustand';

const wordStore =create((set)=>({
    wordList:[],
    word:'',
    setWordList: (list)=>{
        set((state)=>{
            return{
                ...state,
                wordList: list
            }
        })
    },
    setWord:(newWord)=>{
        set((state)=>{
            return{
                ...state,
                word: newWord
            }
        })
    }
}));
export default wordStore;