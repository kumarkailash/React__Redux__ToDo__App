import React from 'react';
import { connect } from "react-redux"

import { addTodo, firebaseData, remove, edit, cancel, update } from "./../Store/action"

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            content: '',
            updateVal: ''
        }
    }


    componentDidMount() {
        this.props.firebaseData()
    }

    add = () => {
        this.props.addTodo(this.state.content)
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className="maindiv">
                <center>
                    <div className="todoApp">
                        <p>Todo App</p>
                    </div>

                    <input type="text" value={this.state.content} placeholder='Enter Todo' onChange={(e) => this.setState({ content: e.target.value })} />
                    <button onClick={this.add}>Add</button>

                    <div className="TodoContent">
                        <ul>

                            {
                                this.props.data.map((val, ind) => {
                                    return <div key={ind}>
                                        {
                                            val.edit ?
                                                <div>
                                                    <input type='text' disabled={val.edit} value={val.value} />
                                                    <button
                                                        onClick={() => {
                                                            this.setState({ updateval: val.value })
                                                            this.props.edit(val, ind)
                                                        }
                                                        }

                                                    >Edit</button>
                                                    <button onClick={() => this.props.remove(val, ind)} >Delete</button>

                                                </div>

                                                :
                                                <div>
                                                    <input type='text' value={val.updateVal} disabled={val.edit} onChange={(e) => this.setState({ updateval: e.target.value })} />
                                                    <button onClick={() => this.props.update(val, ind, this.state.updateval)}>update</button>
                                                    <button onClick={() => this.props.cancel(val, ind)}>cancel</button>

                                                </div>


                                        }
                                    </div>
                                })
                            }



                        </ul>
                    </div>
                </center>

            </div>
        )
    }
}


const mapStatefromProps = state => {
    return {
        data: state.allList
    }
}


const mapdispatch = (dispatch) => {
    return {
        addTodo: (name) => dispatch(addTodo(name)),
        firebaseData: () => dispatch(firebaseData()),
        remove: (val, ind) => dispatch(remove(val, ind)),
        edit: (val, ind) => dispatch(edit(val, ind)),
        cancel: (val, ind) => dispatch(cancel(val, ind)),
        update: (val, ind, updateval) => dispatch(update(val, ind, updateval)),

    }
}



export default connect(mapStatefromProps, mapdispatch)(Home);