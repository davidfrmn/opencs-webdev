let taskState = $state({
    });

const useTaskState = () => {
    return {
        get tasks() {
            return taskState;
        },
        addTask: (todoId, name) => {
            if (!taskState[todoId]) {
                taskState[todoId] = [];
            }
            const tasklist = taskState[todoId];
            tasklist.push({ id: tasklist.length + 1, name: name });
        },
    };
};

export { useTaskState };