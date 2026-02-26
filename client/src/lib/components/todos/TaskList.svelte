<script>
    let { todoId } = $props();
    import { useTaskState } from '$lib/states/taskState.svelte.js';
    const { tasks } = useTaskState();
</script>

<ul>
{#each tasks[todoId] ?? [] as task }
    <li>
        <a href="/todos/{todoId}/tasks/{task.id}">{task.name}</a>
    </li>
{/each}
</ul>