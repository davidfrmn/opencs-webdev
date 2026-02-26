<script>
    import { useTodoState } from '$lib/states/todoState.svelte.js';
    const { todos } = useTodoState();
</script>

<h1>Todos</h1>
<ul>
{#each todos as todo}
    <li>
        <a href="/todos/{todo.id}">{todo.name}</a>
    </li>
{/each}
</ul>
