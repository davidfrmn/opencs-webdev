<script>
    let {todoId} = $props();
    import { useTaskState } from "$lib/states/taskState.svelte.js";
    const taskState = useTaskState();
    let taskName = $state("");

    function addTask() {
        if (!taskName.trim()) return;
        taskState.addTask(todoId, taskName);
        taskName = "";
    };
</script>

<input type="text" bind:value={taskName} placeholder="task name" />
<button onclick={addTask}>Add Task</button>