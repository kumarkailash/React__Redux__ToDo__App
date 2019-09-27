// const inatial_stae = {
//     inputData: []
// }




// const reducer = (state = inatial_stae, action) => {
//     switch (action.type) {
//         case "add":
//             state.inputData.push({value1:action.payload})
//             return {...state, inputData : state.inputData }
//         break;

//         case "delete":
//                 state.inputData.splice(action.payload,1)
//             return {...state, inputData: state.inputData}
//             break;


//         case "edit":
//             state.inputData.splice(action.payload.identity,1,{ value1: action.payload.updatteval })

//             return {...state, inputData: state.inputData}
//         default: return state
//     }

// }

// export default reducer;





const inatialState = {
    allList: []
}


const reducer = (state = inatialState, action) => {

    switch (action.type) {
        case "firebaseData":
            state.allList.push(action.payload)
            return { ...state, allList: state.allList.concat() }

        case "add":
            return { ...state, allList: state.allList.concat() }

        case 'delete':
            state.allList.splice(action.payload, 1)
            return { ...state, allList: state.allList.concat() }

        case 'edit':
            state.allList[action.payload.ind].edit = false
            return { ...state, allList: state.allList.concat() }

        case 'cancel':
            state.allList[action.payload].edit = true
            return { ...state, allList: state.allList.concat() }


        case 'update':
            state.allList.splice(action.payload.ind,1,(action.payload.obj))
            return { ...state, allList: state.allList.concat() }



        default: return state

    }

}


export default reducer