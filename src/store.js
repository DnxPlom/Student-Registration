import create from "zustand";

const useStore = create((set) => (
    {
        student: {
            firstname: "",
            lastname: "",
            dob: "",
            admissionNumber: ""
        },

        setStudentDetail: (detail) => set( (state) => {
            let toUpdate = Object.keys(detail)
            state.student[toUpdate] = detail[toUpdate] 
        }),

        parent: {
            firstname: "",
            secondname: "",
            phone: "",
            email: "",
            address: ""
        },

        setParentDetail: (detail) => set( (state) => {
            let toUpdate = Object.keys(detail)
            state.parent[toUpdate] = detail[toUpdate] 
        }),

        studentPhoto: null,

        errorCheck: false,

        updateCheck: (bool) => set( (state) => {
            state.errorCheck = bool === true ? true : !state.errorCheck
            setTimeout(() => state.errorCheck = false, 200)
        })

    }
));

export default useStore;