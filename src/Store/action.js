import firebaseApp from "../config/firebase/firebase";

let database = firebaseApp.database().ref('/')
const firebaseData = () => {
    return async dispatch => {
        database.child('list').on('child_added', res => {
            let data = res.val()
            data.id = res.key
            dispatch({ type: 'firebaseData', payload: data })
        })

    }
}
const addTodo = (name) => {
    let id = database.child('list').push().key
    let obj = {
        value: name,
        id,
        edit: true
    }
    database.child(`list/${obj.id}`).set(obj)
    return {
        type: 'add',
    }
}
const remove = (val, ind) => {
    return async dispatch => {
        database.child(`list/${val.id}`).remove().then(
            dispatch({ type: 'delete', payload: ind })
        )
    }

}


const edit = (val, ind) => {
    return async dispatch => {
        database.child(`list/${val.id}`).update({ edit: false }).then(
            dispatch({
                type: 'edit', payload: {
                    ind,
                    name: val.value
                }
            })
        )
    }

}


const cancel = (val, ind) => {
    return async dispatch => {
        database.child(`list/${val.id}`).update({ edit: true }).then(
            dispatch({ type: 'cancel', payload: ind })
        )
    }

}



const update = (val, ind, updateval) => {

    let obj = {
        value: updateval,
        id: val.id,
        edit: true
    }

    return async dispatch => {
        database.child(`list/${val.id}`).set(obj).then(
            dispatch({
                type: 'update', payload: {
                    obj,
                    ind
                }
            })
        )
    }

}

export { firebaseData, addTodo, remove, edit, cancel, update };