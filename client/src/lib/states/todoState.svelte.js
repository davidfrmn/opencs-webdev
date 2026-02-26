let todoState = $state([
    ]);

const useTodoState = () => {
    return {
        get todos() {
            return todoState;
        },
        addTodo: (name) => {
            todoState.push({id: todoState.length+1, name:name})
        },
    };
};

export { useTodoState };