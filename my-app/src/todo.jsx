import React from 'react';
import {Component} from 'react';
class To extends Component {

    constructor() {//explain props
        super();

        this.state = {
            task: "",
            list: []
        }
    }

    updateInput(value) {
        this.setState({
            task: value,
        });
    }


    addItem() {
        if (this.state.task !== '') {
            const task = {
                id: Math.random(),
                value: this.state.task
            };

            const list = [...this.state.list];
            list.push(task);

            this.setState({
                list,
                task: ""
            });
        }
    }


    deleteItem(key) {

        const list = [...this.state.list];

        const updateList = list.filter(item => item.id !== key);
        this.setState({
            list: updateList,
        });
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        <h1>To-Do List</h1>
                        <input
                            type="text"
                            name="task"
                            value={this.state.task}
                            onChange={item => this.updateInput(item.target.value)}
                        />

                        <button onClick={() => this.addItem()}>Add Task</button>
                    </div>
                    <div>
                        <div>
                            {/* map over and print items */}
                            {this.state.list.map(item => {
                                return (
                                    <div>
                                        {item.value}<button onClick={() => this.deleteItem(item.id)}>done</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default To;