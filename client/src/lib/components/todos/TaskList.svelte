<script>
    import { useTaskState } from '$lib/states/taskState.svelte.js';
    let { todoId } = $props();
    const taskState  = useTaskState();
</script>

<ul>
{#each taskState.tasks[todoId] as task }
    <li>
        <a href="/todos/{todoId}/tasks/{task.id}">{task.name}</a>
        <button onclick={() => taskState.removeTask(todoId, task.id)}>Remove</button>
    </li>
{/each}
</ul>