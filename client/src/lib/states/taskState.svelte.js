import { browser } from '$app/environment';

const KEY = "tasks";
let initial_tasks = {};

if (browser && localStorage.getItem(KEY) !== null) {
    initial_tasks = JSON.parse(localStorage.getItem(KEY));
}

let taskState = $state(initial_tasks);

const saveTasks = () => {
    if (browser) {
        localStorage.setItem(KEY, JSON.stringify(taskState));
    }
};

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
            const newId = tasklist.length > 0 ? Math.max(...tasklist.map(t => t.id)) + 1 : 1;
            taskState[todoId].push({ id: newId, name: name });
            saveTasks();
        },
        removeTask: (todoId, taskId) => {
            const tasklist = taskState[todoId];
            if (tasklist) {
                taskState[todoId] = tasklist.filter((task) => task.id !== taskId);
                saveTasks();
            }
        },
        removeAllTasks: (todoId) => {
            delete taskState[todoId];
            saveTasks();
        },
    };
};

export { useTaskState };